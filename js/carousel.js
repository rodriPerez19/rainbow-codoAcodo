const puntos= document.querySelectorAll('.punto');
const carousel = document.querySelector('.carousel');

puntos.forEach((punto, i)=>{

    punto.addEventListener('click',()=>{
        
        var posicion=i;
        var operacion = posicion * -100;
        
        carousel.style.transform=`translateX( ${ operacion }%)`;

        puntos.forEach((punto,i)=>{

            punto.classList.remove('activo');
        });
        punto.classList.add('activo');
    })
});