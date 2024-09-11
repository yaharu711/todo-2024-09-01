import imcompleteTodo from "../imcompletetodo.js";

// イベントリスナーが、ボタン押したときの処理の定義が表から見にくくなっているのが良くないなあ。ReactみたいにHtml書いてそこにjs処理が書けるのはやっぱり見やすいね。
const createCompleteTodo = (todoName) => {
    const li = document.createElement("li");
    const div = document.createElement("div");
    div.className = "complete-todo";
    const p = document.createElement("p");
    p.textContent = todoName;
    const returnButton = createReturnButton(todoName);

    div.appendChild(p);
    div.appendChild(returnButton);
    li.appendChild(div);
    return li;
}

const createReturnButton = (todoName) => {
    const returnButton = document.createElement("button");
    returnButton.textContent = "戻す";
    returnButton.addEventListener("click", (event) => imcompleteTodo(event.target.closest("li"), todoName));

    return returnButton;
}

export default createCompleteTodo;