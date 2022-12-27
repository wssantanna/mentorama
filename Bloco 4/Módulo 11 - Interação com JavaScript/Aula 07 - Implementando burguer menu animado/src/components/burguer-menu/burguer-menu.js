
const burguer = document.querySelector('.burguer-menu');

burguer.addEventListener('click', mouseEvent => mouseEvent.target.classList.toggle('open'));