//アニメーション作成フロー
//要素を出す
//動きを追加していく
//ブロックベースでタイムライン的に編集（日本語が困難
//divから要素を取ってきて連想配列にする←大事
//連想配列をタイムラインにぶち込んでアニメーションさせる

(function () {
    $(".add_element").click(function () {
        add_element($(this).attr('id'));
    });
    //追加したelementに対する動き
    $(document).on("click", ".element", select_element);
    $(document).on('mousedown','.element', drag_element);

    var translate = new modify_animation();
    $(".add_move").click(translate.make_history_block);

    //アニメーション仮
    $("#canvas").click(function (e) {
        if (is_chose_pos) translate.translation(e, 0);
    });

    //アニメーションさせる
    $("#run").click(function () {
        animate_array();
    });
    //スライダーとかを入れたかった
    $('.play').click(function () {
        timeline.play;
    });
    $('.pause').click(function () {
        timeline.pause;
    });
    $('.restart').click(function () {
        timeline.restart;
    });

})()

