import Blog from "../../pages/blog";
import Link from 'next/link'
import styles from './blogItem.module.css'

export default function BlogItem( props) {
    return (
        <div className={ styles.container }>
            <Link href={ "/blog/" + props.id }><h3>{ props.title }</h3></Link>
            <p>{ props.smallDescription }</p>
        </div>
    )
}