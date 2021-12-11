const todos = [
    { title: "Ăn tối", isDone: false, id: 1 },
    { title: "Học bài", isDone: false, id: 2 },
    { title: "Đi ngủ", isDone: false, id: 3 },
];

console.log("before", todos);

const todoEls = document.getElementById("todos");
const todoInput = document.getElementById("tdVal");
const todoBtn = document.getElementById("addTd");

function generatorTodoElement(todo) {
    const contain = document.createElement("div");
    contain.stytle.display = "flex";
    contain.style.justifyContent = "space-between";
    contain.style.marginBottom = "10px";

    const deleteEl = document.createElement("span");
    deleteEl.textContent = "X";
    deleteEl.setAttribute("data-id",)

    const todoElement = document.createElement("li");
    todoElement.setAttribute("class", todo.isDone ? "todoItem done" : "todoItem");
    todoElement.setAttribute("data-id", todo.id);
    todoElement.textContent = todo.title;
    return todoElement;
}

function renderTodos(todosData) {
    for (let todo of todosData) {
        let todoNode = generatorTodoElement(todo);
        todoEls.appendChild(todoNode);
    }
    editTodo();
}

function editTodo() {
    const todoItemEls = document.querySelectorAll(".todoItem");
    todoItemEls.forEach((item) => {
        item.addEventListener("dblclick", () => {
            let todoId = item.getAttribute("data-id");
            for (let val of todos) {
                if (val.id == todoId) {
                    val.isDone = !val.isDone;
                }
            }
            reRenderTodos();
        });
    });
}

function reRenderTodos() {
    todoEls.innerHTML = "";
    renderTodos(todos);
}

todoBtn.addEventListener("click", () => {
    if (todoInput.value !== "") {
        const newTodo = {
            title: todoInput.value,
            isDone: false,
            id: `${new Date().valueOf()}`,
        };
        todos.push(newTodo);
        todoInput.value = "";
        reRenderTodos();
    } else {
        alert("Input khong duoc de trong");
    }
});

renderTodos(todos);