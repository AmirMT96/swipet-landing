import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  const { email, firstName, lastName } = await req.json();

  if (!email) {
    return NextResponse.json({ error: "Email is required" }, { status: 400 });
  }

  const apiKey = process.env.BREVO_CONTACTS_API_KEY;
  if (!apiKey) {
    console.error("BREVO_CONTACTS_API_KEY is not set");
    return NextResponse.json({ error: "Server misconfiguration" }, { status: 500 });
  }

  const listId = parseInt(process.env.BREVO_LIST_ID ?? "2");

  const res = await fetch("https://api.brevo.com/v3/contacts", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      accept: "application/json",
      "api-key": apiKey,
    },
    body: JSON.stringify({
      email,
      attributes: {
        FIRSTNAME: firstName ?? "",
        LASTNAME: lastName ?? "",
      },
      listIds: [listId],
      updateEnabled: true,
    }),
  });

  // 204 = no content (contact already existed, updated), 201 = created
  if (res.status === 201 || res.status === 204) {
    return NextResponse.json({ success: true });
  }

  const error = await res.json().catch(() => ({}));
  console.error("Brevo API error:", res.status, error);
  return NextResponse.json({ error: "Failed to subscribe" }, { status: 500 });
}
