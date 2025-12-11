import { useState, useEffect } from "react";

export default function DailyQuotes() {
    const [quote, setQuote] = useState({
        content: "fetching good quotes for you...",
        author: "me"
    })

    useEffect(() => {
        const fetchQuote = async () => {
            const today = new Date().toDateString()
            const localQuote = localStorage.getItem("dailyQuote");
            const localDate = localStorage.getItem("dailyQuoteDate");

            if (localQuote && localDate === today) {
                setQuote(JSON.parse(localQuote))
            } else {
                try {
                    const res = await fetch("https://stoic-quotes.com/api/quote");
                    const data = await res.json()

                    const newQuote = { content: data.text, author: data.author }

                    setQuote(newQuote)
                    localStorage.setItem("dailyQuote", JSON.stringify(newQuote));
                    localStorage.setItem("dailyQuoteDate", today)
                } catch (error) {
                    console.error("Error fetching quote: ", error);
                    setQuote({
                        content: "Learn, Code, Sleep, Repeat",
                        author: "Fulan",
                    });
                }
            }
        }

        fetchQuote()
    }, [])

    return (
        <>
            <p>
                "{quote.content}"
            </p>
            <p>
                --- {quote.author}
            </p>
        </>
    )
}