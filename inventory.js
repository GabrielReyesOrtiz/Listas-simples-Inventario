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

  eliminar(nombre) {
    let elim = null;
    if (nombre == this.inicio.nombre) {
      elim = this.inicio;
      this.inicio = this.inicio.siguiente;
      elim.siguiente = null;
      return elim;
    }
    let temp = this.inicio;
    while (temp.siguiente != null) {
      if (temp.siguiente.nombre == nombre) {
        elim = temp.siguiente;
        temp.siguiente = temp.siguiente.siguiente;
        elim.siguiente = null;
        return elim;
      } else temp = temp.siguiente;
    }
    return elim;
  }

  listar() {
    let lista = "";
    let aux = this.inicio;
    let num = 1;
    if (this.inicio == null) {
      return "No se han agregado Productos";
    } else {
      while (aux.getSiguiente() != null) {
        lista = ` ${lista}  ${num} ID: ${aux.getId()}  Nombre: ${aux.getName()} Cantidad: ${aux.getQuantity()}  Costo: ${aux.getCost()} <br>`;
        aux = aux.getSiguiente();
        num++;
      }
      lista = ` ${lista}  ${num} ID: ${aux.getId()}  Nombre: ${aux.getName()} Cantidad: ${aux.getQuantity()}  Costo: ${aux.getCost()} <br>`;
    }
    return lista;
  }
}
