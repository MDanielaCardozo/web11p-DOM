function  modificarTexto() {
    console.log("Desde la funcion modificar texto");
    //obtener el parrafo
    const parrafo = document.getElementById("parrafo-elegido")
    console.log(parrafo);
    //modificar el parrafo
    parrafo.textContent = "Esto es una prueba de texto"

    parrafo.classList.add("text-info", "fw-bold")
}

const ocultarTexto = () => {
    console.log("Desde la funcion que oculta el texto");
    const parrafo = document.querySelector(".objeto")
    //ocultar/mostrar parrafo
    parrafo.classList.toggle("d-none")
    if (botones[3].textContent === "Ocultar") {
        botones[3].textContent = "Ver mas"
        botones[3].classList.remove("btn-danger")
        botones[3].classList.add("btn-success")
    } else {
        botones[3].textContent = "Ocultar"
        botones[3].classList.remove("btn-success")
        botones[3].classList.add("btn-danger")
    }
}

const eliminarParrafo = () => {
    //buscar el parrafo a eliminar
    const parrafo = document.getElementById("parrafo-eliminar")
    //eliminar
    parrafo.remove()
    botones[4].classList.add("disabled")
}

const botones = document.getElementsByTagName('button')

botones[3].addEventListener("click", ocultarTexto)
botones[4].addEventListener("click", eliminarParrafo)


