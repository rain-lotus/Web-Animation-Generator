var modify_historybox = function ($box) {
    //履歴クリックしたらパラメーター入力欄に値を入れたい:引数が対象
    modifying_block_number = $(".history").index($box);
    $history_p = $box.add("p");
    for (var i = 1; i < $history_p.length; i++) {
        $("#" + $history_p.eq(i).attr("class")).val($history_p.eq(i).text());
    }
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
    //履歴クリックしたらパラメーター入力欄に値を入れたい:引数が対象
    modifying_block_number = $(".history").index($box);
    $history_p = $box.add("p");
    for (var i = 1; i < $history_p.length; i++) {
        $("#" + $history_p.eq(i).attr("class")).val($history_p.eq(i).text());
    }
};