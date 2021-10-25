const formulario = document.querySelector(".form__index");



var validarEmail= (e)=>{
    if(formulario.email.value.length===0){
        e.preventDefault();
        alert("El email esta vacio")
    }
};

var validarPass = (e)=>{
    if(formulario.pass.value.length===0 ){
        e.preventDefault();
       alert("La contraseña esta vacia");
    }
    else if(formulario.pass.value.length <= 4){
        e.preventDefault();
       alert("La contraseña debe tener 5 o mas caracteres");
    }
};

const validar=(e)=>{
    validarEmail(e);
    validarPass(e);
    
};

formulario.addEventListener("submit",validar);