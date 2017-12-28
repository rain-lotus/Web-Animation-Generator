var target = [];
var translatex = [];
var translatey = [];

$("#but1").click(function () {
    target.push("#elem3");
    translatex.push(500);
});

$("#add").click(function () {
    var tar = $("#target").val();
    if (tar == "") tar = "elem";
    target.push("#" + tar);
    $("#target").val("");

    // var trax = $("#translatex").val();
    // if (trax == "") trax = "250";
    // translatex.push(trax);
    // $("#translatex").val("");

    push_val2array(translatex, "#translatex","250");
    var tary = $("#translatey").val();
    if (tary == "") tary = "250";
    translatey.push(tary);
    $("#translatey").val("");
    $(".pala").html(target + "<br>" + translatex + "<br>" + translatey);
});

function push_val2array(array, id, default_value) {
    var temp = $(id).val();
    if (temp == "") temp = array.length == 0 ? default_value : array[array.length - 1];
    array.push(temp);
    $(id).val("");
}

$(".button").click(function () {
    console.log(target);
    console.log(translatex);
    var timeline = anime.timeline();
    for (var i = 0; i < translatex.length; i++) {
        timeline.add({
            targets: target[i],
            translateX: translatex[i],
            translateY: translatey[i],
            easing: 'linear'
        });
    }
});