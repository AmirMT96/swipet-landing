import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  const { profession, likes, changes, wouldUse, name, email } =
    await req.json();

  const apiKey = process.env.BREVO_CONTACTS_API_KEY;
  const recipient = process.env.BREVO_FEEDBACK_RECIPIENT;

  if (!apiKey || !recipient) {
    console.error("Missing BREVO_CONTACTS_API_KEY or BREVO_FEEDBACK_RECIPIENT");
    return NextResponse.json({ error: "Server misconfiguration" }, { status: 500 });
  }

  const html = `
    <div style="font-family: Inter, sans-serif; max-width: 600px; margin: 0 auto; padding: 32px; color: #2C2C2A;">
      <div style="background: linear-gradient(135deg, #F0956A, #E27289); border-radius: 16px; padding: 24px; margin-bottom: 32px;">
        <h1 style="color: white; margin: 0; font-size: 24px;">🐾 Neues Swipet Feedback</h1>
      </div>

      <table style="width: 100%; border-collapse: collapse;">
        <tr>
          <td style="padding: 12px 0; border-bottom: 1px solid #f0f0f0; color: #888; width: 40%; font-size: 13px; text-transform: uppercase; letter-spacing: 0.05em;">Beruf</td>
          <td style="padding: 12px 0; border-bottom: 1px solid #f0f0f0; font-weight: 500;">${profession || "–"}</td>
        </tr>
        <tr>
          <td style="padding: 12px 0; border-bottom: 1px solid #f0f0f0; color: #888; font-size: 13px; text-transform: uppercase; letter-spacing: 0.05em;">Gefällt mir</td>
          <td style="padding: 12px 0; border-bottom: 1px solid #f0f0f0;">${likes || "–"}</td>
        </tr>
        <tr>
          <td style="padding: 12px 0; border-bottom: 1px solid #f0f0f0; color: #888; font-size: 13px; text-transform: uppercase; letter-spacing: 0.05em;">Änderungen</td>
          <td style="padding: 12px 0; border-bottom: 1px solid #f0f0f0;">${changes || "–"}</td>
        </tr>
        <tr>
          <td style="padding: 12px 0; border-bottom: 1px solid #f0f0f0; color: #888; font-size: 13px; text-transform: uppercase; letter-spacing: 0.05em;">Würde App nutzen</td>
          <td style="padding: 12px 0; border-bottom: 1px solid #f0f0f0;">
            <span style="background: #E27289; color: white; padding: 4px 12px; border-radius: 999px; font-size: 13px; font-weight: 600;">${wouldUse || "–"}</span>
          </td>
        </tr>
        <tr>
          <td style="padding: 12px 0; border-bottom: 1px solid #f0f0f0; color: #888; font-size: 13px; text-transform: uppercase; letter-spacing: 0.05em;">Name</td>
          <td style="padding: 12px 0; border-bottom: 1px solid #f0f0f0;">${name || "–"}</td>
        </tr>
        <tr>
          <td style="padding: 12px 0; color: #888; font-size: 13px; text-transform: uppercase; letter-spacing: 0.05em;">E-Mail</td>
          <td style="padding: 12px 0;">${email ? `<a href="mailto:${email}" style="color: #E27289;">${email}</a>` : "–"}</td>
        </tr>
      </table>

      <p style="color: #bbb; font-size: 12px; margin-top: 32px; text-align: center;">
        Gesendet über swipet.de
      </p>
    </div>
  `;

  try {
    const res = await fetch("https://api.brevo.com/v3/smtp/email", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        accept: "application/json",
        "api-key": apiKey,
      },
      body: JSON.stringify({
        sender: { name: "Swipet Feedback", email: recipient },
        to: [{ email: recipient }],
        subject: `🐾 Neues Feedback${name ? ` von ${name}` : ""} – Swipet`,
        htmlContent: html,
      }),
    });

    if (!res.ok) {
      const err = await res.json().catch(() => ({}));
      console.error("Brevo API error:", res.status, err);
      return NextResponse.json({ error: "Failed to send email" }, { status: 500 });
    }

    return NextResponse.json({ success: true });
  } catch (err) {
    console.error("Fetch error:", err);
    return NextResponse.json({ error: "Failed to send email" }, { status: 500 });
  }
}
