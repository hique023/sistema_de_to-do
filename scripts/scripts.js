let listaTodo = document.querySelector('#listaTodo')
let inputElement = document.querySelector('#inputElement')
let buttonElement = document.querySelector('#btnElement')


let todos = JSON.parse(localStorage.getItem('list_todos')) || []

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

renderTodos()

function addTodo() {
    let textTodo = inputElement.value

    todos.push(textTodo)
    inputElement.value = ''
    renderTodos()
    saveStorage()
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