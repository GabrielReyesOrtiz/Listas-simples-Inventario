export default class Inventory {
  constructor() {
    this.inicio = null;
  }
  add(product) {
    if (this.inicio == null) {
      this.inicio = nuevo;
      return
    } else {
      let aux = this.inicio;
      while (aux.getSiguiente() != null) {
        aux = aux.getSiguiente();
      }
      aux.setSiguiente(nuevo);
    }
  }


  

  listar() {
    let lista = "";
    let aux = this.inicio;
    let num = 1;
    if (this.inicio == null) {
      return "No se han agregado Alumnos";
    } else {
      while (aux.getSiguiente() != null) {
        lista = ` ${lista}  ${num} Nombre: ${aux.getName()} Edad: ${aux.getEdad()} <br>`;
        aux = aux.getSiguiente();
        num++;
      }
      lista = ` ${lista}  ${num} Nombre: ${aux.getName()} Edad: ${aux.getEdad()}`;
    }
    return lista;
  }



  if (this._start == null) {
      return "No se han encontrado productos";
    } else {
      return this._listProducts(this._start);
    }
}
