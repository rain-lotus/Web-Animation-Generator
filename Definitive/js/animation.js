////////////////////////
//アニメーションをさせる
///////////////////////

var box2animation = function (boxnum) {
    //特定のhistoryboxからanimation配列を作ってくれる
    var this_animations_array = [];
    animation = {};
    $(".history:eq(" + boxnum + ") p").each(function (i, elem) {
        //それぞれの要素のpからクラス名(=パラメーター名)と要素の値を取ってくる
        var parameter = $(elem).attr('class');
        if (parameter == "history") return true;//continue
        var parameter_value = $(elem).text();

        //数値だったら数値に変更（大事）
        if (!isNaN(parameter_value)) parameter_value = Number(parameter_value);
        //連想配列にパラメータを追加
        animation[parameter] = parameter_value;
    });
    this_animations_array.push(animation);
    return this_animations_array;
};

var whole_animation = [];
//全体を統合したアニメーションの配列をwhole_animationに代入する
var compile_animation = function () {
    //アニメーションの配列を作る
    animations = [];
    $(".history").each(function (i) {
        Array.prototype.push.apply(animations, box2animation(i));
    });
    whole_animation = animations;//吐き出しのための変数に格納
};

var progress = document.querySelector('.progress');
var timeline_palameter = {
    easing: 'linear',
    update: function (anim) {
        progress.value = anim.progress;
    },
    autoplay: false
};

var timeline = anime.timeline(timeline_palameter);
var animation_duration = 0;

//任意のアニメーション配列に対してタイムライン作成
var animate_array = function (array) {

    //タイムラインリセット
    timeline = anime.timeline(timeline_palameter);
    for (var i = 0; i < array.length; i++) {
        timeline.add(array[i]);
    }
    animation_duration = timeline.duration;
    timeline.add({
        //ここ通すとdurationがおかしくなるらしい
        complete: function (anim) {
            console.log(anim.completed);
            timeline.seek(0);
        }
    });
};
