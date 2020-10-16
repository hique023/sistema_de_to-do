let listaTodo = document.querySelector('#listaTodo')
let inputElement = document.querySelector('#inputElement')
let buttonElement = document.querySelector('#btnElement')

let todos = JSON.parse(localStorage.getItem('list_todos')) || []

function renderTodos() {
    listaTodo.innerHTML = ''
    for (todo of todos){
        let todoElement = criarElemento('li')
        let textTodo = criarText(todo)
        let excluir = criarElemento('button')
        let textExcluir = criarText('Excluir')
        
        addChild(todoElement, textTodo)
        addChild(listaTodo, todoElement)
        addChild(excluir, textExcluir)
        addChild(todoElement, excluir)
        
        let pos = todos.indexOf(todo)
        excluir.setAttribute('onclick', 'excluirTodo(' + pos + ')')
    }
}

function criarElemento(element){
    return document.createElement(element)
}

function criarText(text){
    return document.createTextNode(text)
}

function addChild(principal, filho){
    return principal.appendChild(filho)
}

renderTodos()

function addTodo() {
    let textTodo = inputElement.value

    if (textTodo != '') {
        todos.push(textTodo)
        inputElement.value = ''
        renderTodos()
        saveStorage()
    } else {
        alert("Digite uma tarefa para adicionar!")
    }
}

function excluirTodo(pos) {
    todos.splice(pos, 1)
    renderTodos()
    saveStorage()
}

function saveStorage() {
    localStorage.setItem('list_todos', JSON.stringify(todos))
}

buttonElement.onclick = addTodo