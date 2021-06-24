const btnMobile = document.querySelector('.btn-mobile');

function toggleMenu(){
    const nav = document.querySelector('.topo');
    nav.classList.toggle('active');
}
btnMobile.addEventListener('click', toggleMenu);