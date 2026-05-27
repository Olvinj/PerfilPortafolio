document.addEventListener("DOMContentLoaded", ()=>{

    const menuBtn =
    document.getElementById("menuBtn");

    const menu =
    document.getElementById("menu");

    const saludo =
    document.getElementById("btnSaludo");

    const enviar =
    document.getElementById("btnEnviar");

    menuBtn.addEventListener("click", ()=>{

        menu.classList.toggle("hidden");

    });

    saludo.addEventListener("click", ()=>{

        alert("Bienvenido a mi portafolio");

    });

    enviar.addEventListener("click", (e)=>{

        e.preventDefault();

        let nombre =
        document.getElementById("txtNombre").value;

        let correo =
        document.getElementById("txtCorreo").value;

        let mensaje =
        document.getElementById("txtMensaje").value;

        if(
            nombre.trim()=="" ||
            correo.trim()=="" ||
            mensaje.trim()==""
        ){
            alert("Complete todos los campos");
            return;
        }

        let regex =
        /^[\\w.-]+@[\\w.-]+\\.\\w{2,}$/;

        if(!regex.test(correo)){
            alert("Correo inválido");
            return;
        }

        alert("Mensaje enviado correctamente");

    });

});
