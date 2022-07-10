import Head from 'next/head';
import styles from './layout.module.css';
import utilStyles from '../styles/utils.module.css';
import Link from 'next/link';
import React from "react";

const name = 'Jonathan Uhlmann';
export const siteTitle = 'Homepage';

export default function Layout({
    children,
    home
}: {
    children: React.ReactNode,
    home?: boolean
}) {
    return (
        <div className={styles.container}>
            <Head>
                <link rel="icon" href="/favicon.ico" />
                <meta
                    name="description"
                    content="Optimal Bookmarks"
                />
                <meta name="og:title" content={siteTitle} />
            </Head>
            <header className={styles.header}>
                <>
                    <h1 className="text-3xl font-bold underline">{name}</h1>
                </>
            </header>
            <main>
                {children}
            </main>
            {!home && (
                <div className={styles.backToHome}>
                    <Link href="/">
                        <a>← Back to home</a>
                    </Link>
                </div>
            )}
        </div>
    );}