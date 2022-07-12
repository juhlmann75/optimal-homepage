import Head from 'next/head';
import Link from 'next/link';
import React from "react";

export const siteTitle = 'Optimal Homepage';

export default function Layout({
    children,
    home
}: {
    children: React.ReactNode,
    home?: boolean
}) {
    return (
        <div className="container">
            <Head>
                <title>{siteTitle}</title>
                <link rel="icon" href="/favicon.ico" />
                <meta
                    name="description"
                    content="Optimal Bookmarks"
                />
                <meta name="og:title" content={siteTitle} />
            </Head>
            <header>
                <div className="container">
                    <h1 className="text-center text-3xl font-bold">{siteTitle}</h1>
                </div>
            </header>
            <main>
                {children}
            </main>
            {!home && (
                <div>
                    <Link href="/">
                        <a>← Back to home</a>
                    </Link>
                </div>
            )}
        </div>
    );}