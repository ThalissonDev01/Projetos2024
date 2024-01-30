const passwordBox = document.getElementById('password');
const tamanhoSenha = 12;

const caracteresPermitidos = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*';

function gerarsenha() {
    let password = '';
    for (let i = 0; i < tamanhoSenha; i++) {
        const indiceCaractere = Math.floor(Math.random() * caracteresPermitidos.length);
        password += caracteresPermitidos.charAt(indiceCaractere);
    }

    passwordBox.value = password;
}




