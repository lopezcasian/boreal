import Header from '../Header/header'

export default function Layout ({children, home}) {
    
    return (
        <div>
            <Header />
            <main>{children}</main>
        </div>
    );
}