export default function Validation(values){
    const errors={}

    if(values.firstName===""){
        errors.firstName = "First name is required";
    }

    if(values.lastName === "") {
        errors.lastName = "Last name is required";
    }

    if(values.email === "") {
        errors.email = "Email is required";
    }

    if(values.password===""){
        errors.password = "Password is required";
    }

    if(values.confirmPassword=== ""){
        errors.confirmPassword ="Field required";
    }

    else if(values.password!==values.confirmPassword){
        errors.confirmPassword ="Password doesn't matches"
    }


return errors;

}