import {useEffect, useState} from "react";

export interface QuoteData {
    q: string,
    a: string,
    h: string
}

export default function Quote() {
    const quoteApiUrl = '/api/today';
    const [quote, setQuote] = useState<QuoteData>()
    const [isLoading, setLoading] = useState(false)

    useEffect(() => {
        setLoading(true)
        fetch(quoteApiUrl)
            .then((res) => res.json())
            .then((data: QuoteData[]) => {
                setQuote(data[0])
                setLoading(false)
            })
    }, [])

    if (isLoading) return <p>Loading...</p>
    if (!quote) return <p>No data</p>

    return (
        <div className="text-center text-4xl subpixel-antialiased my-5">
            <blockquote>&ldquo; {quote.q}
                &rdquo; &mdash;
                <footer>{quote.a}</footer>
            </blockquote>
        </div>
    )
}