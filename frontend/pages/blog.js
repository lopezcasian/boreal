import Layout from "../components/Layout/layout";
import fetch from 'node-fetch'

export default function Blog( { blog } ) {
    return (
        <Layout>
            "Hi! Blog"
        </Layout>
    );
}

Blog.getInitialProps = async () => {
    let res = await fetch( process.env.NEXT_PUBLIC_API_URL + '/blogs')
    let json = await res.json()
    return { blog: json }
}