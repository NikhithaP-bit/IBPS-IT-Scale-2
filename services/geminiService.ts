import { GoogleGenAI, Type } from "@google/genai";

const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });

export interface TopicExplanationResponse {
  explanation: string;
  visualAidNeeded: boolean;
}

export const getTopicExplanation = async (subjectName: string, topicName: string): Promise<TopicExplanationResponse> => {
  const prompt = `
    Analyze the topic "${topicName}" from the subject "${subjectName}" for someone preparing for the IBPS Scale 2 IT Officer exam.
    
    First, determine if a visual aid (like a diagram, flowchart, or image) would significantly help in understanding this topic.
    
    Second, provide a clear and concise explanation formatted in simple HTML. Structure the explanation with the following HTML tags:
    - Use <h2> for main headings (like "Introduction", "Core Concepts").
    - Use <p> tags for paragraphs. Keep paragraphs short (2-4 sentences).
    - Use <ul> and <li> for bullet points to list key terms or concepts.
    - Use <strong> to highlight important keywords.
    - Use <h3> for sub-headings within a main section if needed.
    
    Example Structure:
    <h2>Introduction</h2>
    <p>A brief overview of the topic...</p>
    <h2>Core Concepts</h2>
    <ul>
      <li><strong>Term 1:</strong> Definition here.</li>
      <li><strong>Term 2:</strong> Definition here.</li>
    </ul>
    <h2>Example</h2>
    <p>A simple, practical example to illustrate the concepts...</p>
    <h2>Exam Importance</h2>
    <p>Briefly mention why this topic is important for the exam.</p>

    The entire explanation should be a single, valid HTML string. The tone should be educational and easy to understand. Avoid overly complex jargon.
    
    Return your response as a JSON object.
  `;

  try {
    const response = await ai.models.generateContent({
        model: 'gemini-2.5-flash',
        contents: prompt,
        config: {
            responseMimeType: "application/json",
            responseSchema: {
                type: Type.OBJECT,
                properties: {
                    explanation: {
                        type: Type.STRING,
                        description: 'The detailed explanation of the topic, formatted as a string containing simple HTML.'
                    },
                    visualAidNeeded: {
                        type: Type.BOOLEAN,
                        description: 'A boolean value indicating if a visual aid would be helpful.'
                    }
                },
                required: ['explanation', 'visualAidNeeded']
            }
        }
    });
    
    const jsonString = response.text.trim();
    const parsedResponse = JSON.parse(jsonString);

    return {
        explanation: parsedResponse.explanation || "<p>No explanation provided.</p>",
        visualAidNeeded: parsedResponse.visualAidNeeded || false,
    };
  } catch (error) {
    console.error("Error fetching explanation from Gemini API:", error);
    throw new Error("Failed to load content. Please check your API key and network connection, then try again.");
  }
};