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
    <link rel="stylesheet" href="css/style.css" media="all">
    <!--タイトル-->
    <title>Web Animation Generator</title>
</head>


<body>

<!--ヘッダー-->
<header style="text-align: center">

    <!--サイト説明 　左側に。　文考える →画像にする-->
    <div id="citecap">
        <img src="images/citecap.png" width="358" height="250" style="position: absolute; left: 80px;">
    </div>

    <!--△ロゴ 真ん中になってる？　本物決めて、大きさ調整-->
    <div id="title">
        <img src="images/rogo.png" width="338" height="250" >
    </div>


    <!--★画像ボタンか　画像リンクリンクがいい気がする。　　-->
    <a href="./about.php"><img src="images/about.png" width="210" height="80" alt="About" style="position: absolute; right: 344px; top: 50px;"></a>
    <?php
    header("Content-type: text/html; charset=utf-8");

    if (!isset($_SESSION['access_token'])) {//Twitterの認証が済んでいるなら
        echo "<a href=\"Twitterlogin.php\"><img src=\"images\login.png\" width=\"210\" height=\"80\"  alt=\"Login\" style=\"position: absolute; right: 93px; top: 50px;\"></a>";
    } else {
        echo "<a href=\"Twitterlogout.php\"><img src=\"images\logout.png\" width=\"210\" height=\"80\"  alt=\"Logout\" style=\"position: absolute; right: 93px; top: 50px;\">";
        echo "</a>";
    }
    ?>
    <div id="search">
        <form id="form02" action="#">
            <input id="input02" type="text" placeholder="Search" style="font-size:40px;"><!--
    /input間で改行したい場合はコメントアウト必須/
    --><input id="submit02" type="submit" value=””>
        </form>
    </div>

</header>
<!--//////////////////////////////////////////////////////////////////////////////////////////ヘッダーここまで-->


<!--//////////////////////////////////////////////////////////////////////////////////////////常にある３つのページ-->
<ul class="topmenu">
    <!--△画像をはりつけた。なぜか縦がでかい（変えても）。サイズ調整問題　あとは各ページで開いてるときにいろ変える。透過画像だからCSS変えればおｋ…？-->
    <li><a href="./top.php"><img src="images/topn.png" width="290" height="80" alt="TOP"></a></li>
    <li><a href="./workmake.php"><img src="images/workmaken.png" width="290" height="80" alt="作品をつくる"></a></li>
    <li><a href="./mypage.php"><img src="images/mypagen.png" width="290" height="80" alt="マイページ"></a></li>
</ul>
<!--//////////////////////////////////////////////////////////////////////////////////////////常にある３つのページここまで-->


<!--内容///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////-->


<!--/////////////////////////////////////////////////////////////////////////////////////////アバウト-->
<br>
<br>
<!--<h1>About</h1>-->
<div id="contenttitle">
    <img src="images/about-t.png" width="338" height="150">
</div>
<br>
<br>

<!--/////////////////////説明など-->
<p>WAG(ウェブアニメーションジェネレーター)は</p>
<p>Web上で簡単なアニメーションを作ってその場で共有できる</p>
<p>クリエイティブなソーシャルネットワークサービスです！</p>
<p>ツイッター認証でログインしたあと，</p>
<p>「作品を作る」からアニメーションを作ってみてください</p>


<!--/////////////////////////////////////////////////////////////////////////////////////////アバウトここまで-->


<!--内容///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////-->


</body>
</html>