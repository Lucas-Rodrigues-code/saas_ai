import { auth } from "@clerk/nextjs";
import { NextResponse } from "next/server";

import OpenAI from "openai";
import { ChatCompletionAssistantMessageParam } from "openai/resources/index.mjs";

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

const instructionsMessage: ChatCompletionAssistantMessageParam = {
  role: "assistant",
  content:
    "Você é um gerador de código. Você deve responder apenas com código. Use comentários do código para explicações",
};

export async function POST(req: Request) {
  try {
    const { userId } = auth();
    const body = await req.json();
    const { messages } = body;

    if (!userId) {
      return new NextResponse("Unauthorized", { status: 401 });
    }
    if (!openai.apiKey) {
      return new NextResponse("Openai API KEY not configured", { status: 500 });
    }
    if (!messages) {
      return new NextResponse("Messages are required", { status: 400 });
    }

    const response = await openai.chat.completions.create({
      model: "gpt-3.5-turbo",
      messages:[instructionsMessage, ...messages],
    });

    return NextResponse.json(response.choices[0], { status: 200 });
  } catch (e) {
    console.log("[ERROR] code]", e, "error");
    return new NextResponse("Internal Server Error", { status: 500 });
  }
}
