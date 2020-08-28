import styles from './footer.module.css'

import ContactDiv from '../ContactDiv/contactDiv'

export default function Footer(){
    let footerClasses = [ "bg-black", styles.footer ];
    return (
        <footer className={ footerClasses.join(" ") }>
            <h2 className={ styles.title }>CONTACT US</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis elementum lobortis est.
                Sed sodales sem in lectus porttitor consequat. Nullam tristique tincidunt mattis. 
                Vivamus id nisl sit amet felis rhoncus fringilla non ut diam. Curabitur et elit convallis, 
                dapibus leo congue, scelerisque elit.</p>
            
            <div className={ styles.contactsDiv }>
                <ContactDiv title={"PHONE"} contacts={["(33) 3647 87643", "(33) 3647 87643"]}/>
                <ContactDiv title={"EMAIL"} contacts={["info@boreal.com"]}/>
                <ContactDiv title={"ADDRESS"} contacts={["Av. López Mateos WeWork Midtown Guadalajara, Jal. México"]}/>
            </div>
        </footer>
    );
}