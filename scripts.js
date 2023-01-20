let listaItems = [];
let input = document.getElementById("input");
let inputImagen = document.getElementById("inputImagen");
let inputSearch = document.getElementById("inputSearch");
let formularioEntrada = document.getElementById("formularioEntrada");
let listdom = document.getElementById("listdom");
let botonEditar = document.getElementById("ejecutar");
let botonCerrar = document.getElementById("cerrar");
let nextId = 0;
let isEditMode = false;
let editedItemId = null;
let inputsHidden = true;

persistencia();
render();

////////////////////// DECLARACIONES DE FUNCIONES ////////////////////

/* La siguiente función debería mostrar los inputs en la página al hacer onclick en el icono donde se 
asigne */
function showFormularioEntrada() {
  formularioEntrada.style.display = "flex";
}

render();

//============================= fin showFormularioEntrada() ===============================================

//============================ hideFormularioEntrada () =====================================================
function hideFormularioEntrada() {
  formularioEntrada.style.display = "none";
}
render();
//===========================================================================================================

// FUNCIONES DE SALVAGUARDA =================================================================================
//regex
/* function isValidUrl(urlString) {
  let urlPattern = new RegExp(
    "^(https?:\\/\\/)?" + // validate protocol
      "((([a-z\\d]([a-z\\d-]*[a-z\\d])*)\\.)+[a-z]{2,}|" + // validate domain name
      "((\\d{1,3}\\.){3}\\d{1,3}))" + // validate OR ip (v4) address
      "(\\:\\d+)?(\\/[-a-z\\d%_.~+]*)*" + // validate port and path
      "(\\?[;&a-z\\d%_.~+=-]*)?" + // validate query string
      "(\\#[-a-z\\d_]*)?$",
    "i"
  ); // validate fragment locator
  return !!urlPattern.test(urlString);
} */

//========================================Fin Salvaguardas ===================================================
function add() {
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
    template += `<li> <div><img class='imagen' src='${item.picture}' alt = "${item.valor}"></img></div><div class ='etiquetas'><span class= 'title'>${item.valor}</span>
    <span class='icons' ><i  onclick="deleteItem(${item.id})" class="material-icons">delete</i> <i onclick="editItem(${item.id})" class="material-icons">
    edit</i></span></div></li>`;
  }

  listdom.innerHTML = template;

  //guarda datos de la galeria para ser recuperados por la funcion ''persistencia()''==============
  localStorage.setItem("galeria", JSON.stringify(listaItems));
  //===============================================================================================
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
      showFormularioEntrada();
      input.value = item.valor;
      botonEditar.innerText = "Modificar";
      editedItemId = id;
      isEditMode = true;
      inputImagen.value = item.picture;
    }
  }
  render();
}

// confirmar
//editar el valor  que esta en lista
// buscar el item y modificar su valor con el valor del input

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
      hideFormularioEntrada();
    }
  }
}

/* La siguiente función debería buscar en la listaItems el campo item.valor y mostrar en la páginas solos los valores coincidentes */

function search() {
  listaItems = listaItems.filter((item) =>
    item.valor.includes(inputSearch.value)
  );

  render();
}

//============================= fin search() ===============================================

//==============================Crear Persistencia LocalStorage=============================
function persistencia() {
  let save = localStorage.getItem("galeria");
  listaItems = JSON.parse(save);
}
//============================== fin persistencia ==========================================
