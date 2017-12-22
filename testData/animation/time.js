var speed = 100; // この値（ミリ秒）毎に画面が変わる
var tt = 800;
var pxa = 800; // 鶴のX方向位置(Pixel)
var pya = 100; // 鶴のY方向位置(Pixel)
var stp = 25; // 鶴の1回移動量(Pixel)

function move(t) {
    pxa = t;  //  下に移動させる場合には　pya を変更する
    document.getElementById("dot1").style.left = pxa;
    document.getElementById("dot1").style.top = pya;
}

function disp() {
    if (tt >= -160) {
        setTimeout("disp()", speed);
    }
    else {
        tt = 800;
        setTimeout("disp()", speed);
    }
    tt = tt - stp;
    move(tt);
}


$(function () {
    disp();

    $("#animestart").click(function(){
        //disp();
        alert("aaa");
    });
})
