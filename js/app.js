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
    if (botones[4].textContent === "Ocultar") {
        botones[4].textContent = "Ver mas"
        botones[4].classList.remove("btn-danger")
        botones[4].classList.add("btn-success")
    } else {
        botones[4].textContent = "Ocultar"
        botones[4].classList.remove("btn-success")
        botones[4].classList.add("btn-danger")
    }
}

const eliminarParrafo = () => {
    //buscar el parrafo a eliminar
    const parrafo = document.getElementById("parrafo-eliminar")
    //eliminar
    parrafo.remove()
    botones[5].classList.add("disabled")
}

const cambiarTema = () => {
    const html = document.documentElement;
    const temaActual = html.getAttribute("data-bs-theme");
    console.log(temaActual);
    //cambiar
    html.setAttribute("data-bs-theme", temaActual === "dark" ? "light" : "dark")
    
}

const crearTarea = (e) => {
 e.preventDefault()
 console.log("desde la funcion crear tarea");
 //1- obtener el value del input
 const inputTarea = document.getElementById("tarea").value.trim();
 console.log(inputTarea);
 //2- crear una card con el texto que cargue el usuario
 const divcol = document.createElement("div") //<div>
 const divcard = document.createElement("div") //<div>
 const divcardBody = document.createElement("div") //<div>
 const h5 = document.createElement("h5")
 const p = document.createElement("p")

 divcol.className = "col-md-4 col-lg-3";
 divcard.className = "card h-100";
 divcardBody.className = "card-body";
 h5.className = "card-title";
 h5.textContent = "Tarea ✔️";
 p.className = "card-text";
 p.textContent = inputTarea;

 const row = document.querySelector(".row-gap-3");
 //3- agregar a la card la grilla
 row.appendChild(divcol);
 divcol.appendChild(divcard)
 divcard.appendChild(divcardBody)
 divcardBody.appendChild(h5)
 divcardBody.appendChild(p)
 //4-limpiar formulario
 formulario.reset()
}

const botones = document.getElementsByTagName('button')
const btnCambiarTema = document.querySelector(".btn-dark")
const formulario = document.querySelector("#formTarea")

botones[4].addEventListener("click", ocultarTexto)
botones[5].addEventListener("click", eliminarParrafo)
btnCambiarTema.addEventListener("click", cambiarTema)
formulario.addEventListener("submit", crearTarea)


