const validation = (userData) => {
    let errors = {};

    if(!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(userData.email)){
        errors.email = "El email es invalido";
    }
    if(!userData.email){
        errors.email = "Este campo no puede estar vacio";
    }
    if(userData.email.length > 35){
        errors.email = "El email no puede superar los 35 caracteres";
    }
    if(!userData.password.match(/\d/)){
        errors.password = "La contraseña debe contener almenos un numero";
    }
    if(userData.password.length < 6 || userData.password.length > 10){
        errors.password = "La contraseña debe contener entre 6 y 10 caracteres";
    }

    return errors;
}

export default validation;