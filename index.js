let data = ["books", "pen"];
let submit = document.getElementById("submit");
let input = document.getElementById("input");
let isEditMode = false;
let editedItemIndex = null;

let sendToInput = (indexOfData) => {
  submit.innerText = "Update";
  input.value = data[indexOfData];
};

function updateInput() {
  let index = 0;

  for (const item of data) {
    if (editedItemIndex == index) {
      data[index] = input.value;
      isEditMode = false;
      submit.innerText = "Add";
      editedItemIndex = null;
      input.value = "";
    }
    index++;
  }
  console.log("confirmar");
}

function addItem() {
  if (isEditMode) {
    updateInput();
  } else {
    data.push(input.value);
    input.value = null;
  }
  render();
}

console.log(data);

let render = () => {
  let template = "";
  let i = 0;
  for (const item of data) {
    template += `<li id=${i}><div>${item}</div> <button onclick="removeNameFromTheList(${i})" style ='color:red'>Delete</button>
     <button onclick="editThisItem(${i})">Edit</button></li>`;
    console.log(template);
    i++;
  }

  let listDom = document.getElementById("listDom");
  console.log(listDom);

  listDom.innerHTML = template;
};

function editThisItem(index) {
  sendToInput(index);
  editedItemIndex = index;
  isEditMode = true;
}

function removeNameFromTheList(i) {
  data.splice(i, 1);
  render();
}

render();
