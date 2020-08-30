import styles from './header.module.css'
import CustomLink from './CustomLink/customLink'

export default function Header() {
    let hireUsButtonClasses = [ "button", "bg-yellow", "bold", ];

    return (
        <header className={ styles.header }>
            <img className={ styles.img } src="/logo2.png"/>
            <nav className={ styles.nav }>
                <ul>
                    <li><CustomLink href={ "/" } label={ "What we do" } /></li>
                    <li><CustomLink href={ "#" } label={ "Who we are" } /></li>
                    <li><CustomLink href={ "#" } label={ "Contact Us" } /></li>
                    <li><CustomLink href={ "/blog" } label={ "Blog" } /></li>
                    <li><CustomLink href={ "#" } label={ "Hire Us" } style={ hireUsButtonClasses } /></li>
                </ul>
            </nav>
        </header>
    );
}