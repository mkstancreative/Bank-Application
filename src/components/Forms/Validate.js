export default function ValidateInfo(values){

    let errors = {};

   

    if (!values.firstname){
        errors.firstname = "firstname required"
    }

    if (!values.lastname){
        errors.lastname = "lastname required"
    }

    if (!values.email){
        errors.email = "email address required"
    }else if(!/\S+@\S+\.\S+/.test(values.email))
    {
        errors.email = "email address is invalid"
    }

    if (!values.password){
        errors.password = "password is required"
    }else if (values.password.length < 6) {
        errors.password = 'password needs to 6 characters or more'
    }

    if (!values.password2){
        errors.password2 = 'password is required'

    }else if (values.password2 !== values.password) {
        errors.password2 = 'passwords do not match'
    }
    
    return errors;
}