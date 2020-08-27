import styles from './header.module.css'
import Link from 'next/link'

export default function Header() {
    let hireUsButtonClasses = [ "bg-yellow", "bold", styles.hireUsButton ];

    return (
        <header className={ styles.header }>
            <img className={ styles.img } src="/logo2.png"/>
            <nav className={ styles.nav }>
                <ul>
                    <li><Link href="/"><a>What we do</a></Link></li>
                    <li><a>Who we are</a></li>
                    <li><a>Contact Us</a></li>
                    <li><a>Blog</a></li>
                    <li><a className={ hireUsButtonClasses.join(" ") }>Hire Us</a></li>
                </ul>
            </nav>
        </header>
    );
}