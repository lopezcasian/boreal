import Layout from "../components/Layout/layout";
import BlogItem from "../components/BlogItem/blogItem";
import { getBlogs } from "../lib/blogs";
import styles from "../styles/blog.module.css"


export default function Blog( { blog } ) {
    let content = null;

    if( blog.lenght == 0 ){
        content = ( <p>No entries.</p> )
    } else {
        content = blog.map(blog => 
            <BlogItem key={ blog.id }
                id={ blog.id }
                title={ blog.title }
                smallDescription={ blog.smallDescription }
                />)
    }       

    return (
        <Layout>
            <div className={ styles.container }>
                <h2>Blog</h2>
                <div class={ styles.content }>
                    { content }
                </div>
            </div>
        </Layout>
    );
}

Blog.getInitialProps = async () => {
    let json = await getBlogs();
    return { blog: json }
}