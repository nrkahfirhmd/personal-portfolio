import { useState } from "react";
import Terminal from "../components/Terminal";
import TerminalLine from "../components/TerminalLine";

export default function Chat() {
    const [input, setInput] = useState('')
    const [messages, setMessages] = useState([]);
    const [isLoading, setIsLoading] = useState(false) 

    const sendMessage = async () => {
        if (!input) return;

        const newEntry = { cmd: input, response: "thinking..." }

        const newMessages = [...messages, newEntry]
        setMessages(newMessages)
        setInput('')
        setIsLoading(true)

        try {
            const response = await fetch('/api/chat', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ message: input })
            });

            const data = await response.json()
            setMessages((prev) => {
                const newMessages = [...prev]
                newMessages[newMessages.length - 1].response = data.reply;
                return newMessages
            })
        } catch (error) {
            console.error("Error:", error);
        } finally {
            setIsLoading(false)
        }
    }

    return (
        <>
            <Terminal>
                <TerminalLine command="">
                    <p>Hi! you can ask me anything about Nurkahfi (well not entirely <span className="font-bold">*anything*</span> but you get it)</p>
                </TerminalLine>
                {messages.map((item, i) => (
                    <TerminalLine key={i} permission="guest ~ $" command={item.cmd}>
                        {item.response}
                    </TerminalLine>
                ))}
                <div className="rounded-lg w-full bg-[var(--color-bg)] border border-[var(--color-text)] flex gap-2 p-2 sticky bottom-0">
                    <p>
                        &gt;
                    </p>
                    <input
                        type="text" name="message" id="message" 
                        placeholder="message me..." 
                        className="text-sm outline-none w-full" 
                        value={input}
                        onChange={(e) => setInput(e.target.value)}
                        onKeyDown={(e) => e.key === 'Enter' && sendMessage()}
                        />
                </div>
            </Terminal>
        </>
    )
}