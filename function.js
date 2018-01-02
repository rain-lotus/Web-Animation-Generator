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
};

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
        //その時選択されているelementに対して一個の塊を作る
        var name = "";
        $(".selected").each(function (i, elem) {
            name += "#" + $(elem).attr("id");
            if(i != $(".selected").length-1) name += ",";
        });
        var history_box = "<div class='history'><p class='targets'>" + name + "</p></div>"
        $("#history").append(history_box);
        is_chose_pos = true;
    };

    //仮にtranslateのfunctionを入れている
    //今編集しようとしているブロックに対して行き先指定（これでいいのかもわからない）
    this.translation = function (e, num) {
        //多分マウス位置
        posx = e.offsetX;
        posy = e.offsetY;

        //ここの必ず最後を取ってくるやつも後で変えないと
        num = $(".history").length - 1;

        var positionX = "<p class='translateX'>" + posx + "</p>";
        var positionY = "<p class='translateY'>" + posy + "</p>";
        $(".history:eq(" + num + ")").append(positionX);
        $(".history:eq(" + num + ")").append(positionY);
        is_chose_pos = false;

        animate_array(this.add_animation(num));
        animation = {};
    };

    this.add_animation = function (boxnum) {
        //特定のhistoryboxからanimation配列を作ってくれる
        var this_animations_array = [];
        //TODO もうちょっと綺麗にできるはず
        var $target = $(".history:eq(" + boxnum + ") p.targets");
        var targets_name = $target.text();
        animation['targets'] = targets_name;

        var targets_array = targets_name.split(",");
        for(var target in targets_array){
            //それぞれのターゲットに対して
            animation = {};
            animation['targets'] = targets_array[target];
            //名前以下の要素のpからクラス名(=パラメーター名)と要素の値を取ってくる
            for(var i = 1; i < $(".history:eq(" + boxnum + ") p").length; i++){
                var parameter = $(".history:eq(" + boxnum + ") p:eq("+i+")").attr('class');
                var parameter_value = $(".history:eq(" + boxnum + ") p."+parameter).text();
                animation[parameter] = parameter_value.toString();
            };
            //TODO ここをぶろっくの数とそのdurationに対応させてい感じにする
            animation['offset'] = "0";
            console.log(animation);
            this_animations_array.push(animation);
        }
        return this_animations_array;
    };
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

