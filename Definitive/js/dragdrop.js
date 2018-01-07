///////////////////////
//ドラッグアンドドロップ
//////////////////////

function drag_element(e) {
    $(this).addClass("drag");
    //要素内の相対座標を取得
    x = event.pageX - this.offsetLeft;
    y = event.pageY - this.offsetTop;
    $(document.body).mousemove(move_element);
    $(".drag").mouseup(drop_element);
}

function move_element(e) {
    is_moving = true;
    e.preventDefault();
    $(".drag").css({
        "top": event.pageY - y + "px",
        "left": event.pageX - x + "px"
    });
    $(".drag").mouseup(drop_element);
    is_moving = false;
}

function drop_element(e) {
    $(document.body).off('mousemove');
    $(".drag").mouseup = "";
    $(".drag").removeClass("drag");
    //これがないと親要素のイベントが発生
    setTimeout(function () {
        busy = 0;
    }, 500);
}