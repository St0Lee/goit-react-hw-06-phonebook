import { useMemo, memo} from "react";
import { nanoid } from 'nanoid';

import useForm from "hooks/useForm";

import styles from "./phonebook-form.module.css";

const INITIAL_STATE = {
    name: '',
    number: ''
}

const PhonebookForm = ({onSubmit}) => {
    const {state, handleChange, handleSubmit} = useForm(INITIAL_STATE, onSubmit)
 
    const contactId = useMemo(() => nanoid(), []);
    const numberId = useMemo(() => nanoid(), []);

    
        const {name, number} = state;

    return (
        <form onSubmit={handleSubmit} className={styles.form}>
            <div className={styles.phoneWrap}>
                <h3 className={styles.title}>Phonebook</h3>
                <div>
                    <label htmlFor={contactId} className={styles.label}>Name</label>
                    <input className={styles.input} value={name} required name="name"  onChange={handleChange} id={contactId} type="text" placeholder="Enter a name" />
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