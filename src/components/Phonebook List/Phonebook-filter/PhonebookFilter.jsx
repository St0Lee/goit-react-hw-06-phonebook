import { useDispatch } from "react-redux";
import { setFilter } from "../../../redux/filter/filter-slice";

import styles from "./phonebook-filter.module.css"

const PhonebookFilter = () => {
    const dispatch = useDispatch(); 
    const changeFilter = ({target}) => dispatch(setFilter(target.value));

    return (
        <input className={styles.input} name="filter" placeholder="Search" onChange={changeFilter} />
    )
};

export default PhonebookFilter;
