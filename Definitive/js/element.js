//////////////////////
//キャンバス上の要素の操作
//////////////////////

//追加
var element_sum = 0;

function add_element(type) {
    //ボタンがちゃんと作られていればここでいい感じに増やしてくれる
    var elem = "<div class='element " + type + "' id='" + type + element_sum + "'>" + type + element_sum + "</div>";
    $("#canvas").append(elem);
    add_element_info(type);
    element_sum++;
}

function add_element_info(type) {
    //TODO 巻き戻しのテスト
    var info = "<div class='element_info' id='" + type + element_sum + "'></div>";
    $("#elements").append(info);
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