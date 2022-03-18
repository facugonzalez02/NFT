const usuario = {
    edad: "22"
};

let registro= document.getElementById("registro");

registro.addEventListener("submit", function(e){
    e.preventDefault();

    let nombre = document.getElementById("nombre").value
    console.log("Has quedado registrado como "+nombre);

    let gracias= document.getElementById("gracias")

    let div= document.createElement("p");

    div.innerHTML="<p>!Gracias por registrarse en la página¡</p>";
    gracias.append(div);

    let btn = document.getElementById('enviar');

    btn.style.display = 'none';

    localStorage.setItem("Usuario", nombre);
    
    usuario();
})











