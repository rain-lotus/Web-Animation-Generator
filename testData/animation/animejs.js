var target = [];
var translatex = [];
var translatey = [];

//
// function add_history_box() {
//     $("#history").append("<div class='history'>aaaa</div>");
// }
//
// $("#but1").click(function () {
//     target.push("#elem3");
//     translatex.push(500);
// });
//
// $("#add").click(function () {
//     var tar = $("#target").val();
//     if (tar == "") tar = "elem";
//     target.push("#" + tar);
//     $("#target").val("");
//
//     // var trax = $("#translatex").val();
//     // if (trax == "") trax = "250";
//     // translatex.push(trax);
//     // $("#translatex").val("");
//
//     push_val2array(translatex, "#translatex", "250");
//
//     var tary = $("#translatey").val();
//     if (tary == "") tary = "250";
//     translatey.push(tary);
//     $("#translatey").val("");
//     $(".pala").html(target + "<br>" + translatex + "<br>" + translatey);
// });
//
// function push_val2array(array, id, default_value) {
//     var temp = $(id).val();
//     if (temp == "") temp = array.length == 0 ? default_value : array[array.length - 1];
//     array.push(temp);
//     $(id).val("");
// }
//

$("#run").click(function () {
    console.log("weth");
    var timeline = anime.timeline();
    var name = 'targets';
    var animation_array = {};
    animation_array[name] = "#translate, #rotate";
    animation_array['translateX'] = "250";
    animation_array['easing'] = 'linear';
    console.log(animation_array);
    timeline.add(animation_array);

    // {
    //     targets: "#elem",
    //         translateX: "250",
    //     easing: "linear"
    // }

    // timeline.add({
    //     targets: "#elem",
    //     translateX: {
    //         value: '+=150',
    //         duration: 1800
    //     },
    //     width: {
    //         value: '-=10',
    //         duration: 1800,
    //         easing: 'easeInOutSine'
    //     },
    //     height: {
    //         value: '+=40',
    //         duration: 1800,
    //         easing: 'easeInOutSine'
    //     },
    //     direction: 'alternate'
    // });
});