const { GoogleGenAI } = require("@google/genai");

const ai = new GoogleGenAI({
    apiKey: process.env.GEMINI_API_KEY
});

// =========================
// Generate Pre-Visit Summary
// =========================
const generatePreVisitSummary = async (symptoms) => {

    try {

        const response = await ai.models.generateContent({

            model: "gemini-2.5-flash",

            contents: `
You are an experienced medical assistant.

Summarize the patient's symptoms professionally in 3-5 concise sentences.

Symptoms:
${symptoms}
`

        });

        return response.text;

    } catch (error) {

        console.error("Gemini Error:", error.message);

        return "Unable to generate AI pre-visit summary.";

    }

};

// =========================
// Generate Post-Visit Summary
// =========================
const generatePostVisitSummary = async (notes) => {

    try {

        const response = await ai.models.generateContent({

            model: "gemini-2.5-flash",

            contents: `
You are an experienced medical assistant.

Generate a concise post-visit summary based on these doctor's notes.

Doctor Notes:
${notes}
`

        });

        return response.text;

    } catch (error) {

        console.error("Gemini Error:", error.message);

        return "Unable to generate AI post-visit summary.";

    }

};

module.exports = {

    generatePreVisitSummary,

    generatePostVisitSummary

};