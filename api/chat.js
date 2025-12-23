import { GoogleGenerativeAI } from "@google/generative-ai";

export default async function handler(req, res) {
    if (req.method != 'POST') {
        return res.status(405).json({ error: 'Method Not Allowed' });
    }

    const { message } = req.body;

    try {
        const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);

        const model = genAI.getGenerativeModel({ model: "gemini-3-flash-preview" });

        const context = `
            You are a helpful and professional portfolio assistant for Nurkahfi.
            Use the following context to answer the user's question.
            
            [CONTEXT ABOUT ME]
            - Name: Nurkahfi Amran Rahmada
            - Role: Software Developer Specialized in AI Products
            - Key Projects: MPI Benchmark Baremetal vs K8s, Sobat Warung, Nyisa
            - Tech Stack: Next.js, Express.js, Python, React, Tensorflow, PyTorch, Huggingface Transformers
            - Contact: nurkahfirahmada@gmail.com
            
            [INSTRUCTIONS]
            - Keep answers concise and friendly.
            - The question can be in Indonesian or English, adjust with user language
            - Just make the output one paragraph long and don't use complex formatting like bold, numbering, etc
            - If the answer isn't in the context, say: "I don't have that info, but you can email Kahfi directly!"
            - Do not make up facts.
        `;

        const result = await model.generateContent(`${context}\n\nUser Question: ${message}`);
        const response = await result.response;
        const text = response.text();

        res.status(200).json({ reply: text });
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Something Went Wrong', message: error });
    }
}