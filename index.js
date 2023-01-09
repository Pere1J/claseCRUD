let data = ["books", "pen"];

function addItem() {
  data.push(input.value);
  render();
}

console.log(data);

let render = () => {
  let template = "";
  for (const item of data) {
    template += `<li>${item} <button onclick="removeNameFromTheList(this)" style ='background-color:red'>Delete</button> <button>Edit</button></li>`;
    console.log(template);
  }
  let input = document.getElementById("input");

  let listDom = document.getElementById("listDom");
  console.log(listDom);

  listDom.innerHTML = template;
};

//https://www.tutorialspoint.com/how-to-add-and-remove-names-on-button-click-with-javascript
function removeNameFromTheList(e) {
  e.parentElement.remove();
}

render();
