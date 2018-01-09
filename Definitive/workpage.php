<?php
//////////////////////////////////////////////SQLITEきたら書き換える！

//日本時間の日付時刻
date_default_timezone_set("Asia/Tokyo");

if (isset($_GET["id"])) {
    $ID = $_GET["id"];
    $pdo = new PDO("sqlite:data/works.sqlite");
    $pdo->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_WARNING);
    $st = $pdo->query("select * from sketch where id = '$ID'");
    $data = $st->fetchAll();
}

if (isset($_GET["username"]) && isset($_GET["comment"])) {
    $username = $_GET["username"];
    $comment = $_GET["comment"];
    $time = date("Y-m-d H:i");
    // ＊＊＊??????????プリペアドステートメントを使い、テーブルcommentに$title, $article_id, $name,$bodyを登録する処理をここに書く＊＊＊
    $pdo = new PDO("sqlite:data/works.sqlite");
    $pdo->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_WARNING);
    $st = $pdo->prepare("INSERT INTO comment(username, comment,date, sketchid) VALUES( ?, ?, ?, ?)");
    $st->execute(array($username, $comment, $time, $ID));
}

//サニタイジング
function h($str)
{
    return htmlspecialchars($str, ENT_QUOTES, "UTF-8");
}

////////////////こっち作品サムネ用
session_start();
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
<header style="text-align: center">

    <!--サイト説明 　左側に。　文考える →画像にする-->
    <div id="citecap">
        <img src="images/citecap.png" width="358" height="250" style="position: absolute; left: 80px;">
    </div>

    <!--△ロゴ 真ん中になってる？　本物決めて、大きさ調整-->
    <div id="title">
        <img src="images/rogo.png" width="338" height="250" >
    </div>

    <!--//////////////////////////////////////////////////////////////////////////////////////////about login検索フォーム 　はりつけよう-->
    <a href="./about.php"><img src="images/about.png" width="210" height="80" alt="About"
                               style="position: absolute; right: 344px; top: 50px;">
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
            <form id="form02" action="top.php" method="get">
                <input id="input02" type="text" placeholder="Search" name="search" style="font-size:40px;"><!--
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
    <li><a href="./top.php"><img src="images/topok.png" width="290" height="80" alt="TOP"></a></li>
    <li><a href="./workmake.php"><img src="images/workmaken.png" width="290" height="80" alt="作品をつくる"></a></li>
    <li><a href="./mypage.php"><img src="images/mypagen.png" width="290" height="80" alt="マイページ"></a></li>
</ul>
<!--常にある３つのページここまで-->


<!--内容-->
<!--作品-->

<br>
<div id="contenttitle">
    <img src="images/works.png" width="338" height="150">
</div>
<br>

<!--００さん　の作品　　　　　じぶんだったら　あなた　の作品！-->
<!-- 作品の詳細 -->
<div class="sketck_info">
    <!--    <div id="contenttitle">-->
    <!--        <img src="images/whowork.png" width="398" height="200">-->
    <!--    </div>-->

    <?php
    foreach ($data as $sketch) {
        ?>
        <div id="contenttitle">
            <img src="images/workinfo.png" width="338" height="120">
        </div>
        <p class="strong"><?php print h($sketch["title"]) ?></p>
        <p class="description">作者：<?php print h($sketch["username"]) ?></p>
        <p class="description">投稿日：<?php print h($sketch["date"]) ?></p>
        <p><?php print h($sketch["caption"]) ?></p>
        <?php
    }
    ?>


</div>
<!--作品の詳細ここまで-->


<div id="editor">
    <div id="editor_wrapper">
        <div class="left editor">
        </div>

        <div class="center editor">
            <div id="canvas">
                <?php
                foreach ($data as $sketch) {
                    print $sketch["html"];
                }
                ?>
            </div>
        </div>

        <div class="right editor">
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
                <?php
                foreach ($data as $sketch) {
                    print $sketch["animation"];
                }
                ?>
            </div>
        </div>
        <div id="elements"></div>
    </div>
</div>
<!--作品ここまで-->

<!--コメント-->

<!--コメント投稿-->
<div id="comment">
    <form action="workpage.php?id=<?php echo $ID ?>" method="get">
        <input type="text" name="id" style="display: none;" value="<?php echo $ID ?>">
        <!--<h2>内容<</h2>-->
        <div id="contenttitle">
            <img src="images/comment.png" width="238" height="100">
        </div>

        <?php
        if(isset($_SESSION['screen_name'])){
            $name = $_SESSION['screen_name'];
        }else{
            $name = "ゲスト";
        }
        ?>

        <input type="text" name="username" style="display: none;" value="<?php print $name ?>">
        <textarea name="comment" value="コメント" style=" font-size:30px;  width:500px; height:200px;"></textarea>

        <div id="toukoubutton">
            <button type="submit" style="width:160px; height:50px;"><img src="images/commentbut.png" width="160" height="50"></button>
        </div>
</div>

<!--コメント投稿ここまで-->

<!--  <h1>コメント一覧</h1>-->
<div id="contenttitle">
    <img src="images/commentlist.png" width="338" height="120">
</div>


<!--//////////////////////////////////////////////////////////////////////////コメント表示-->
<div class="comments">
    <?php
    $st = $pdo->query("SELECT * FROM comment where sketchid = '$ID'");
    $data2 = $st->fetchAll();
    ////////////////////////////////////////コメント
    foreach ($data2 as $comment) {
        ?>
        <!--コメント内容-->
        <div class="comment">
            <h3 class="username"> @<?php print h($comment["username"]) ?> </h3>
            <p> <?php print h($comment["comment"]) ?> </p>
            <?php print h($comment["date"]) ?>
        </div>
        <?php
    }
    ?>
</div>

<footer></footer>

<!--//////////////////////////////////////////////////////////////////////////コメント表示ここまで-->


<!--//////////////////////////////////////////////////////////////////////////////////////////////////////////////コメントここまで-->


<!--内容ここまで///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////-->

<script src="https://cdnjs.cloudflare.com/ajax/libs/animejs/2.2.0/anime.min.js"></script>
<script src="js/element.js"></script>
<script src="js/keyframe.js"></script>
<script src="js/animation.js"></script>
<script src="js/dragdrop.js"></script>
<script src="js/browsanime.js"></script>
</body>
</html>