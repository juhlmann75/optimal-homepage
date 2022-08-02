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
        <div>
            <blockquote>
                <p className="text-center text-3xl subpixel-antialiased mt-8">"{quote.q}"</p>
            </blockquote>
            <figcaption className="flex items-center justify-center my-3 space-x-3">
                <div className="pr-3 font-medium text-gray-900 dark:text-white">- {quote.a}</div>
            </figcaption>
        </div>
    )
}