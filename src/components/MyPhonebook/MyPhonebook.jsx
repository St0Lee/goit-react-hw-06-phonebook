import styles from './my-phonebook.module.css';

import PhonebookForm from "../Phonebook Form/PhonebookForm";
import PhonebookList from "../Phonebook List/PhonebookList"
import PhonebookFilter from "components/Phonebook List/Phonebook-filter/PhonebookFilter";

const MyPhonebook = () => {

    return (
        <div className={styles.wrap}>
            <PhonebookForm />
            <div className={styles.listWrap}>
                <PhonebookFilter />
                <PhonebookList />
            </div>
        </div>
    )
}

export default MyPhonebook;
