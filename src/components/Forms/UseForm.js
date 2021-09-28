import {useState, useEffect} from 'react';

const UseForms = (callback, validate) => {
    const [values, setValues] = useState({
        firstname: '',
        lastname: '',
        email: '',
        password: '',
        password2: ''
    });

    const [errors, setErrors] = useState({});
    const [isSubmitting, setIsSubmitting] = useState(false);

    const handleChange = e =>{
        const { name, value} = e.target;

        setValues({
            ...values, [name] : value
        })
        setIsSubmitting(true)
    }

    useEffect(() =>{
        if(Object.keys(errors).length === 0 && 
        isSubmitting){
            callback()
        }
    },[])

    const handleSubmit = (e) =>{
        e.preventDefault();

        setErrors(validate(values));
    }
    return {handleChange, values, handleSubmit, errors}
}

export default UseForms;