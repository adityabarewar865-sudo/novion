import { NextRequest, NextResponse } from "next/server";
import { COMPANY_INFO, CORE_FOCUS_AREAS, SOLUTIONS, MEDIA_GALLERY } from "@/data/novionData";

export interface SearchResult {
  id: string;
  title: string;
  category: "Solutions" | "Company" | "Focus Area" | "Media";
  snippet: string;
  targetId: string;
  url: string;
  score: number;
}

export async function GET(request: NextRequest) {
  const { searchParams } = new URL(request.url);
  const query = (searchParams.get("q") || "").trim().toLowerCase();

  if (!query) {
    return NextResponse.json({ results: [], query: "" });
  }

  const queryTerms = query.split(/\s+/).filter(Boolean);
  const results: SearchResult[] = [];

  // Helper function to calculate matching score & generate snippet
  const evaluateText = (text: string, title: string): { score: number; snippet: string } => {
    let score = 0;
    const lowerText = text.toLowerCase();
    const lowerTitle = title.toLowerCase();

    // Exact phrase match in title
    if (lowerTitle.includes(query)) {
      score += 50;
    }

    // Exact phrase match in body
    if (lowerText.includes(query)) {
      score += 25;
    }

    // Term by term match
    for (const term of queryTerms) {
      if (lowerTitle.includes(term)) score += 15;
      if (lowerText.includes(term)) score += 5;
    }

    if (score === 0) {
      return { score: 0, snippet: "" };
    }

    // Generate snippet centered around first match
    let firstIndex = lowerText.indexOf(queryTerms[0]);
    if (firstIndex === -1) firstIndex = 0;
    const start = Math.max(0, firstIndex - 40);
    const end = Math.min(text.length, firstIndex + 100);
    let snippet = text.substring(start, end).trim();
    if (start > 0) snippet = "..." + snippet;
    if (end < text.length) snippet = snippet + "...";

    return { score, snippet };
  };

  // 1. Search Solutions
  for (const sol of SOLUTIONS) {
    const combined = `${sol.title} ${sol.tagline} ${sol.description} ${sol.longDescription} ${sol.features.join(" ")}`;
    const { score, snippet } = evaluateText(combined, sol.title);
    if (score > 0) {
      results.push({
        id: `sol-${sol.id}`,
        title: sol.title,
        category: "Solutions",
        snippet: snippet || sol.description.slice(0, 110) + "...",
        targetId: sol.id,
        url: `/solutions#${sol.id}`,
        score
      });
    }
  }

  // 2. Search Core Focus Areas
  for (const focus of CORE_FOCUS_AREAS) {
    const combined = `${focus.title} ${focus.subtitle} ${focus.description} ${focus.highlights.join(" ")}`;
    const { score, snippet } = evaluateText(combined, focus.title);
    if (score > 0) {
      results.push({
        id: `focus-${focus.title.toLowerCase().replace(/[^a-z0-9]+/g, "-")}`,
        title: focus.title,
        category: "Focus Area",
        snippet: snippet || focus.description.slice(0, 110) + "...",
        targetId: "focus-areas",
        url: `/company#focus-areas`,
        score
      });
    }
  }

  // 3. Search Company & Founder Info
  const companyCombined = `${COMPANY_INFO.name} ${COMPANY_INFO.owner} ${COMPANY_INFO.role} ${COMPANY_INFO.slogan} ${COMPANY_INFO.mission} ${COMPANY_INFO.detailedOverview.join(" ")}`;
  const companyEval = evaluateText(companyCombined, "Novion Company & Founder");
  if (companyEval.score > 0) {
    results.push({
      id: "company-overview",
      title: `Novion Energy Technology - Founded by ${COMPANY_INFO.owner}`,
      category: "Company",
      snippet: companyEval.snippet || COMPANY_INFO.summary.slice(0, 110) + "...",
      targetId: "company",
      url: `/company`,
      score: companyEval.score
    });
  }

  // 4. Search Media Gallery
  for (const media of MEDIA_GALLERY) {
    const combined = `${media.title} ${media.description} ${media.tags.join(" ")}`;
    const { score, snippet } = evaluateText(combined, media.title);
    if (score > 0) {
      results.push({
        id: `media-${media.id}`,
        title: media.title,
        category: "Media",
        snippet: snippet || media.description.slice(0, 110) + "...",
        targetId: "media-showcase",
        url: `/media#${media.id}`,
        score
      });
    }
  }

  // Sort by relevance score descending
  results.sort((a, b) => b.score - a.score);

  return NextResponse.json({
    query,
    total: results.length,
    results
  });
}
