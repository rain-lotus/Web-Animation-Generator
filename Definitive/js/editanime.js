//アニメーション作成フロー
//要素を出す
//動きを追加していく
//ブロックベースでタイムライン的に編集（日本語が困難
//divから要素を取ってきて連想配列にする←大事
//連想配列をタイムラインにぶち込んでアニメーションさせる

//イベントの登録、関数の実行タイミングをここにまとめる
(function () {
    //エレメントの操作
    $(".add_element").click(function () {
        add_element($(this).attr('id'));
    });
    $(document).on("click", ".element", function () {
        select_element($(this));
        update_targets($(this));
    });

    $(document).on('mousedown', '.element', drag_element);

    //キーフレームのboxの操作
    $(".parameter input.parameter").change(function () {
        input_animation_parameter();
        compile_animation();
        animate_array(whole_animation);
        set_history_width();
    });

    $(document).on('click','#history',function () {
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

//////////////////////////
//ボタンとかシークバーとか
///////////////////////////

$(".play").click(function () {
    compile_animation();
    animate_array(whole_animation);
    timeline.play();
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
});