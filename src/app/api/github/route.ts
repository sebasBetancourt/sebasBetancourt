import { NextResponse } from "next/server";
import { getGithubActivity } from "@/lib/github";

export const revalidate = 3600;

export async function GET() {
  try {
    return NextResponse.json(await getGithubActivity());
  } catch (err) {
    console.error("[api/github]", err);
    return NextResponse.json({ error: "GitHub data unavailable" }, { status: 502 });
  }
}
