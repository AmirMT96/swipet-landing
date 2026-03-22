import { NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(req: NextRequest) {
  const { profession, likes, changes, wouldUse, name, email } =
    await req.json();

  const smtpUser = process.env.BREVO_SMTP_USER;
  const smtpPass = process.env.BREVO_API_KEY; // xsmtpsib- key = SMTP password
  const recipient = process.env.BREVO_FEEDBACK_RECIPIENT;

  if (!smtpUser || !smtpPass || !recipient) {
    console.error("Missing BREVO_SMTP_USER, BREVO_API_KEY or BREVO_FEEDBACK_RECIPIENT");
    return NextResponse.json({ error: "Server misconfiguration" }, { status: 500 });
  }

  const transporter = nodemailer.createTransport({
    host: "smtp-relay.brevo.com",
    port: 587,
    secure: false,
    auth: {
      user: smtpUser,
      pass: smtpPass,
    },
  });

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
    await transporter.sendMail({
      from: `"Swipet Feedback" <${recipient}>`,
      to: recipient,
      subject: `🐾 Neues Feedback${name ? ` von ${name}` : ""} – Swipet`,
      html,
    });

    return NextResponse.json({ success: true });
  } catch (err) {
    console.error("Nodemailer error:", err);
    return NextResponse.json({ error: "Failed to send email" }, { status: 500 });
  }
}
