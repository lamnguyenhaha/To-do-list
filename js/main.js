// import lớp đối tượng 
import { ToDo } from "./todo.js";
import { ToDoList } from "./todolist.js";


let todoList = new ToDoList();
// Rút gọn cú pháp dom
let completeList = new ToDoList();
const getEle = id => {
    return document.getElementById(id);
}

// Hàm thêm ToDo 
const addToDo = () => {
    let txtTodo = getEle("newTask").value;
    let uLToDo = getEle("todo");
    if (txtTodo != "") {
        let td = new ToDo(txtTodo, "todo");
        todoList.addToDo(td);

    }

    // gọi hàm 
    showToDoList(uLToDo);
    // console.log(td);

}
getEle("addItem").addEventListener("click", () => {
    addToDo();
});

// Hàm hiển thị toDo
const showToDoList = (uLToDo) => {
    uLToDo.innerHTML = todoList.renderToDo();
}
const showCompleteList = (ulCompleted) => {
        ulCompleted.innerHTML = completeList.renderToDo();
    }
    // Hàm delete Todo
const deleteToDo = (e) => {
    let tdIndex = e.currentTarget.getAttribute("data-index");
    let status = e.currentTarget.getAttribute("data-status");
    let ulTodo = getEle("todo");
    let ulCompleted = getEle("completed");
    // console.log(tdIndex);
    if (status == "todo") {
        todoList.removeToDo(tdIndex);
        showToDoList(ulTodo);
    } else if (status == "completed") {
        completeList.removeToDo(tdIndex);
        showCompleteList(ulCompleted);
    } else {
        alert("Cannot delete todo !")
    }

}
window.deleteToDo = deleteToDo;

const CompleteToDo = (e) => {
    // console.log(event);
    let tdIndex = e.currentTarget.getAttribute("data-index");
    let status = e.currentTarget.getAttribute("data-status");
    let ulTodo = getEle("todo");
    console.log(todoList.toDoList);
    let ulCompleted = getEle("completed");
    console.log(status);
    if (status == "todo") {


        let completeItem = todoList.toDoList.slice(tdIndex, tdIndex + 1);

        let ObjectToDo = new ToDo(completeItem[0].textToDo, "completed");

        moveTodo(todoList, completeList, ObjectToDo, tdIndex);

        showToDoList(ulTodo);

        showCompleteList(ulCompleted);
    } else if (status == "completed") {
        let undoItem = completeList.toDoList.slice(tdIndex, tdIndex + 1);
        let ObjectToDo = new ToDo(undoItem[0].textToDo, "todo");
        moveTodo(completeList, todoList, ObjectToDo, tdIndex);
        showToDoList(ulTodo);

        showCompleteList(ulCompleted);
    } else {
        alert("Cannot remove todo !")
    }
}
window.CompleteToDo = CompleteToDo;

const moveTodo = (depart, arrival, obj, tdIndex) => {
    // removeTodo from depart 
    depart.removeToDo(tdIndex);

    // Add todo to Arrival 
    arrival.addToDo(obj);


}
const sortASC = () => {

    let ulTodo = getEle("todo");
    todoList.sortToDoList(false);
    showToDoList(ulTodo);

}
window.sortASC = sortASC;
const sortDES = () => {

    let ulTodo = getEle("todo");
    todoList.sortToDoList(true);
    showToDoList(ulTodo);

}

window.sortDES = sortDES;