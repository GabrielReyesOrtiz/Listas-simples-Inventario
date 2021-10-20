export default class Inventory {
  constructor() {
    this.inicio = null;
  }

  add(product) {
    if (this.inicio == null) {
      this.inicio = product;
      return true;
    } else {
      let aux = this.inicio;
      while (aux.getSiguiente() != null) {
        aux = aux.getSiguiente();
      }
      aux.setSiguiente(product);
      return true;
    }
  }

  insertar(product, pos) {
    let aux = this.inicio;

    if (pos == 1) {
      product.setSiguiente(aux);
      this.inicio = product;
      return true;
    }

    for (let i = 2; i < pos; i++) {
      aux = aux.getSiguiente();
    }

    product.setSiguiente(aux.getSiguiente());
    aux.setSiguiente(product);
    return true;
  }

  buscar(idProduct) {
    let product = "El producto no existe";
    let aux = this.inicio;
    while (aux != null) {
      if (aux.getId() == idProduct) {
        product = ` ID: ${aux.getId()}  Nombre: ${aux.getName()} Cantidad: ${aux.getQuantity()}  Costo: ${aux.getCost()} <br>`;
        return product;
      }
      aux = aux.getSiguiente();
    }
    return product;
  }

  eliminar(idDelete) {
    let product = "El producto no existe";
    let elim = null;
    if (idDelete == this.inicio.getId()) {
      elim = this.inicio;
      this.inicio = this.inicio.getSiguiente();
      elim.setSiguiente(null);
      product = `El elemento eliminado es  ID: ${elim.getId()}  Nombre: ${elim.getName()} Cantidad: ${elim.getQuantity()}  Costo: ${elim.getCost()} <br>`;
      return product;
    }
    let temp = this.inicio;
    while (temp.getSiguiente() != null) {
      if (temp.getSiguiente().getId() == idDelete) {
        elim = temp.getSiguiente();
        temp.setSiguiente(temp.getSiguiente().getSiguiente());
        elim.setSiguiente(null);
        product = `El elemento eliminado es  ID: ${elim.getId()}  Nombre: ${elim.getName()} Cantidad: ${elim.getQuantity()}  Costo: ${elim.getCost()} <br>`;
        return product;
      }
      temp = temp.getSiguiente();
    }
    return product;
  }

  listar() {
    let lista = "";
    let aux = this.inicio;
    let num = 1;
    if (this.inicio == null) {
      return "No se han agregado Productos";
    } else {
      while (aux.getSiguiente() != null) {
        lista = ` ${lista}  ${num}  ---->  ID: ${aux.getId()}  Nombre: ${aux.getName()} Cantidad: ${aux.getQuantity()}  Costo: ${aux.getCost()} <br>`;
        aux = aux.getSiguiente();
        num++;
      }
      lista = ` ${lista}  ${num} ----> ID: ${aux.getId()}  Nombre: ${aux.getName()} Cantidad: ${aux.getQuantity()}  Costo: ${aux.getCost()} <br>`;
    }
    return lista;
  }
}
