import createImcompletedTodoElements from "./factory/createImcompletedTodo.js";

const imcompleteTodo = (completedTodo, completedTodoName) => {
    const imcompletedTodoElements = createImcompletedTodoElements(completedTodoName);
    // 完了エリアに表示する
    document.getElementById("imcomplete-list").appendChild(imcompletedTodoElements);
    // 未完了エリアに表示されているtodoは削除
    completedTodo.remove();
}

export default imcompleteTodo;