//ボタンとかシークバーとかの実装
$(".play").click(function () {
    timeline.play();
    compile_animation();
});
$(".pause").click(function () {
    timeline.pause();
});
$(".restart").click(function () {
    timeline.restart();
});
$(".reset").click(function () {
    timeline.seek(0);
});
$(".progress").on("input",function () {
    timeline.seek(timeline.duration * ($(this).val() / 100));
});