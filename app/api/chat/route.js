// app/api/chat/route.js
import { google } from '@ai-sdk/google';
import { streamText } from 'ai';

export const maxDuration = 30;

export async function POST(req) {
  try {
    const { messages } = await req.json();

    // Streams real-time text from the fast gemini-1.5-flash model
    const result = await streamText({
      model: google('gemini-1.5-flash'),
      messages,
    });

    return result.toDataStreamResponse();
  } catch (error) {
    console.error('AI Route Error:', error);
    return new Response(JSON.stringify({ error: 'Failed to process request' }), { status: 500 });
  }
}