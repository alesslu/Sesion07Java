const form = document.getElementById('form');
const firstname = document.getElementById('firstname');
const nombre = document.getElementById('lastname');
const email = document.getElementById('email');
const celular = document.getElementById('phone');

form.addEventListener('submit', e => {
    e.preventDefault();

    validateInputs();
});

const setError = (element, message) => {
    const inputControl = element.parentElement;
    const errorDisplay = inputControl.querySelector('.error');
    const validoDisplay = inputControl.querySelector('.valido');

    errorDisplay.innerText = ' ';
    validoDisplay.innerText = ' ';
    errorDisplay.innerText = message;
    inputControl.classList.add('error');
    inputControl.classList.remove('valido')
}

const setSuccess = (element,message) => {
    const inputControl = element.parentElement;
    const errorDisplay = inputControl.querySelector('.error');
    const validoDisplay = inputControl.querySelector('.valido');

    errorDisplay.innerText = ' ';
    validoDisplay.innerText = ' ';
    validoDisplay.innerText = message;
    inputControl.classList.remove('error');
    inputControl.classList.add('valido');
    
};

const validarcorreo = email => {
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}

const validarcelular = celular =>{
    const te= /^9[0-9]{8}$/;
    return te.test(celular)
}


const validateInputs = () => {
    const firstnameValue = firstname.value.trim();
    const emailValue = email.value.trim();
    const nombreValue = nombre.value.trim();
    const celularValue = celular.value.trim();
    
    //validando firstname
    if(firstnameValue === '') {
        setError(firstname, 'Se requiere nombres completos');
    } else if (firstnameValue.length > 30 ) {
        setError(firstname, 'Ingrese un nombre válido')
    }
    else {
        setSuccess(nombre, '¡Datos Correctos!');
    }

    //validando lastname
    if(nombreValue === '') {
        setError(nombre, 'Se requiere apellidos completos');
    } else if (nombreValue.length > 30 ) {
        setError(nombre, 'Ingrese un apellido válido')
    }
    else {
        setSuccess(nombre, '¡Datos Correctos!');
    }

    //validando correo
    if(emailValue === '') {
        setError(email, 'Se requiere un correo');
    } else if (!validarcorreo(emailValue)) {
        setError(email, 'El correo debe ser uno válido');
    } else {
        setSuccess(email,'¡Datos Correctos!');
    }

    //validando celular
    if(celularValue === '') {
        setError(celular, 'Se requiere un número de celular');
    } else if (!validarcelular(celularValue)) {
        setError(celular, 'El número no es válido');
    } else {
        setSuccess(celular,'¡Datos Correctos!');
    }


};
