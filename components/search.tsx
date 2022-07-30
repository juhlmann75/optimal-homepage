import Script from "next/script";

export default function Search() {
    return (
        <div className="flex flex-col mx-20 my-4 text-black search">
            <Script async src="https://cse.google.com/cse.js?cx=f175aeb8db7f24a31">
            </Script>
            <div className="gcse-search"></div>
        </div>
    )
}