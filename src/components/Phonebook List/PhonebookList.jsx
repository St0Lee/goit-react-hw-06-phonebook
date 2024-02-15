import styles from "./phonebook-list.module.css"

const PhonebookList = ({items, removeContact}) => {
    const elements = items.map (({id, name, number}) => <li key={id}>{name} {number} <button onClick={() => removeContact(id)} type="button">Remove contact</button></li>);
    return (
        <ol className={styles.list}>
            {elements}
        </ol>
    )

};

export default PhonebookList;