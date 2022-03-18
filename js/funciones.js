function productosHTML(productos){
    productosRender.innerHTML = "";
    for (const producto of productos) {
        //crear el elemento
        const divProducto= document.createElement("div")
        //asignar valor
        divProducto.innerHTML=`<div class="card__father">
                                        <div class="card">
                                            <div class="card__front"><img class="nfts" src="${producto.img}"></div>
                                            <div class="card__back">
                                                <div class="body__card_back">
                                                    <h2>${producto.nombre}</h2>
                                                    <p>82,01 ETH <br>
                                                    ($USD${producto.precio})</p>
                                                    <h5>${producto.ofertaLabel()}</h5>
                                                    <button id='${producto.id}' class='btnCompra'>Comprar</button>
                                                </div>
                                            </div>
                                        </div>
                                </div>`
        //agregar al DOM o al padre
        productosRender.append(divProducto);
    }
    eventoBoton();
}

function eventoBoton() {
    let botones= document.getElementsByClassName('btnCompra');
    for (const boton of botones) {
        boton.addEventListener('click', function (){

            let seleccion= carrito.find(productos => productos.id == this.id);
            console.log(seleccion);
            if (seleccion) {
                seleccion.addCantidad();
            }else{
                seleccion= productos.find(productos => productos.id == this.id);
                carrito.push(seleccion);
            }
            console.log(carrito);

            seleccion.calcularImpuesto(false,0.21);
            console.log(seleccion);

            localStorage.setItem("Carrito", JSON.stringify(carrito));

            
            /*seleccion.relacionarCliente({
                nombre:"Facundo",
                trabajo:{
                    profesion:"Programador",
                    empresa:"Coderhouse"
                }
            })
            */
            
            console.log(seleccion);
            console.log(seleccion.cliente?.nombre);
            console.log(seleccion.cliente?.nombre ?? "No comprado");
            //detalleCompra(seleccion)
            
            carritoHTML(carrito);
            

            Toastify({
                text: `Se ha agregado a la colección: ${seleccion.nombre}`,                                
                duration: 2000,
                style: {
                        background: "#58B0F6",
                      },
                gravity: "bottom"                                
                }).showToast();

        })
    }
    
}

function carritoHTML(lista) {
    cantidadCarrito.innerHTML= lista.length;
    productosCarrtio.innerHTML="";
    for (const producto of lista) {
        let prod= document.createElement("div")
        prod.innerHTML= `${producto.nombre} 
        <span class="badge bg-warning text-dark">Precio: $ ${producto.precio}</span>
        <span class="badge bg-primary">Cantidad: ${producto.cantidad}</span>`;
        productosCarrtio.append(prod);
    }
}

//DESESTRUCTURACION
/*
function detalleCompra(producto) {
    const {nombre, trabajo:{empresa, profesion} } = producto.cliente;
    let divDetalle= document.createElement('p');
    /*divDetalle.innerHTML=`Cliente: ${producto.cliente.nombre}
                            Profesion: ${producto.cliente.trabajo.profesion}
                            Empresa: ${producto.cliente.trabajo.empresa}`;*/
    
    /*divDetalle.innerHTML= `Cliente: ${nombre}-
                            Profesion: ${profesion}-
                            Empresa: ${empresa}`;
    mensajeDetalle.append(divDetalle);
}
*/


function filtroHTML(productos) {
    filtroRender.innerHTML= "";
    filtroRender.append("Buscar por colección: ");
    const porCategorias= productos.map(producto => producto.tag)
    crearSelect(arraySinDuplicado(porCategorias), "tag");

    /*filtroRender.append("Buscar por precio: ");
    const porPrecio= productos.map(producto => producto.precio)
    crearSelect(arraySinDuplicado(porPrecio), "precio");
    */
    

}

function crearSelect(lista, clave) {
    //Visual
    let newSelect = document.createElement('select')
    newSelect.innerHTML= "<option>"+lista.join('</option><option>')+ "</option>";
    filtroRender.append(newSelect);
    //Funcionalidad
    newSelect.addEventListener('change',function(){
        const filtrados = productos.filter(producto=> producto[clave] == this.value);
        productosHTML(filtrados);
    })
}

function arraySinDuplicado(lista) {
    let unicos=[];
    lista.forEach(producto => {
        if(!unicos.includes(producto)){
            unicos.push(producto);
        }
    });
    return unicos;
}