import styles from './contactDiv.module.css'

export default function ContactDiv( props ){
    let contacts = props.contacts.map( ( contact, index ) => 
        <span className={ styles.contact } key={ index }>{ contact }</span>
    );

    return (
        <div className={ styles.div }>
            <h4 className={ styles.h4 }>{ props.title }</h4>
            <div className={ styles.titleLine }></div>
            { contacts }
        </div>
    );
}