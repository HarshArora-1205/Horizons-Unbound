// Imports
import { NextResponse } from "next/server";
import { OpenAI } from "openai";

// Configure OpenAI
const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

// Define POST Request
export async function POST(request: Request) {
  try {

    // Parse data from request and fetch title & role
    const { title, role } = await request.json();

    // Get auto generated AI Content
    const completion = await openai.chat.completions.create({
      messages: [
        { role: "user", content: `Create 3 line blog post with html tags based on this title: ${title}` },
        { role: "system", content: `${ role || "I am a helpful assistant" }. Write with html tags.`,},
      ],
      model: "gpt-3.5-turbo",
    });

    // Send the generated content
    return NextResponse.json(
      {
        content: completion.choices[0]?.message?.content,
      },
      { status: 200 }
    );
  } 
  // Catch Errors
  catch (error) {
    console.error("request error", error);
    NextResponse.json({ error: "error updating post" }, { status: 500 });
  }
}