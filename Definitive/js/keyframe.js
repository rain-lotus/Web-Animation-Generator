///////////////////////
//キーフレームとタイムライン
///////////////////////

$input_paarmeters = $(".left input.parameter");

//履歴の操作
var modifying_block_number = 0;

//妥協版
function add_history_block() {
    //履歴divを作る
    var history_box = "<div class='history'></div>";
    $("#history").append(history_box);
    modifying_block_number = $(".history").length - 1;
    input_animation_parameter();
}

function input_animation_parameter() {
    //divにパラメータを代入
    $(".history").eq(modifying_block_number).empty();
    $input_paarmeters.each(function (i, elem) {
        var para = "<p class='" + $(elem).attr("id") + "'>" + $(elem).val() + "</p>";
        $(".history").eq(modifying_block_number).append(para);
    });
}

function set_history_width() {
    $(".history").each(function (i,elem) {
        var start = $(".history:eq(" + i + ") p.offset").text();
        var time = $(".history:eq(" + i + ") p.duration").text();

        var width = (time / animation_duration) * 100;
        start = (start / animation_duration) * 100;

        $(".history:eq("+i+")").css({
            'width': width.toString() + "%",
            'left': start.toString() + "%"
        });
    });
}

var clear_parameter_box = function () {
    $input_paarmeters.each(function (i, elem) {
        $(elem).val("");
    });
};

var remove_box = function () {
    $(".history").eq(modifying_block_number).remove();
};

// var modify_historybox = function ($box) {
//     //履歴クリックしたらパラメーター入力欄に値を入れたい:引数が対象
//     modifying_block_number = $(".history").index($box);
//     $history_p = $box.add("p");
//     for (var i = 1; i < $history_p.length; i++) {
//         $("#" + $history_p.eq(i).attr("class")).val($history_p.eq(i).text());
//     }
// };