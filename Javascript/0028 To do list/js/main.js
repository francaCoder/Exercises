// Seleção de elementos
const todoForm = document.querySelector("#todo-form")
const todoInput = document.querySelector("#todo-input") // add task
const todoList = document.querySelector(".todo-list") // list of tasks
const editForm = document.querySelector("#edit-form") // 
const editInput = document.querySelector("#edit-input") // campo de edição
const canceleditBtn = document.querySelector("#cancel-edit-btn") // campo de edição
const searchInput = document.querySelector(".search")
const deleteBtn = document.querySelector("#erase-button")
const filter = document.querySelector("#filter-select")
let oldInputValue
let dbTasks = []

// Chamando a função nesse momento nós populamos o nosso arrau de tarefas
getLocalStorageTasks()

// Funções

const saveTodo = (taskname) => {
    let task = document.createElement("div")
    let taskName = document.createElement("h3")
    let doneBtn = document.createElement("button")
    let editBtn = document.createElement("button")
    let removeBtn = document.createElement("button")

    task.classList.add("todo")
    taskName.innerHTML = taskname
    doneBtn.classList.add("finish-todo")
    editBtn.classList.add("edit-todo")
    removeBtn.classList.add("remove-todo")
    
    // colocando os ícones dentro dos botões
    doneBtn.innerHTML = '<i class="fa-solid fa-check"></i>'
    editBtn.innerHTML = '<i class="fa-solid fa-pen"></i>'
    removeBtn.innerHTML = '<i class="fa-solid fa-xmark"></i>'

    task.appendChild(taskName)
    task.appendChild(doneBtn)
    task.appendChild(editBtn)
    task.appendChild(removeBtn)

    todoList.appendChild(task)

    // Adicionar tarefa no localStorage para quando a página for recarregada as tarefas se manterem

    // Para não substituirmos os valores temos que adicionar no localStorage um array para armazenar todas as tarefas
    dbTasks.push(JSON.stringify(task.querySelector("h3").innerText))
    // Primeiro salva no array e depois manda o array para o localStorage
    localStorage.setItem("Tasks", dbTasks)
    // console.log(task.querySelector("h3").innerText)

    // Depois que salvar: esvaziar o valor do input e focar no campo
    todoInput.value = ""
    todoInput.focus()
}

const toggleForms = () => {
    editForm.classList.toggle("hide")
    todoForm.classList.toggle("hide") // add task
    todoList.classList.toggle("hide")
}

const updateTodo = (text) => {
    const allTasks = document.querySelectorAll(".todo")

    allTasks.forEach(todo => {
        let todoTitle = todo.querySelector("h3")

        if (todoTitle.innerText == oldInputValue) {
            todoTitle.innerText = text
        }
    });
}


// Eventos

todoForm.addEventListener("submit", (e) => {
    e.preventDefault() //não deixar que o formulário seje enviado quando clicarem no botão

    // console.log("Enviou o form")
    const inputValue = todoInput.value
    // console.log(inputValue)
    
    if (inputValue) {
        // save todo
        // criar funcionalidade de adicionar as tarefas

        saveTodo(inputValue)
    }
})

// Adicionando um evento no botão de concluir as tarefas
// como tem muitos vamos adicionar o evento no documento e depois filtrar 

document.addEventListener("click", (e) => {
    const targetEl = e.target
    const parentEl = targetEl.closest("div") // parente pai mais próximo
    // se eu cliquei no botão a div mais próxima é a div do todo
    let todoTitle

    if (parentEl && parentEl.querySelector("h3")) {
        todoTitle = parentEl.querySelector("h3").innerText
        
    }

    if (targetEl.classList.contains("finish-todo")) {
        // console.log("oi")
        // Para selecionar a div que o usuário clicou, buscamos a div mais próxima no htm do botão que foi clicado
        // agora basta adiconar a classe done para a div

        parentEl.classList.toggle("done")
    }

    if (targetEl.classList.contains("edit-todo")) {
        // console.log("Editou") 
        // Vai esconder um formulário e mostrar outro
        toggleForms()
        editInput.value = todoTitle
        oldInputValue = todoTitle
    }

    if (targetEl.classList.contains("remove-todo")) {
        parentEl.remove()
    }
})

canceleditBtn.addEventListener("click", (e) => {
    e.preventDefault() // Para não enviar o formulário

    toggleForms()
})

editForm.addEventListener("submit", (e) => {
    e.preventDefault()
    
    const editInputValue = editInput.value

    if (editInputValue) {
        updateTodo(editInputValue)
    }

    toggleForms()
})

// filter.addEventListener("onchange", (e) => {
//     // console.log(e.target.value)
//     console.log(e.target.value)
// })

searchInput.addEventListener("input", (e) => {
    // console.log(e.target.value)

    // Não funcionou porque eu declarei o allTask de forma global e quando eu declarei não havia nenhuma tarefa
    let string = e.target.value
    let allTasks = document.querySelectorAll(".todo")
    // let nameOfTasks = []

    // console.log(string)
    allTasks.forEach(task => {
        if (!(task.querySelector("h3").innerText).startsWith(string)) {
            task.classList.add("hide")
        } else {
            task.classList.remove("hide")
        }
    });

})

const removeHide = (array) => {
    array.forEach(task => {
        if (task.classList.contains("hide")) {
            task.classList.remove("hide")
        }
    })
}

function changeSelect() {

    let allTasks = document.querySelectorAll(".todo")

    if (event.target.value == "all") {
        allTasks.forEach(task => {
            if (task.classList.contains("hide")) {
                task.classList.remove("hide")
            }
        });
    }

    if (event.target.value == "done") {
        removeHide(allTasks)

        allTasks.forEach(task => {
            if (!task.classList.contains("done")) {
                task.classList.toggle("hide")
            }    
        }); 
    }

    if (event.target.value == "todo") {
        removeHide(allTasks)

        allTasks.forEach(task => {
            if (task.classList.contains("done")) {
                task.classList.toggle("hide")
            }  
        });
    }
}

deleteBtn.addEventListener("click", (e) => {
    e.preventDefault()

    let input = document.querySelector("#search-input")

    input.value = (input.value).slice(0, -1)
})

// Recuperar tarefas do localStorage

function getLocalStorageTasks() {
    // Queremos pegar a chave que guarda o nosso array no localStorage
    if (localStorage.getItem("Tasks")) {
        // o retorno com JSON.parse é um objeto com as informações
        dbTasks = JSON.parse(localStorage.getItem("Tasks"))
        console.log(dbTasks)
    } 
}

// Video aula implementação localStorage
// https://www.youtube.com/watch?v=oe57IKQXl9I&t=225s