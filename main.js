const txt = document.getElementById('text');
const btn = document.getElementById('btn');
const res = document.getElementById('res');

const arr = JSON.parse(localStorage.getItem('todo'))|| [];

function init(){
    res.innerHTML = ""
    for(todos of arr){
        res.innerHTML += `<p>${todos}</p>`
    }
}

init()

function addTodo(){
    var texto = txt.value
    arr.push(texto)
    txt.value = ""
    init()
    save()
};

function save(){
   localStorage.setItem('todo', JSON.stringify(arr))
};

btn.onclick = addTodo