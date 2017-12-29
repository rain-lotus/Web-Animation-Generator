var is_chose_pos = false;
var posx, posy;
var pre_elemx, pre_elemy;

//アニメーション作成フロー
//要素を出す
//動きを追加していく
//ブロックベースでタイムライン的に編集（日本語が困難
//divから要素を取ってきて連想配列にする←大事
//連想配列をタイムラインにぶち込んでアニメーションさせる


(function () {
    //elementの移動指定の編集
    //移動させるelementを選択
    $(".element").click(function (e) {
        add_history_block($(this).text());
        e.stopPropagation();
    });

    //選択してたら次にキャンバスをクリックした時にクリックした所を移動先に指定
    $(".canvas").click(function (e) {
        if (is_chose_pos) add_position(e);
    });
})()

//animation editing functions
//履歴box追加
function add_history_block(name) {
    $("#history").append("<div class='history'>" + name + "</div>");
    is_chose_pos = true;

    //これがないと親要素のイベントが発生
    setTimeout(function () {
        busy = 0;
    }, 500);
}
//今編集しようとしているブロックに対して行き先指定（これでいいのかもわからない）
function add_position(e) {
    //多分マウス位置
    posx = e.offsetX;
    posy = e.offsetY;
    var i = $(".history").length - 1;
    $(".history:eq("+i+")").append("<p>"+posx+","+posy+"</p>");
    is_chose_pos = false;
}

//animation に配列を挿入してアニメーションさせる
function animate() {
    var timeline = anime.timeline();
    for (var i = 0; i < animation_array.length; i++) {
        timeline.add(animation_array[i]);
    }
}

//animation managing vals
function historyblock_to_animation(){
    //.historyブロックから要素を取り出していい感じにして連想配列にするところ
}



//
// function add_history_box() {
//     $("#history").append("<div class='history'>aaaa</div>");
// }
//
// $("#but1").click(function () {
//     target.push("#elem3");
//     translatex.push(500);
// });
//
// $("#add").click(function () {
//     var tar = $("#target").val();
//     if (tar == "") tar = "elem";
//     target.push("#" + tar);
//     $("#target").val("");
//
//     // var trax = $("#translatex").val();
//     // if (trax == "") trax = "250";
//     // translatex.push(trax);
//     // $("#translatex").val("");
//
//     push_val2array(translatex, "#translatex", "250");
//
//     var tary = $("#translatey").val();
//     if (tary == "") tary = "250";
//     translatey.push(tary);
//     $("#translatey").val("");
//     $(".pala").html(target + "<br>" + translatex + "<br>" + translatey);
// });
//
// function push_val2array(array, id, default_value) {
//     var temp = $(id).val();
//     if (temp == "") temp = array.length == 0 ? default_value : array[array.length - 1];
//     array.push(temp);
//     $(id).val("");
// }
//
