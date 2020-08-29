import Link from 'next/link'
import styles from './customLink.module.css'
import { useRouter } from 'next/router';

export default function CustomLink( props ) {
    const router = useRouter()

    let aClasses = [ styles.link ];
    
    if ( props.style ){
        aClasses = aClasses.concat(props.style);
    }

    if( router.pathname === props.href ){
        aClasses.push( styles.active );
    }

    return (
        <Link href={ props.href }>
            <a className={ aClasses.join( " " ) }>{ props.label }</a>
        </Link>
    )
}