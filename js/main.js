//const carrito = JSON.parse(localStorage.getItem("Carrito")) || []; //mal
productos.push(new Productos(1, "Bored Ape Yacht Club #1026", 25434, "BORED APE YACHT CLUB", true,"img/uno.png"))
productos.push(new Productos(2, "Bored Ape Yacht Club #4136", 291867, "BORED APE YACHT CLUB", true,"img/dos.png"))
productos.push(new Productos(3, "Bored Ape Yacht Club #378", 83391, "BORED APE YACHT CLUB", false,"img/tres.png"))
productos.push(new Productos(4, "X Rabbit #6534", 2115, "X RABITS CLUB", true,"img/cuatro.png"))
productos.push(new Productos(5, "X Rabbit #6168", 2072, "X RABITS CLUB", false,"img/cinco.png"))
productos.push(new Productos(6, "X Rabbit #5690", 458, "X RABITS CLUB", true,"img/seis.png"))
productos.push(new Productos(7, "Kongz #6995", 1512, "THE META KONGZ", false,"img/siete.png"))
productos.push(new Productos(8, "Kongz #2430", 23232, "THE META KONGZ", false,"img/ocho.png"))
productos.push(new Productos(9, "Kongz #3544", 30250, "THE META KONGZ", true,"img/nueve.png"))

const productosRender= document.getElementById("container__card");
//const mensajeDetalle= document.getElementById("detalleCompra")
const filtroRender= document.getElementById("filtroRender");
productosHTML(productos);
filtroHTML(productos);

confirmar.onclick= () => { 
    localStorage.clear();
    carrito.splice(0,carrito.length);
    carritoHTML(carrito);
    Swal.fire(

        'Su compra se hizo con exito!',
        'Se realizó la compra',
        'success'
      )
}



