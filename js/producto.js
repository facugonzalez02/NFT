class Productos {
    constructor(id, nombre, precio, tag, oferta,img){
        this.id= parseInt(id);
        this.nombre= nombre;
        this.precio= parseFloat(precio);
        this.tag= tag;
        this.oferta= oferta;
        this.img=img;
        this.cantidad= 1;
    }
    addCantidad(){
        this.cantidad++;
    }
    ofertaLabel(){
        return this.oferta ? "En oferta" : "No está en oferta"
    }
    calcularImpuesto(exento,impuesto){
        !exento && (this.precio+=(this.precio*impuesto));
    }
    relacionarCliente(cliente){
        this.cliente=cliente;
    }

}