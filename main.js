const txt = document.getElementById('text');
const btn = document.getElementById('btn');
const res = document.getElementById('res');

const arr = JSON.parse(localStorage.getItem('todo'))|| [];

function init(){
    res.innerHTML = ""
    for(todos of arr){
        var pos = arr.indexOf(todos)
        res.innerHTML += `<p>${todos}</p><a onclick="dele(${pos})">X</a>`
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

function dele(pos){
    arr.splice(pos, 1)
    init()
    save()
}


btn.onclick = addTodo