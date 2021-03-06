import Product from "./product.js";
import Inventory from "./inventory.js";

class App {
  constructor() {
    this._inventory = new Inventory();
    let btnAdd = document.querySelector("#btnAdd");
    btnAdd.addEventListener("click", this._addProduct);

    let btnFind = document.querySelector("#btnFind");
    btnFind.addEventListener("click", this._search);

    let btnDelete = document.querySelector("#btnDelete");
    btnDelete.addEventListener("click", this._delete);

    let btnList = document.querySelector("#btnList");
    btnList.addEventListener("click", this._list);

    let btnAddPos = document.querySelector("#btnAddPos");
    btnAddPos.addEventListener("click", this._addProductPos);
  }

  _readProduct() {
    //leer los inputs (la entrada de datos)
    let inpId = document.querySelector("#id");
    let inpName = document.querySelector("#name");
    let inpQuantity = document.querySelector("#quantity");
    let inpCost = document.querySelector("#cost");

    //obtener el valor
    let id = inpId.value; //string
    let name = inpName.value; //string
    let quantity = Number(inpQuantity.value); //número
    let cost = Number(inpCost.value); //número

    //si cada campo tiene un valor ó que tenga info.
    if (id && name && quantity && cost) {
      //se limpia el formulario
      inpId.value = "";
      inpName.value = "";
      inpQuantity.value = "";
      inpCost.value = "";

      //se crea al participante
      return new Product(id, name, quantity, cost);
    }
    //si falta algún campo, entonces regresa false
    return false;
  }

  _addProduct = () => {
    let product = this._readProduct();

    if (!product) {
      document.getElementById("elementAdd").innerHTML =
        "Error todos los elementos son requeridos";
      return;
    }
    let added = this._inventory.add(product);

    if (added === false) {
      document.getElementById("elementAdd").innerHTML =
        "Error, Producto ya registrado";
      return;
    }
    if (added === true) {
      document.getElementById("elementAdd").innerHTML =
        "Se agrego correctamente nuevo producto";
      return;
    }
  };

  _addProductPos = () => {
    let product = this._readProduct();
    let inpPos = document.querySelector("#pos");
    let posInto = inpPos.value;

    if (!product) {
      document.getElementById("elementAddPos").innerHTML =
        "Error todos los elementos son requeridos";
      return;
    }
    let added = this._inventory.insertar(product, posInto);

    if (added === false) {
      document.getElementById("elementAddPos").innerHTML =
        "Error, Esa posición no existe";
      return;
    }
    if (added === true) {
      document.getElementById("elementAddPos").innerHTML =
        "Se agrego correctamente nuevo producto";
      return;
    }

    Swal.fire("Error", "Esa posición no existe", "error");
  };

  _delete = () => {
    let inpIdDelete = document.querySelector("#idDelete");
    let idDelete = inpIdDelete.value;

    document.getElementById("elementDelete").innerHTML =
      this._inventory.eliminar(idDelete);
  };

  _search = () => {
    let inpIdProduct = document.querySelector("#idProduct");
    let idProduct = inpIdProduct.value;

    document.getElementById("productFind").innerHTML =
      this._inventory.buscar(idProduct);
  };

  _list = () => {
    document.getElementById("lista").innerHTML = this._inventory.listar();
  };
}
new App();
