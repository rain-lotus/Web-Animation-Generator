(function () {
    $(".add_element").click(function () {
        //作っったhtmlソースの取得
        $(".get_html").text($("#canvas").html());
        //それの再現のテスト
        $(".get_html").append($("#canvas").html());
    });
})()