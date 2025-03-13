const menuHamburguer = document.querySelector('.menu-hamburguer')
menuHamburguer.addEventListener('click', () =>{

    toggleMenu();

});


function toggleMenu() {
    const nav = document.querySelector('.nav-responsive');
    menuHamburguer.classList.toggle('change');


    if(menuHamburguer.classList.contains('change')){
        nav.style.display = 'block';
    }else{
        nav.style.display = 'none';
    }
}




document.addEventListener("DOMContentLoaded", function () {
    document.querySelectorAll(".btn-ver-mais").forEach(button => {
        button.addEventListener("click", function () {
            let serviceBox = this.closest(".service-box, .about-content");
            serviceBox.classList.toggle("show-more");
            this.textContent = serviceBox.classList.contains("show-more") ? "Ver Menos" : "Ver Mais";
        });
    });
});