import { NextResponse } from "next/server";

export async function POST(req: Request) {
  const body = await req.json();

  const foundations = {
    designPrinciples: [
      "Accessible by Default",
      "Delightful Micro-Interactions",
      "Supportive, Never Overwhelming",
    ],
    systemTokens: {
      primaryColor: "#0070f3",
      borderRadius: "8px",
      font: "Inter",
    },
    toneOfVoice: "Friendly, Reassuring, and Clear",
    interactionPatterns: [
      "Progressive Disclosure",
      "Smart Defaults",
      "Clear Loading & Success States",
    ],
  };

  return NextResponse.json({ context: foundations });
}
