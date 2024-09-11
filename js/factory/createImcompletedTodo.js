import completeTodo from "../completeTodo.js";
import deleteImcompletedTodo from "../deleteImcompletedTodo.js";

const createImcompletedTodoElements = (todoName) => {
    const li = document.createElement("li");
    const div = document.createElement("div");
    div.className = "imcomplete-todo";
    const p = document.createElement("p");
    p.textContent = todoName;
    const completedButton = createCompletedButton(todoName);
    const deletedButton = createDeletedButton();
    li.appendChild(div);
    div.appendChild(p);
    div.appendChild(completedButton);
    div.appendChild(deletedButton);

    return li;
}

// これ要素が上位から見ると暗黙的で結構つらいかもなあ。。でも、どうする？→Reactになるとここは管理しやすくなるかな？
const createCompletedButton = (todoName) => {
    const completedButton = document.createElement("button");
    completedButton.textContent = "完了";
    // 要素を作った時にイベントリスナーを置いておかないと、todo.jsで以下を書いてもcompleteButton要素が存在していない判定になってしまう。
    // e.target.closest("li")は未完了TODOを未完了TODOエリアから削除するために必要
    completedButton.addEventListener("click", (event) => completeTodo(event.target.closest("li"), todoName));

    return completedButton;
}

const createDeletedButton = () => {
    const deletedButton = document.createElement("button");
    deletedButton.textContent = "削除";
    deletedButton.addEventListener("click", (event) => deleteImcompletedTodo(event.target.closest("li")));

    return deletedButton;
}

export default createImcompletedTodoElements;