import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { name, email, company, subject, message } = body;

    // Validation
    if (!name || typeof name !== "string" || name.trim().length < 2) {
      return NextResponse.json(
        { success: false, error: "Please provide a valid full name (at least 2 characters)." },
        { status: 400 }
      );
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!email || !emailRegex.test(email.trim())) {
      return NextResponse.json(
        { success: false, error: "Please provide a valid email address." },
        { status: 400 }
      );
    }

    if (!message || typeof message !== "string" || message.trim().length < 10) {
      return NextResponse.json(
        { success: false, error: "Please provide a message with at least 10 characters." },
        { status: 400 }
      );
    }

    // Generate unique inquiry ID
    const inquiryId = "NOV-" + Math.random().toString(36).substring(2, 8).toUpperCase() + "-" + Date.now().toString().slice(-4);
    const receivedAt = new Date().toISOString();

    // Log the inquiry for operational monitoring
    console.log(`[Novion Inbound Inquiry] ID: ${inquiryId} from ${name} <${email}> (${company || "Individual"}): ${subject || "General inquiry"}`);

    return NextResponse.json({
      success: true,
      inquiryId,
      message: "Thank you for reaching out to Novion. Our engineering team has received your message.",
      receivedAt,
      details: {
        name: name.trim(),
        email: email.trim(),
        company: company ? company.trim() : "Not specified",
        subject: subject ? subject.trim() : "Battery Tech Consultation"
      }
    });
  } catch (error) {
    console.error("Contact API error:", error);
    return NextResponse.json(
      { success: false, error: "An unexpected error occurred while processing your request." },
      { status: 500 }
    );
  }
}
