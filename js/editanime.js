//アニメーション作成フロー
//要素を出す
//動きを追加していく
//ブロックベースでタイムライン的に編集（日本語が困難
//divから要素を取ってきて連想配列にする←大事
//連想配列をタイムラインにぶち込んでアニメーションさせる

/////////////////////////////////////////////
//イベントの登録、関数の実行タイミングをここにまとめる
////////////////////////////////////////////

(function () {
    //エレメントの操作
    $(".add_element").click(function () {
        add_element($(this).attr('id'));
    });

    $(document).on("click", ".element", function () {
        select_element($(this));
        $modifi_element = $(this);
        $("#name").val(get_element_color());
        update_targets($(this));
    });

    $(document).on('mousedown', '.element', drag_element);

    //キーフレームのboxの操作
    $(".add").click(function () {
        input_animation_parameter();
        compile_animation();
        animate_array(whole_animation);
        set_history_width();
    });

    $("#name").change(function () {
        if ($modifi_element != "")
            $modifi_element.css('backgroundColor', $(this).val());
    });

    $(document).on('click', '#history', function () {
        add_history_block();
        clear_parameter_box();
        compile_animation();
        animate_array(whole_animation);
        set_history_width();
        kill_select();
    });

    $(document).on('click', '.history', function (e) {
        e.stopPropagation();
        modify_historybox($(this));
    });

    $(".remove").click(function () {
        remove_box();
        kill_select();
    });

    //////////////////////////
    //ボタンとかシークバーとか
    ///////////////////////////

    $(".play").click(function () {
        timeline.seek(0);
        compile_animation();
        animate_array(whole_animation);
        timeline.play()
    });

    $(".pause").click(function () {
        timeline.pause();
    });
    $(".restart").click(function () {
        timeline.restart();
    });
    $(".reset").click(function () {
        timeline.seek(0);
    });
    $(".progress").on("input", function () {
        timeline.seek(timeline.duration * ($(this).val() / 100));
        console.log(timeline.duration * ($(this).val() / 100), $(this).val());
    });

    ////////////////////////
    //データ書き出し
    ///////////////////////

    $(document).click(function () {
        $("#get_html").val($("#canvas").html());
        $("#get_animation").val($("#history").html());
    });

})()

//キーフレームの操作
function modify_historybox($box) {
    //履歴クリックしたらパラメーター入力欄に値を入れたい:引数が対象
    var modifying_block_number = $(".history").index($box);
    $history_p = $(".history:eq(" + modifying_block_number + ") p");
    for (var i = 0; i < $history_p.length; i++) {
        $("#" + $history_p.eq(i).attr("class")).val($history_p.eq(i).text());
    }
}

function get_element_color() {
    var bgColor = $modifi_element.css('backgroundColor').toString();
    console.log(bgColor);
    bgColor = bgColor.replace("rgb(","");
    bgColor = bgColor.replace(")","");
    bgColor = bgColor.split(",");

    var color = "#"+parseInt(bgColor[0]).toString(16)+parseInt(bgColor[1]).toString(16)+parseInt(bgColor[2]).toString(16);

    return color;
}