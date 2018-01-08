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

    //////////////////////////
    //ボタンとかシークバーとか
    ///////////////////////////

    $(".play").click(function () {
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
        timeline.seek(animation_duration * ($(this).val() / 100));
        console.log(animation_duration * ($(this).val() / 100), $(this).val());
    });

    ////////////////////////
    //データ書き出し
    ///////////////////////

})()
