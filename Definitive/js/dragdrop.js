//ドラッグアンドドロップ

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
    is_moving = false;
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

//マウスが動いているときは
//ここは多分つかわないから最後に消す
var mouse_follow = function (e) {
    $("#mouse").css({
        "top": e.pageY - $("#canvas").offset().top + "px",
        "left": e.pageX - $("#canvas").offset().left + "px",
        'display':'inherit'});
};

