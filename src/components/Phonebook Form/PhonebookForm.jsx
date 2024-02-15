import { useMemo, memo} from "react";
import { nanoid } from 'nanoid';

import useForm from "hooks/useForm";

import { useSelector, useDispatch } from "react-redux";

import { addContact } from "../../redux/contacts/contacts-slice";
import { getFilteredContacts } from "../../redux/contacts/contacts-selectors";

import styles from "./phonebook-form.module.css";

const INITIAL_STATE = {
    name: '',
    number: ''
}

const PhonebookForm = () => {
    const contacts = useSelector(getFilteredContacts);
    const dispatch = useDispatch();   

    const {state, handleChange, reset } = useForm(INITIAL_STATE)
 
    const contactId = useMemo(() => nanoid(), []);
    const numberId = useMemo(() => nanoid(), []);

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

    const onAddContact = (e) => {
        e.preventDefault()
        if(isDublicate(state)) {
            return alert(`You've already added ${state.name} or a number ${state.number} to your phonebook.`)
        }

        const action = addContact(state);
        dispatch(action)
        reset()
    };
    
    const {name, number} = state;

    return (
        <form onSubmit={onAddContact} className={styles.form}>
            <div className={styles.phoneWrap}>
                <h3 className={styles.title}>Phonebook</h3>
                <div>
                    <label htmlFor={contactId} className={styles.label}>Name</label>
                    <input className={styles.input} value={name} required name="name" onChange={handleChange} id={contactId} type="text" placeholder="Enter a name" />
                </div>
        </div>
            <div className={styles.contactsWrap}>
                
                <div>
                    <label htmlFor={numberId} className={styles.label}>Number</label>
                    <input className={styles.input} value={number} required name="number" onChange={handleChange} id={numberId} type="tel" placeholder="Enter a number" />
                </div>
            </div>
            <button type="submit" className={styles.button}>Add a contact</button>
            <h3 className={styles.title}>Contacts</h3>
        </form>
    )
}

export default memo(PhonebookForm);