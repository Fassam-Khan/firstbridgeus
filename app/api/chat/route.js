// app/api/chat/route.js
import { google } from '@ai-sdk/google';
// Allows streaming responses up to 30 seconds
export const maxDuration = 30;

export async function POST(req) {
  try {
    // Extract the conversation history sent from the frontend useChat hook
    const { messages } = await req.json();

    // Call Gemini using the fast, lightweight 1.5-flash model
    const result = await streamText({
      model: google('gemini-1.5-flash'),
      messages,
    });

    // Return the response as a standardized data stream
    return result.toDataStreamResponse();
  } catch (error) {
    console.error('Error in AI chat route:', error);
    return new Response(
      JSON.stringify({ error: 'Failed to process AI request' }), 
      { status: 500, headers: { 'Content-Type': 'application/json' } }
    );
  }
}