import { useSelector, useDispatch } from "react-redux";

import styles from './my-phonebook.module.css';

import PhonebookForm from "../Phonebook Form/PhonebookForm";
import PhonebookList from "../Phonebook List/PhonebookList"


import { addContact, removeContact} from "../../redux/contacts/contacts-slice";
import { getFilteredContacts } from "../../redux/contacts/contacts-selectors";
import { setFilter } from "../../redux/filter/filter-slice";

const MyPhonebook = () => {
    const contacts = useSelector(getFilteredContacts);
    
    const dispatch = useDispatch();

    const isDublicate = ({name, number}) => {
        const normalizedName = name.toLowerCase();
        const normalizedNumber = number.toLowerCase();

        const dublicate = contacts.find(item => {
            const normalizedCurrentName = item.name.toLowerCase();
            const normalizedCurrentNumber = item.number.toLowerCase();
            return (normalizedCurrentName === normalizedName || normalizedCurrentNumber === normalizedNumber);
        })

        return Boolean(dublicate);
    }

    const onAddContact = (data) => {
        if(isDublicate(data)) {
            return alert(`You've already added ${data.name} or a number ${data.number} to your phonebook.`)
        }

        const action = addContact(data);
        dispatch(action)
    };

    const onRemoveContact = (id) => {
       dispatch(removeContact((id)));
    };

    const changeFilter = ({target}) => dispatch(setFilter(target.value));
   
    return (
        <div className={styles.wrap}>
            <PhonebookForm onSubmit={onAddContact}/>
            <div className={styles.listWrap}>
                <input className={styles.input} name="filter" placeholder="Search" onChange={changeFilter} />
                <PhonebookList items={contacts} removeContact={onRemoveContact} />
            </div>
        </div>
    )
}

export default MyPhonebook;
