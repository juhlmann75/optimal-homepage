import Script from "next/script";
import {useEffect, useState} from "react";

export default function Search() {
    const [loaded, setLoaded] = useState(false);

    useEffect(() => {
        const scriptTag = document.createElement('script');
        scriptTag.src = 'https://cse.google.com/cse.js?cx=f175aeb8db7f24a31';
        scriptTag.addEventListener('load', ()=>setLoaded(true));
        document.body.appendChild(scriptTag);
    }, []);

    useEffect(() => {
        if (!loaded) return;
        const searchBox = document.getElementById("gsc-i-id1");

        if (searchBox != null) {
            console.log("not null");
            searchBox.focus();
        }
        console.log(document);
        console.log(loaded);
    }, [loaded]);

    return (
        <div className="text-center search">
            <div className="max-w-lg mx-auto my-3">
                <div className="gcse-search"></div>
            </div>
        </div>
    )
}