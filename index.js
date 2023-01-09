let data = ['books', 'pen'];


function addItem() {
  data.push(input.value);
  render();
}


let render = ()=>{
    let template = ""
for (const item of data) {
    template +=(`<li>${item} <button onclick="delete [i]" style ='background-color:red'>Delete</button> <button>Edit</button></li>`)
    console.log (template)
};
    
let input = document.getElementById("input");
let listDom = document.getElementById("listDom");
console.log(listDom)

listDom.innerHTML = template
}
render()



