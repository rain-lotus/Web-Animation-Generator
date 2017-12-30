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
    $(document).on("click", ".element", function (e) {
        select_element();
        // e.stopPropagation();
    });
    $(document).on('mousedown','.element', drag_element);
    $("#canvas").click(function (e) {

        //console.log(e.offsetX+","+e.offsetY);

        //条件分岐でそれぞれのアニメーションを登録する？
        if (is_chose_pos) add_position(e);
    });

    //////

    //選択してたら次にキャンバスをクリックした時にクリックした所を移動先に指定


    //アニメーションさせる
    $("#run").click(function () {
        animate_array();
    });
    //スライダーとか
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
