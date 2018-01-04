var progress = document.querySelector('.progress');
var timeline_palameter = {
    easing: 'linear',
    update: function (anim) {
        progress.value = anim.progress;
    }
};
var timeline = anime.timeline(timeline_palameter);
var animation = {};//連想配列
var animations = [];//連想配列の配列
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

//document.on_click
var select_element = function () {
    if (!is_moving) {
        if ($(this).hasClass("selected")) $(this).removeClass("selected");
        else $(this).addClass("selected");
    } else {
        is_moving = false;
    }
};

//妥協版
var add_history_block = function(){
    //左の画面から持ってくる
    var history_box = "<div class='history'></div>";
    $("#history").append(history_box);

    $(".left input.parameter").each(function (i,elem) {
        var para = "<p class='"+ $(elem).attr("id") +"'>" + $(elem).val() + "</p>";
        $(".history").append(para);
    });

};

//旧バージョン
var make_history_block = function () {
    //その時選択されているelementに対して一個の塊を作る
    //TODO 何も選択してないのに出てくるのはだめだと思う
    var name = "";
    $(".selected").each(function (i, elem) {
        name += "#" + $(elem).attr("id");
        if (i != $(".selected").length - 1) name += ",";
    });
    var history_box = "<div class='history'><p class='targets'>" + name + "</p></div>"
    $("#history").append(history_box);
    is_chose_pos = true;
};

//指定された番号のhistorybox(アニメーションの順番)のoffset(開始するタイミング？)を計算するよ
var this_offset = function (num) {
    if(num == 0){
        return 0;
    }else{
        num = num-1
        var past_offet = $(".history:eq("+num+") p.offset").text();
        return parseInt(past_offet) + 1800;
    }
};

//仮にtranslateのfunctionを入れている
//今編集しようとしているブロックに対して行き先指定（これでいいのかもわからない）
var translation = function (e, num) {
    //多分マウス位置
    posx = e.offsetX;
    posy = e.offsetY;
    //ここの必ず最後を取ってくるやつも後で変えないと
    //何をどういう感じに足すかだけできればこの方法でどんなパラメーターも追加できるはず
    num = $(".history").length - 1;

    var positionX = "<p class='translateX'>" + posx + "</p>";
    var positionY = "<p class='translateY'>" + posy + "</p>";
    var duration = "<p class='duration'>1800</p>";
    var offset = "<p class='offset'>"+ this_offset(num) +"</p>";

    $(".history:eq(" + num + ")").append(positionX);
    $(".history:eq(" + num + ")").append(positionY);
    $(".history:eq(" + num + ")").append(duration);
    $(".history:eq(" + num + ")").append(offset);

    is_chose_pos = false;
    animate_array(this.add_animation(num));
    animation = {};
};


var modify_historybox = function () {

};

var add_animation = function (boxnum) {
    //特定のhistoryboxからanimation配列を作ってくれる
    var this_animations_array = [];
    //TODO もうちょっと綺麗にできるはず
    var $target = $(".history:eq(" + boxnum + ") p.targets");
    var targets_name = $target.text();
    var targets_array = targets_name.split(",");

    for (var target in targets_array) {
        //それぞれのターゲットに対して
        animation = {};
        animation['targets'] = targets_array[target];
        //名前以下の要素のpからクラス名(=パラメーター名)と要素の値を取ってくる
        for (var i = 1; i < $(".history:eq(" + boxnum + ") p").length; i++) {
            var parameter = $(".history:eq(" + boxnum + ") p:eq(" + i + ")").attr('class');
            var parameter_value = $(".history:eq(" + boxnum + ") p." + parameter).text();
            animation[parameter] = parameter_value.toString();
        }
        this_animations_array.push(animation);
    }
    return this_animations_array;
};


//divをタイムライン用の配列に代入
var compile_animation = function () {
    animations = [];
    $(".history").each(function (i) {
        Array.prototype.push.apply(animations, add_animation(i));
    });
    console.log(animations);
    animate_array(animations);
};

//任意のアニメーション配列に対してタイムライン作成
var animate_array = function (array) {
    //タイムラインリセット
    timeline = anime.timeline(timeline_palameter);
    for (var i = 0; i < array.length; i++) {
        timeline.add(array[i]);
    }
    timeline.seek(0);
};


