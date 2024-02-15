export const getAllContacts = store => store.contacts;

export const getFilteredContacts = store => {
    const {contacts, filter} = store;
    if(!filter) {
        return contacts;
    }

    const normalizedFilter = filter.toLowerCase();

    const filteredContacts = contacts.filter(({name, number}) => {
        const normalizedName = name.toLowerCase();
        const normalizedNumber = number.toLowerCase();

        return (normalizedName.includes(normalizedFilter) ||  normalizedNumber.includes(normalizedFilter)); 
    })
    return filteredContacts;
};