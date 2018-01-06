//コメントアウトを外すと常に.canvasの中身がhtmlソースになって吐き出される

(function () {
        //作っったhtmlソースの取得
    $(document).click(function () {

        $("#get_html").val($("#canvas").html());


    });

    $(".play").click(function () {
        var anime = "";
        var names = "";

        console.log(whole_animation);

        for(elem in whole_animation){
            console.log(elem , whole_animation[elem]);
            for(para in whole_animation[elem]){
                var names = "";
                console.log(whole_animation[elem][para]);
                anime+=whole_animation[elem][para] + ",";
                names+=para + ",";
            }
            //TODOここ
            anime+=".";
        }

        console.log(anime);
        $("#get_animation").val(anime);
    });
        // //それの再現のテスト
        // $(".get_html").append($("#canvas").html());

})()