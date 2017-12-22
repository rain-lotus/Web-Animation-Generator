// https://q-az.net/elements-drag-and-drop/
(function () {
    var speed = 100; // この値（ミリ秒）毎に画面が変わる
    var tt = 800;
    var pxa = 800; // 鶴のX方向位置(Pixel)
    var pya = 100; // 鶴のY方向位置(Pixel)
    var stp = 5; // 鶴の1回移動量(Pixel)

    function move(t) {
        pxa = t;  //  下に移動させる場合には　pya を変更する
        document.getElementById("red-box").style.left = pxa;
        document.getElementById("red-box").style.top = pya;
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


    ////
    //要素の取得
    var elements = document.getElementsByClassName("drag-and-drop");

    //要素内のクリックされた位置を取得するグローバル（のような）変数
    var x;
    var y;

    //マウスが要素内で押されたとき、又はタッチされたとき発火
    for (var i = 0; i < elements.length; i++) {
        elements[i].addEventListener("mousedown", mdown, false);
        elements[i].addEventListener("touchstart", mdown, false);
    }


    /////ボタン操作を追加したい

    var button = document.getElementById("btn");
    button.addEventListener("click", start, false);

    function start() {
        //if (parseInt(elements[0].style.top) > )
        console.log("aa");
        if (parseInt(elements[0].style.top) > parseInt(elements[1].style.top)) {
            elements[0].style.backgroundColor = "#ff00ff";
            elements[1].style.backgroundColor = "aqua";
        } else {
            elements[0].style.backgroundColor = "#ff6363";
            elements[1].style.backgroundColor = "#00ff00";
        }
    }

    ////


    //マウスが押された際の関数
    function mdown(e) {
        //クラス名に .drag を追加
        this.classList.add("drag");

        //タッチデイベントとマウスのイベントの差異を吸収
        if (e.type === "mousedown") {
            var event = e;
        } else {
            var event = e.changedTouches[0];
        }

        //要素内の相対座標を取得
        x = event.pageX - this.offsetLeft;
        y = event.pageY - this.offsetTop;

        //ムーブイベントにコールバック
        document.body.addEventListener("mousemove", mmove, false);
        document.body.addEventListener("touchmove", mmove, false);
    }

    //マウスカーソルが動いたときに発火
    function mmove(e) {
        //ドラッグしている要素を取得
        var drag = document.getElementsByClassName("drag")[0];

        //同様にマウスとタッチの差異を吸収
        if (e.type === "mousemove") {
            var event = e;
        } else {
            var event = e.changedTouches[0];
        }

        //フリックしたときに画面を動かさないようにデフォルト動作を抑制
        e.preventDefault();

        //マウスが動いた場所に要素を動かす -> 文字列を代入している
        drag.style.top = event.pageY - y + "px";
        drag.style.left = event.pageX - x + "px";

        //マウスボタンが離されたとき、またはカーソルが外れたとき発火
        drag.addEventListener("mouseup", mup, false);
        document.body.addEventListener("mouseleave", mup, false);
        drag.addEventListener("touchend", mup, false);
        document.body.addEventListener("touchleave", mup, false);
    }

    //マウスボタンが上がったら発火
    function mup(e) {
        var drag = document.getElementsByClassName("drag")[0];

        drag.style.top = Math.round(parseInt(drag.style.top) / 50) * 50 + "px";

        //ムーブベントハンドラの消去
        document.body.removeEventListener("mousemove", mmove, false);
        drag.removeEventListener("mouseup", mup, false);
        document.body.removeEventListener("touchmove", mmove, false);
        drag.removeEventListener("touchend", mup, false);

        //クラス名 .drag も消す
        drag.classList.remove("drag");
    }

})()