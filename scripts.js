let listaItems = [];
let input = document.getElementById("input");
let inputImagen = document.getElementById("inputImagen");
let formularioEntrada = document.getElementById("formularioEntrada");
let listdom = document.getElementById("listdom");
let botonEditar = document.getElementById("ejecutar");
let nextId = 0;
let isEditMode = false;
let editedItemId = null;
let inputsHidden = true;

render();

// declraciones de funciones
function showFormularioEntrada() {}

function add() {
  inputsHidden = false;
  if (isEditMode) {
    confirmar();
  } else {
    listaItems.push({
      id: nextId,
      valor: input.value,
      picture: inputImagen.value,
    });
    nextId += 1;
    input.value = "";
    inputImagen.value = "";
  }
  render();
}
function render() {
  let template = ``;
  for (const item of listaItems) {
    template += `<li> <div><img class='imagen' src='${item.picture}' alt = "${item.valor}"></img></div> ${item.valor} <button onclick="deleteItem(${item.id})"> Borrar </button> <button onclick="editItem(${item.id})"> Edit </button> </li>`;
  }

  listdom.innerHTML = template;
  //input.hidden = inputsHidden;
}
function deleteItem(id) {
  //debe de borrar el item con  id indicado//
  // una vez borrado mostrar el cambio en pantalla

  for (let index = 0; index < listaItems.length; index++) {
    const item = listaItems[index];
    if (id == item.id) {
      //  borrar,
      listaItems.splice(index, 1);
    }
  }
  render();
}
//Al Pusar boton edit poner el VALOR del  itemt en el input
//Cambiar eid == item.id) {para confirmar la modificacion
function editItem(id) {
  for (let index = 0; index < listaItems.length; index++) {
    const item = listaItems[index];
    if (id == item.id) {
      //  editar,
      input.value = item.valor;
      botonEditar.innerText = "Modificar";
      editedItemId = id;
      isEditMode = true;
      inputImagen.value = item.picture;
    }
  }
  render();
}
// que debe pasar al confirmar?
//editar el valor  que esta en lista
// buscar el item y modificar su valor con el valor del input
//como se busca?
//modo
function confirmar() {
  for (const item of listaItems) {
    if (editedItemId == item.id) {
      item.valor = input.value;
      isEditMode = false;
      botonEditar.innerText = "Añadir";
      editedItemId = null;
      input.value = "";
      item.picture = inputImagen.value;
      inputImagen.value = "";
    }
  }
}
