//キーフレームの管理
//メイン
//最終的にここもファイル分けたいなって思います

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
    $("#targets").val(serected_elements());
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

//アニメーションをさせる
var box2animation = function (boxnum) {
    //特定のhistoryboxからanimation配列を作ってくれる
    var this_animations_array = [];

    $modify_history_box = $(".history:eq(" + boxnum + ")");

    animation = {};
    $modify_history_box.add("p").each(function (i, elem) {
        //それぞれの要素のpからクラス名(=パラメーター名)と要素の値を取ってくる
        var parameter = $(elem).attr('class');
        if(parameter == "history") return true;
        var parameter_value = $(elem).add("." + parameter).text();
        //連想配列にパラメータを追加
        animation[parameter] = parameter_value.toString();
    });

    this_animations_array.push(animation);
    return this_animations_array;
};

var compile_animation = function () {
    //アニメーションの配列を作る
    animations = [];
    $(".history").each(function (i) {
        Array.prototype.push.apply(animations, box2animation(i));
    });
    animate_array(animations);
};

var progress = document.querySelector('.progress');
var timeline_palameter = {
    easing: 'linear',
    update: function (anim) {
        progress.value = anim.progress;
    }
};
var timeline = anime.timeline(timeline_palameter);

//任意のアニメーション配列に対してタイムライン作成
var animate_array = function (array) {
    //タイムラインリセット
    timeline = anime.timeline(timeline_palameter);
    for (var i = 0; i < array.length; i++) {
        timeline.add(array[i]);
    }

    //TODO ループかどうかを見る
    //TODO あと、操作の途中のたいみんぐで自然にリセットできるようにする
    //終わったら自走リセットを付けた
    timeline.add({
        complete: function(anim) {
            console.log(anim.completed);
            timeline.seek(0);
        }
    });
};