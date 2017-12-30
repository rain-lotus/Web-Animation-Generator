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
//document.on_click
var select_element = function () {
    if (!is_moving) {
        if ($(this).hasClass("selected")) $(this).removeClass("selected");
        else $(this).addClass("selected");
    } else {
        is_moving = false;
    }
};

//.add_move class
var modify_animation = function () {
    this.make_history_block = function () {
        var name = "";
        $(".selected").each(function (i, elem) {
            name += "#" + $(elem).attr("id");
            if(i != $(".selected").length-1) name += ",";
        });
        var history_box = "<div class='history'><p class='name'>" + name + "</p></div>"
        $("#history").append(history_box);
        is_chose_pos = true;
    };

    //仮にtranslateのfunctionを入れている
    //今編集しようとしているブロックに対して行き先指定（これでいいのかもわからない）
    this.regist_move = function (e) {
        //多分マウス位置
        posx = e.offsetX;
        posy = e.offsetY;
        //ここの必ず最後を取ってくるやつも後で変えないと
        var i = $(".history").length - 1;
        var positionX = "<p class='posX'>" + posx + "</p>";
        var positionY = "<p class='posY'>" + posy + "</p>";
        $(".history:eq(" + i + ")").append(positionX);
        $(".history:eq(" + i + ")").append(positionY);
        is_chose_pos = false;
        //仮
        this.add_animation(i);
    };

    this.add_animation = function (boxnum) {
        var this_animations_array = [];

        var targets = $(".history:eq(" + boxnum + ") p.name").text();
        animation['targets'] = targets;

        targets_array = targets.split(",");
        for(var target in targets_array){
            animation = {};

            animation['targets'] = targets_array[target];
            var positionX = $(".history:eq(" + boxnum + ") p.posX").text();
            var element_posx = parseInt($(targets_array[target]).css('left'),10);
            var x = positionX - element_posx;
            animation['translateX'] = x.toString();

            var positionY = $(".history:eq(" + boxnum + ") p.posY").text();
            var element_posy = parseInt($(targets_array[target]).css('top'),10);
            var y = positionY - element_posy;
            animation['translateY'] = y.toString();

            animation['offset'] = "0";

            console.log(animation);

            this_animations_array.push(animation);
        }

        //プレビューの実装（微妙）
        animate_array(this_animations_array);
        animation = {};
    };
};

//プレビュー(仮)
var animate_block = function () {
    timeline = anime.timeline(timeline_palameter);
    timeline.add(animation);
};

//任意のアニメーション配列に対してタイムライン作成
function animate_array(array) {
    //タイムラインリセット
    timeline = anime.timeline(timeline_palameter);
    for (var i = 0; i < array.length; i++) {
        console.log(array[i]);
        timeline.add(array[i]);
    }
}

