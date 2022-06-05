import Head from 'next/head'
import Layout, { siteTitle } from '../components/layout'
import utilStyles from '../styles/utils.module.css'
import { GetStaticProps } from 'next'

export default function Home() {
    return (
        <Layout home>
            <Head>
                <title>{siteTitle}</title>
            </Head>
            <section className={utilStyles.headingMd}>
            </section>
        </Layout>
    )
}

export const getStaticProps: GetStaticProps = async () => {
    return {
        props: {

        }
    }
}