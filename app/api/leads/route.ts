import { NextResponse } from "next/server";
import { getSupabaseServer } from "@/lib/supabaseServer";
import type { LeadInput } from "@/lib/types";

export const runtime = "nodejs";

function isEmail(s: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(s);
}

export async function POST(request: Request) {
  let body: Partial<LeadInput>;
  try {
    body = (await request.json()) as Partial<LeadInput>;
  } catch {
    return NextResponse.json({ error: "Invalid JSON" }, { status: 400 });
  }

  const name = (body.name ?? "").toString().trim();
  const email = (body.email ?? "").toString().trim();

  if (!name || !email) {
    return NextResponse.json(
      { error: "Name and email are required." },
      { status: 400 }
    );
  }
  if (!isEmail(email)) {
    return NextResponse.json(
      { error: "Please enter a valid email address." },
      { status: 400 }
    );
  }

  const sb = getSupabaseServer();
  if (!sb) {
    // Supabase not configured. Log and accept gracefully so demo deployments still work.
    console.warn("[leads] Supabase not configured. Lead received (not stored):", {
      name,
      email,
      company: body.company,
      source_page: body.source_page,
    });
    return NextResponse.json({
      ok: true,
      stored: false,
      message: "Received (Supabase not configured).",
    });
  }

  const insert = {
    name,
    email,
    company: body.company ?? null,
    role: body.role ?? null,
    country: body.country ?? null,
    audience_type: body.audience_type ?? null,
    message: body.message ?? null,
    source_page: body.source_page ?? null,
  };

  const { error } = await sb.from("leads").insert(insert);
  if (error) {
    console.error("[leads] insert failed", error);
    return NextResponse.json(
      { error: "Could not save your message. Please try again." },
      { status: 500 }
    );
  }

  return NextResponse.json({ ok: true, stored: true });
}
