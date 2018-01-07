<?php
//////////////////////////////////////////////SQLITEきたら書き換える！
$pdo = new PDO("sqlite:data/works.sqlite");
$pdo->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_WARNING);
$st = $pdo->query("select * from sketch");
$data = $st->fetchAll();
/////////////////////////////////////////////ここまで
?>

<!doctype html>
<html lang="ja">
<head>
    <meta charset="UTF-8">
    <meta name="viewport"
          content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <!--スタイルシート-->
    <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.2.1/jquery.min.js"></script>
    <link rel="stylesheet" href="css/style.css" media="all">
    <link rel="stylesheet" href="css/style_editor.css" media="all">
    <link rel="stylesheet" href="css/elements.css" media="all">
    <!--タイトル-->
    <title>our app title</title>
</head>


<body>
<!--//////////////////////////////////////////////////////////////////////////////////////////ヘッダー-->
<header>
    <!--サイト説明 　左側に。　文考える →画像にする-->
    <div id="citecap">
        <img src="images/citecap.png" width="358" height="250" style="position: absolute; left: 80px;">
    </div>

    <!--△ロゴ 真ん中になってる？　本物決めて、大きさ調整-->
    <div id="title">
        <img src="images/rogo.png" width="338" height="250" style="position: relative; left: 43.5%; top: 0px; ">
    </div>


    <!--//////////////////////////////////////////////////////////////////////////////////////////about login検索フォーム 　はりつけよう-->
    <a href="./about.php"><img src="images/about.png" width="210" height="80" alt="About"
                               style="position: absolute; right: 344px; top: 50px;">
        <?php

        header("Content-type: text/html; charset=utf-8");

        if (!isset($_SESSION['access_token'])) {//Twitterの認証が済んでいるなら
            echo "<a href=\"Twitterlogin.php\"><img src=\"images\login.png\" width=\"210\" height=\"80\"  alt=\"Login\" style=\"position: absolute; right: 93px; top: 50px;\"</a>";
        } else {
            echo "<a href=\"top.php\"><img src=\"images\logout.png\" width=\"210\" height=\"80\"  alt=\"Logout\" style=\"position: absolute; right: 93px; top: 50px;\"</a>";
        }

        ?>

        <div id="search">

            <form id="form02" action="#">
                <input id="input02" type="text" placeholder="Search" style="font-size:40px;"><!--
    /input間で改行したい場合はコメントアウト必須/
    --><input id="submit02" type="submit" value=””>
            </form>
        </div>
        <!--//////////////////////////////////////////////////////////////////////////////////////////about login 検索フォームここまで -->

</header>
<!--//////////////////////////////////////////////////////////////////////////////////////////ヘッダーここまで-->


<!--//////////////////////////////////////////////////////////////////////////////////////////常にある３つのページ-->
<ul class="topmenu">
    <!--△画像をはりつけた。なぜか縦がでかい（変えても）。サイズ調整問題　あとは各ページで開いてるときにいろ変える。透過画像だからCSS変えればおｋ…？-->
    <li><a href="./top.php"><img src="images/topn.png" width="290" height="80" alt="TOP"></a></li>
    <li><a href="./workmake.php"><img src="images/workmakeok.png" width="290" height="80" alt="作品をつくる"></a></li>
    <li><a href="./mypage.php"><img src="images/mypagen.png" width="290" height="80" alt="マイページ"></a></li>
</ul>
<!--//////////////////////////////////////////////////////////////////////////////////////////常にある３つのページここまで-->


<!--内容///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////-->
<br>
<!--//////////////////////////////////////////////////////////////////////////////////////////作品の編集-->
<h1>作品編集　タイトルは迷い</h1>
<div id="editor">
    <div id="editor_wrapper">
        <div class="left editor">
            <div class="elements">
                <div class="elem_wrap">
                    <div class="add_element" id="rect"></div>
                </div>
                <div class="elem_wrap">
                    <div class="add_element" id="ellipse"></div>
                </div>
            </div>

            <div class="para_wrap">
                <table class="parameter">
                    <tr>
                        <th class="parameter_name">targets</th>
                        <th><input type="text" class="parameter" id="targets" readonly="readonly"></th>
                    </tr>
                    <tr>
                        <th class="parameter_name">translateX</th>
                        <th><input type="text" class="parameter" id="translateX"></th>
                    </tr>
                    <tr>
                        <th class="parameter_name">translateY</th>
                        <th><input type="text" class="parameter" id="translateY"></th>
                    </tr>
                    <tr>
                        <th class="parameter_name">rotate</th>
                        <th><input type="text" class="parameter" id="rotate"></th>
                    </tr>
                    <tr>
                        <th class="parameter_name">opacity</th>
                        <th><input type="text" class="parameter" id="opacity"></th>
                    </tr>
                    <tr>
                        <th class="parameter_name">scale</th>
                        <th><input type="text" class="parameter" id="scale"></th>
                    </tr>
                    <tr>
                        <th class="parameter_name">duration</th>
                        <th><input type="text" class="parameter" id="duration"></th>
                    </tr>
                    <tr>
                        <th class="parameter_name">offset</th>
                        <th><input type="text" class="parameter" id="offset"></th>
                    </tr>
                </table>
                <input type="button" value="削除" class="remove">
            </div>
        </div>

        <div class="center editor">
            <div id="canvas"></div>
        </div>

        <div class="right editor">

            <form action="post.php" method="get">
                <textarea name="html" placeholder="html" id="get_html"></textarea>
                <textarea type="text" name="animation" placeholder="animation" id="get_animation"></textarea>
                <input type="submit" value="保存">

            </form>

        </div>
    </div>

    <div class="edit">
        <div class="line player align-items">
            <button class="play">Play</button>
            <button class="pause">Pause</button>
            <button class="restart">Restart</button>
            <button class="reset">reset</button>
        </div>
        <div id="timeline">
            <input class="progress" step="2" type="range" min="0" max="100" value="0">
            <div id="history">

            </div>
        </div>

        <!--        隠す要素-->
        <div id="elements"></div>
    </div>
</div>

<footer></footer>
<!--作品の編集ここまで-->

<!--内容ここまで-->
<script src="https://cdnjs.cloudflare.com/ajax/libs/animejs/2.2.0/anime.min.js"></script>

<script src="js/element.js"></script>
<script src="js/keyframe.js"></script>
<script src="js/animation.js"></script>
<script src="js/dragdrop.js"></script>
<script src="js/editanime.js"></script>
</body>
</html>