import createCompleteTodo from "./factory/createCompletedTodo.js";

const completeTodo = (imcompletedTodo, imcompletedTodoName) => {
    // へんすうめいを修正
    const createdTodo = createCompleteTodo(imcompletedTodoName);
    // 完了エリアに表示する
    document.getElementById("complete-list").appendChild(createdTodo);
    // 未完了エリアに表示されているtodoは削除
    imcompletedTodo.remove();
}

export default completeTodo;