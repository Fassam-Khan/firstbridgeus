"use client"
import React, { useState, useEffect } from 'react';
import { GoogleGenerativeAI } from '@google/generative-ai';

const Chatbot = () => {
    // 1. Create a state to store the AI response
    const [aiResponse, setAiResponse] = useState("Loading...");

    useEffect(() => {
        // 2. Define the async function inside useEffect
        async function fetchAIResponse() {
            try {
                // Correct initialization (Pass the key string directly, not an object)
                const genAI = new GoogleGenerativeAI("AQ.Ab8RN6KCc12MKAvisWWc0EjRJvb-BgjAWVg50IXwlVpMGxAERg");
                
                // Get the model instance
                const model = genAI.getGenerativeModel({ model: "gemini-3.5-flash" });

                // Call the API
                const result = await model.generateContent("Explain how AI works in a few words");
                
                // Update state with the text response
                setAiResponse(result.response.text());
            } catch (error) {
                console.error("Error fetching AI response:", error);
                setAiResponse("Failed to fetch response from AI.");
            }
        }

        fetchAIResponse();
    }, []); // Empty dependency array means this runs once when the component mounts

    return (
        <div style={{ padding: '20px', fontFamily: 'sans-serif' }}>
            <h3>AI Response:</h3>
            <p>{aiResponse}</p>
        </div>
    );
};

export default Chatbot;