import Head from "next/head"
import Header from "./Header"
import Footer from "./Footer"

export default function Layout({title, keywords, description, children}) {
    return (
        <div>
            <Head>
                <title>{title}</title>
                <meta
                    name='description'
                    content={description}
                    />
                <meta
                    name='keywords'
                    content={keywords}
                    />
            </Head>
            <Header />
            {children}
            <Footer />
        </div>
    )
}

Layout.defaultProps = {
    title: 'Tennis Pickup | fast and free tennis meetup',
    description: 'meet tennis players of all levels free, anytime.',
    keywords: 'tennis, meetup, sports, pickeball,'

}
