const btnSwich = document.querySelector('#btn_pantalla');

btnSwich.addEventListener('click',() => {
     document.body.classList.toggle('dark');
     btnSwich.classList.toggle('active');
});