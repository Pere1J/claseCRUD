let data = ["books", "pen"];

function addItem() {
  data.push(input.value);
  render();
}

console.log(data);

let render = () => {
  let template = "";
  let i = 0;
  for (const item of data) {
    template += `<li id=${i}>${item} <button onclick="removeNameFromTheList(${i})" style ='background-color:red'>Delete</button> <button>Edit</button></li>`;
    console.log(template);
    i++;
  }
  let input = document.getElementById("input");

  let listDom = document.getElementById("listDom");
  console.log(listDom);

  listDom.innerHTML = template;
};

//https://www.tutorialspoint.com/how-to-add-and-remove-names-on-button-click-with-javascript
function removeNameFromTheList(i) {
  data.splice(i, 1);
  render();
}

render();
