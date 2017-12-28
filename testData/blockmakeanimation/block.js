///d&d
//クリックされた位置を取得
var x;
var y;
(function () {
    $(".block").on({
        "mousedown": mousedown,
        "mouseup": function () {
            this.classList.remove("drag");
        }
    });
})()
function mousedown(e) {
    this.classList.add("drag");
    if (e.type === "mousedown") {
        var event = e;
    } else {
        var event = e.changedTouches[0];
    }

    //要素内の相対座標を取得
    x = event.pageX - this.offsetLeft;
    y = event.pageY - this.offsetTop;

    $(document.body).mousemove(mousemove);
}
function mousemove(e) {
    if (e.type === "mousemove") {
        var event = e;
    } else {
        var event = e.changedTouches[0];
    }

    e.preventDefault();
    // $(".drag").css({'top': event.pageY - y + "px", 'left': event.pageX - x + "px"});

    $(".drag").css({"top":event.pageY - y + "px","left":event.pageX - x + "px"});
    $(".drag").mouseup(mouseup);
}
function mouseup(e) {
    $(document).mousemove = "";
    $(".drag").mouseup = "";
    $(".drag").removeClass("drag");
}

//パラメーター取得