const wrapper = document.querySelector('.wrapper');
const signUpLink = document.querySelector('.signUp-link');
const signInLink = document.querySelector('.signIn-link');

signUpLink.addEventListener('click', () => {
    wrapper.classList.add('animate-signIn');
    wrapper.classList.remove('animate-signUp');
});

signInLink.addEventListener('click', () => {
    wrapper.classList.add('animate-signUp');
    wrapper.classList.remove('animate-signIn');
});

// Validação de formulario

const form = document.getElementById('form');
const username = document.getElementById('username');
const email = document.getElementById('email');
const password = document.getElementById('password');

form.addEventListener('submit', (event) => {
    event.preventDefault();

    checkForm();
})

username.addEventListener('blur', () => {
    checkInputUsername();
})

email.addEventListener('blur', () => {
    checkInputEmail();
})

password.addEventListener('blur', () => {
    checkInputPassword();
})


function checkInputUsername() {
    const usernameValue = username.value;

    if (usernameValue === '') {
        errorInput(username, 'Preencha o seu nome!')
    } else {
        const formItem = username.parentElement;
        formItem.classList = 'input-group'
    }
}

function checkInputEmail() {
    const emailValue = email.value;

    if (emailValue === '') {
        errorInput(email, 'Preencha o email!')
    } else {
        const formItem = email.parentElement;
        formItem.className = 'input-group'
    }
}

function checkInputPassword() {
    const passwordValue = password.value;

    if (passwordValue === '') {
        errorInput(password, 'Preencha a senha!')
    } else if (passwordValue.length < 8) {
        errorInput(password, 'No minimmo 8 caracteres.')
    } else {
        const formItem = password.parentElement;
        formItem.className = 'input-group' 
    }
}

function checkForm() {
    checkInputUsername();
    checkInputEmail();
    checkInputPassword();

    const formItem = form.querySelectorAll('.input-group')

    const isValid = [...formItem].every( (item) => {
        return item.className === 'input-group'
    });

    if (isValid) {
        alert('Cadastrado com sucesso!')
    }
}

function errorInput(input, message) {
    const formItem = input.parentElement;
    const textMessage = formItem.querySelector('a')

    textMessage.innerText = message;

    formItem.className = 'input-group error'
}