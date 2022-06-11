// array com os inputs
const inputs = document.querySelectorAll('.input');
const button = document.querySelector('.login_button')

const handleFocus = ({ target }) =>{
    const span = target.previousElementSibling;
    span.classList.add('span-active');
}

const handleFocusOut = ({ target }) =>{
    if(target.value === ''){
    const span = target.previousElementSibling;
    span.classList.remove('span-active');
    }
}

// fc para habilitar o botão de login
const handleChange = () =>{
    const [username, password] = inputs;

    if (username.value && password.value.length >= 8){
        button.removeAttribute('disabled');
    }else{
        button.setAttribute('disabled', '');
    }
}


// fc para adicionar/remover o foco no input
inputs.forEach((input) => input.addEventListener('focus', handleFocus));
inputs.forEach((input) => input.addEventListener('focusout', handleFocusOut));

inputs.forEach((input) => input.addEventListener('input', handleChange));

