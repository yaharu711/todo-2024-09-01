// jsファイルから他のjsファイルでexportしているものを参照できるようになる。この場合は、{}がないのでexport defaultを使っている場合に使える
import addImcompletedTodo from "./addImcompletedTodo.js";

// ファイル別れているし、静的解析聞かなくてつらくない？id要素覚えていないといけない。
document.getElementById("add-button").addEventListener("click", () => addImcompletedTodo("imcomplete-list"));
// 上記で() =>を付けている理由は、() =>がないとただonClickAdd()を実行した結果をclickイベントのリスナーに渡してしまうから。() => にすることでイベントがリスナーした時に実行されるようになる
// エンターキーが押された場合も追加できるようにする。これは、エンターキーについてはinput要素に対してイベントリスナーする。
document.getElementById("add-text").addEventListener("keydown", (event) => {
    if (event.key === "Enter") {
        document.getElementById("add-button").dispatchEvent(new PointerEvent("click"));
        // もしフォームがあった場合エンターキー押したイベントで画面リロード入るので阻止する。つまり、エンターキーを押してもボタンクリックしたことにするだけにする
        event.preventDefault();
      }
})