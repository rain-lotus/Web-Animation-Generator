//////////////////////
//キャンバス上の要素の操作
//////////////////////

//追加
var element_sum = 0;

$modifi_element = "";

function add_element(type) {
    //ボタンがちゃんと作られていればここでいい感じに増やしてくれる
    var name = type + element_sum;
    var elem = "<div class='element " + type + "' id='" + name + "'></div>";

    $("#canvas").append(elem);
    $modifi_element = $("#"+name);
    element_sum++;
}

//選択
function select_element($elem) {
    //選択状態にする
    $elem.toggleClass("selected");
}
function serected_elements() {
    //選択されたエレメント一覧の文字列を作成する
    var names = "";
    $(".selected").each(function (i, elem) {
        names += "#" + $(elem).attr("id");
        if (i != $(".selected").length - 1) names += ",";
    });
    return names;
}
function update_targets() {
    //選択された要素をターゲットに指定する
    $("#targets").val(serected_elements());
}
function kill_select() {
    //選択を全部殺す
    $(".element").each(function (i,elem) {
        $(elem).removeClass("selected");
    });
}