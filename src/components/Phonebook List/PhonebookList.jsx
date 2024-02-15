import { useSelector, useDispatch } from "react-redux";
import { getFilteredContacts } from "../../redux/contacts/contacts-selectors";
import { removeContact } from "../../redux/contacts/contacts-slice";

import styles from "./phonebook-list.module.css"

const PhonebookList = () => {
    const contacts = useSelector(getFilteredContacts);
    const dispatch = useDispatch(); 
    
    const onRemoveContact = (id) => {
        dispatch(removeContact((id)));
    };

    const elements = contacts.map (({id, name, number}) => <li key={id}>{name} {number} <button onClick={() => onRemoveContact(id)} type="button">Remove contact</button></li>);


    return (
        <ol className={styles.list}>
            {elements}
        </ol>
    )

};

export default PhonebookList;