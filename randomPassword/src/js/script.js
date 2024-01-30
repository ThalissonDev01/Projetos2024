const passwordBox = document.getElementById('password');
const tamanhoSenha = 12;

const caracteresPermitidos = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*';

const sucessoCopy = document.getElementById('successCopy');

function gerarsenha() {
    let password = '';
    for (let i = 0; i < tamanhoSenha; i++) {
        const indiceCaractere = Math.floor(Math.random() * caracteresPermitidos.length);
        password += caracteresPermitidos.charAt(indiceCaractere);
    }

    passwordBox.value = password;
}

function copiarSenha() {

    if (passwordBox) {
        passwordBox.select();
        navigator.clipboard.writeText(passwordBox.value);
    }
}

function copiarSucesso() {
    let success = document.createElement('div');
    success.classList.add('success');
    success.innerHTML = '<i class="fa-sharp fa-solid fa-circle-check"></i>Success copy'
    sucessoCopy.appendChild(success);

    setTimeout(() => {
        success.remove();
        passwordBox.value = '';
    }, 3000)
}

function onClicks() {
    copiarSenha()
    copiarSucesso()
}