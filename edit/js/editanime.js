//アニメーション作成フロー
//要素を出す
//動きを追加していく
//ブロックベースでタイムライン的に編集（日本語が困難
//divから要素を取ってきて連想配列にする←大事
//連想配列をタイムラインにぶち込んでアニメーションさせる

// (function () {
//     $(".add_element").click(function () {
//         add_element($(this).attr('id'));
//     });
//     //追加したelementに対する動き
//     $(document).on("click", ".element", select_element);
//     $(document).on('mousedown','.element', drag_element);
//
//     $(".add_move").click(make_history_block);
//     //アニメーション仮
//     $("#canvas").click(function (e) {
//         if (is_chose_pos) translation(e, 0);
//     });
//     $(".add").click(function () {
//         add_history_block();
//     });
//
//     //アニメーションさせる
//     $("#run").click(function () {
//         compile_animation();
//     });
//
//     //編集している時にマウス追従するやつ
//     //$(document).on("mousemove","#canvas",mouse_follow(e));
// })

(function () {
    $(".add_element").click(function () {
        add_element($(this).attr('id'));
    });

    //追加したelementに対する動き
    $(document).on("click", ".element", function () {
        select_element($(this));
        update_targets($(this));
    });
    $(document).on('mousedown', '.element', drag_element);


    //キーフレームのboxの操作
    $(".change").click(function () {
        input_animation_parameter();
    });
    $(".add").click(function () {
        add_history_block();
        clear_parameter_box();
    });
    $(document).on('click', '.history', function () {
        modify_historybox($(this));
    });
    $(".remove").click(function () {
        remove_box();
    });

})()

