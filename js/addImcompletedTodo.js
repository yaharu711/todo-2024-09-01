import createImcompletedTodoElements from "./factory/createImcompletedTodo.js";

const addImcompletedTodo = (targetId) => {
    // input要素周りのことは別のメソッドに移したいが、良い命名が思い浮かばない
    const todoName = document.getElementById("add-text").value;
    // 入力値が空なら追加できない
    if (todoName === "") {
        document.getElementById("todo-input-error").textContent = "TODO名を入力してください";
        document.getElementById("todo-input-error").style.display = "block";
        return;
    }
    document.getElementById("add-text").value = "";

    const imcompletedTodoElements = createImcompletedTodoElements(todoName);
    document.getElementById(targetId).appendChild(imcompletedTodoElements);
}

export default addImcompletedTodo;