import { createSlice } from "@reduxjs/toolkit";
import { nanoid } from "@reduxjs/toolkit";

const contactsSlice = createSlice({
    name: "contacts",
    initialState: [],
    reducers: {
        addContact: {
            reducer: (state, {payload}) => {
                state.push(payload);
            },
            prepare: data => {
                return {
                    payload: {
                        id: nanoid(),
                        ...data,
                    }
                }
            }
        },
        removeContact: (state, {payload}) => state.filter(item => item.id !== payload),
    }
});

export const {addContact, removeContact} = contactsSlice.actions;

export default contactsSlice.reducer;