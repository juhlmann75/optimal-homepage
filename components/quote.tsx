export interface QuoteData {
    q: string,
    a: string,
    h: string
}

export default function Quote({data}: {data: QuoteData[]}) {

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