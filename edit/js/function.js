//キーフレームの管理
//ノザキ

//おそらく後で変わるから変更しやすいようにメインのdomを変数で管理する
$input_paarmeters = $(".left input.parameter");

//キャンバス上の要素の操作
var element_sum = 0;
var add_element = function (type) {
    //ボタンがちゃんと作られていればここでいい感じに増やしてくれる
    $("#canvas").append("<div class='element " + type + "' id='" + type + element_sum + "'>" + type + element_sum + "</div>");
    element_sum++;
};
var select_element = function ($elem) {
    //選択状態にする
    $elem.toggleClass("selected");
};

var serected_elements = function () {
    //選択されたエレメント一覧の文字列を作成する
    var names = "";
    $(".selected").each(function (i, elem) {
        names += "#" + $(elem).attr("id");
        if (i != $(".selected").length - 1) names += ",";
    });
    return names;
};

var update_targets = function () {
  //選択された要素をターゲットに指定する
  $("#target").val(serected_elements());
};

//履歴の操作
var modifying_block_number = 0;
//妥協版
var add_history_block = function () {
    //左の画面からパラメーターを持ってくる→divに格納
    var history_box = "<div class='history'></div>";
    $("#history").append(history_box);
    modifying_block_number = $(".history").length - 1;
    input_animation_parameter();
};

var input_animation_parameter = function () {
    //履歴にパラメーターを代入
    $(".history").eq(modifying_block_number).empty();
    $input_paarmeters.each(function (i, elem) {
        var para = "<p class='" + $(elem).attr("id") + "'>" + $(elem).val() + "</p>";
        $(".history").eq(modifying_block_number).append(para);
    });
};

var clear_parameter_box = function () {
    $input_paarmeters.each(function (i, elem) {
        $(elem).val("");
    });
};

var remove_box = function () {
    $(".history").eq(modifying_block_number).remove();
};

var modify_historybox = function ($box) {
    //履歴クリックしたら再現したい 引数が対象
    modifying_block_number = $(".history").index($box);
    $history_p = $box.add("p");
    for (var i = 1; i < $history_p.length; i++) {
        $("#" + $history_p.eq(i).attr("class")).val($history_p.eq(i).text());
    }
};