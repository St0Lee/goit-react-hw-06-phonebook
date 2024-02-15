import { useCallback, useState } from "react";

const useForm = (initialState) => {
    const [state, setState] = useState({...initialState});

    const handleChange = useCallback(({target}) => {
        const {name, value} = target;
        setState (prevState => ({
            ...prevState, 
            [name]: value   
        }))
     }, []);
        
    const reset = useCallback (() => {
            setState({...initialState})
        }, [initialState]);

    return {state, setState, handleChange, reset}
}

export default useForm;