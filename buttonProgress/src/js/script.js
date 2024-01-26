let button = document.querySelector('.button');

button.addEventListener('click', () => {
    button.classList.add('active');

    setTimeout( () => {
        button.classList.remove('active');
        document.querySelector('i').classList.replace('bx-cloud-download', 'bx-check-circle')
        document.querySelector('.button-text').innerText = 'Completed';

    }, 6000) //1s = 1000ms
})