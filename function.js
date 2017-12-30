var timeline_palameter = {
    easing: 'linear',
    update: function (anim) {
        $(".progress").value = anim.progress;
    }
};
var timeline = anime.timeline(timeline_palameter);

var animation = {};//連想配列
var animation_array = [];//連想配列の配列

var is_chose_pos = false;
var is_moving = false;
var posx, posy;

//add_element
var element_sum = 0;
var add_element = function (type) {
    //ボタンがちゃんと作られていればここでいい感じに増やしてくれる
    $("#canvas").append("<div class='element " + type + "' id='" + type + element_sum + "'>" + type + element_sum + "</div>");
    element_sum++;
}
//dd
var drag_element = function (e) {
    $(this).addClass("drag");
    //要素内の相対座標を取得
    x = event.pageX - this.offsetLeft;
    y = event.pageY - this.offsetTop;
    $(document.body).mousemove(move_element);
    $(".drag").mouseup(drop_element);
};
var move_element = function (e) {
    is_moving = true;
    e.preventDefault();
    $(".drag").css({
        "top": event.pageY - y + "px",
        "left": event.pageX - x + "px"
    });
    $(".drag").mouseup(drop_element);
};
var drop_element = function (e) {
    $(document.body).off('mousemove');
    $(".drag").mouseup = "";
    $(".drag").removeClass("drag");
    //これがないと親要素のイベントが発生
    setTimeout(function () {
        busy = 0;
    }, 500);
};
//document.on_click
var select_element = function () {
  $(this).addClass("selected");
};

//履歴box追加
//この漢字でいいけど何か考えないと
function add_history_block(name) {
    //dd操作のため
    if (!is_moving) {
        var history_box = "<div class='history'>" + name + "</div>"
        $("#history").append(history_box);
        is_chose_pos = true;

        //TODO ここ仮
        animation["targets"] = "#" + name;

        //これがないと親要素のイベントが発生
        setTimeout(function () {
            busy = 0;
        }, 500);
    }
    is_moving = false;
}

//今編集しようとしているブロックに対して行き先指定（これでいいのかもわからない）
function add_position(e) {
    //多分マウス位置
    posx = e.offsetX;
    posy = e.offsetY;
    var i = $(".history").length - 1;
    var position = "<p>" + posx + "," + posy + "</p>";

    $(".history:eq(" + i + ")").append(position);
    is_chose_pos = false;

    //TODO 仮
    animation["translateX"] = posx.toString();
    animation["translateY"] = posy.toString();
    animation_array.push(animation);

    //プレビューの実装（微妙）
    animate_block();

    animation = {};


}

//プレビュー(仮)
var animate_block = function () {
    console.log("aaergethq");
    timeline = anime.timeline(timeline_palameter);
    timeline.add(animation);
};

//全体タイムライン作成
function animate_array() {
    timeline = anime.timeline(timeline_palameter);
    for (var i = 0; i < animation_array.length; i++) {
        timeline.add(animation_array[i]);
    }
}

