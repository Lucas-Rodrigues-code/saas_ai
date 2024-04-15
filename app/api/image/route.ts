import { auth } from "@clerk/nextjs";
import { NextResponse } from "next/server";

import OpenAI from "openai";

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

export async function POST(req: Request) {
  try {
    const { userId } = auth();
    const body = await req.json();
    const { prompt, amount = 1, resolution = "512x512" } = body;

    if (!userId) {
      return new NextResponse("Unauthorized", { status: 401 });
    }
    if (!openai.apiKey) {
      return new NextResponse("Openai API KEY not configured", { status: 500 });
    }
    if (!prompt) {
      return new NextResponse("prompt is required", { status: 400 });
    }

    if (!amount) {
      return new NextResponse("amount is required", { status: 400 });
    }

    if (!resolution) {
      return new NextResponse("resolution is required", { status: 400 });
    }

    const response = await openai.images.generate({
      prompt,
      n: parseInt(amount),
      size: resolution,
    });

    return NextResponse.json(response.data, { status: 200 });
  } catch (e) {
    console.log("[ERROR] image]", e, "error");
    return new NextResponse("Internal Server Error", { status: 500 });
  }
}
