//キーフレームの管理
//メイン
//最終的にここもファイル分けたいなって思います

//おそらく後で変わるから変更しやすいようにメインのdomを変数で管理する
$input_paarmeters = $(".left input.parameter");

//アニメーションをさせる
var box2animation = function (boxnum) {
    //特定のhistoryboxからanimation配列を作ってくれる
    var this_animations_array = [];
    animation = {};

    $(".history:eq("+boxnum+") p").each(function (i, elem) {
        //それぞれの要素のpからクラス名(=パラメーター名)と要素の値を取ってくる
        var parameter = $(elem).attr('class');
        if(parameter == "history") return true;//continue
        var parameter_value = $(elem).text();
        //連想配列にパラメータを追加
        animation[parameter] = parameter_value.toString();
    });

    this_animations_array.push(animation);
    return this_animations_array;
};

var whole_animation = [];
var compile_animation = function () {
    //アニメーションの配列を作る
    animations = [];
    $(".history").each(function (i) {
        Array.prototype.push.apply(animations, box2animation(i));
    });
    whole_animation = animations;//吐き出しのための変数に格納
    animate_array(animations);
};


var progress = document.querySelector('.progress');
var timeline_palameter = {
    easing: 'linear',
    update: function (anim) {
        progress.value = anim.progress;
    }
};

var timeline = anime.timeline(timeline_palameter);
//任意のアニメーション配列に対してタイムライン作成
var animate_array = function (array) {
    //タイムラインリセット
    console.log(array);

    timeline = anime.timeline(timeline_palameter);
    for (var i = 0; i < array.length; i++) {
        timeline.add(array[i]);
    }

    //TODO ループかどうかを見る
    //TODO あと、操作の途中のたいみんぐで自然にリセットできるようにする
    //終わったら自走リセットを付けた
    timeline.add({
        complete: function(anim) {
            console.log(anim.completed);
            timeline.seek(0);
        }
    });
};