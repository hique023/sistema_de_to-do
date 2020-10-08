let listaTodo = document.querySelector('#listaTodo')
let inputElement = document.querySelector('#inputElement')
let buttonElement = document.querySelector('#btnElement')
let todos = []

function renderTodos() {
    listaTodo.innerHTML = ''
    for (todo of todos){
        let todoElement = document.createElement('li')
        let textTodo = document.createTextNode(todo)
        let excluir = document.createElement('button')
        let textExcluir = document.createTextNode('Excluir')
        
        todoElement.appendChild(textTodo)
        listaTodo.appendChild(todoElement)
        
        excluir.appendChild(textExcluir)
        todoElement.appendChild(excluir)
        
        let pos = todos.indexOf(todo)
        excluir.setAttribute('onclick', 'excluirTodo(' + pos + ')')
    }
}

function addTodo() {
    let textTodo = inputElement.value

    todos.push(textTodo)
    inputElement.value = ''
    renderTodos()
}

function excluirTodo(pos) {
    todos.splice(pos, 1)
    renderTodos()
}

buttonElement.onclick = addTodo