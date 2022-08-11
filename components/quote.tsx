import {useEffect, useState} from "react";
import {Spinner} from "flowbite-react";

export interface QuoteData {
    q: string,
    a: string,
    h: string
}

export default function Quote() {
    const [data, setData] = useState<QuoteData[]>()
    const [isLoading, setLoading] = useState(false)

    useEffect( () => {
        const fetchQuote = async () => {
            setLoading(true)
            await fetch('/api/today')
                .then((res) => res.json())
                .then((quoteData) => {
                    setData(quoteData)
                })
        }
        fetchQuote().then(() => {
            setLoading(false)
        });
    }, [])

    if (isLoading) return <Spinner size="xl" aria-label="loading daily quote" />
    if (!data) return <p>No quote data</p>

    return (
        <div>
            <blockquote>
                <p className="text-center text-3xl subpixel-antialiased mt-8">&ldquo;{data[0].q}&rdquo;</p>
            </blockquote>
            <figcaption className="flex items-center justify-center my-3 space-x-3">
                <div className="pr-3 font-medium text-gray-900 dark:text-white">- {data[0].a}</div>
            </figcaption>
        </div>
    )
}