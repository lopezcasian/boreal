import Header from '../Header/header'
import Footer from '../Footer/footer'

export default function Layout ({children, home}) {
    
    return (
        <div>
            <Header />
            <main>{children}</main>
            <Footer />
        </div>
    );
}

