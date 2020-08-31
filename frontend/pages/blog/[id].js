import Layout from '../../components/Layout/layout'
import Link from 'next/link'
import { getBlogIds } from '../../lib/blogs'
import styles from '../../styles/blog.module.css'

export default function Post({data}){
    
    console.log( data );
    return (
        <Layout>
            <div className={ styles.container }>
                <div className={ styles.title }>
                    <h2>Blog</h2>
                    <Link href={"/blog"}><a>Regresar</a></Link>
                </div>

                <div className={ styles.blogContent }>
                    <h3>{ data.title }</h3>
                    <p><i>{ data.smallDescription }</i></p>
                    <p>{ data.body }</p>
                </div>
            </div>
        </Layout>
    )
}
export async function getStaticPaths() {
    const paths = await getBlogIds()
    
    return {
      paths,
      fallback: false
    }
  }
export async function getStaticProps({ params }) {
    let res = await fetch( process.env.NEXT_PUBLIC_API_URL + '/blogs/' + params.id );
    let data = await res.json();
    return {
      props: {
        data
      }
    }
  }