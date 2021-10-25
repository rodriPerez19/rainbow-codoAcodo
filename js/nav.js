const opciones =document.querySelector('.opciones');
const hamburguesa = document.querySelector('.hamburguesa')



hamburguesa.addEventListener('click',()=>{

    opciones.classList.toggle('active');
    hamburguesa.classList.toggle('hamburguesa__activa');

});

