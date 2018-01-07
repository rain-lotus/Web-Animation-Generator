<?php
//////////////////////////////////////////////SQLITEきたら書き換える！
/*$pdo = new PDO("sqlite:works.sqlite");
$pdo->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_WARNING);
$st = $pdo->query("select * from sketch");
$data = $st->fetchAll();
*/
/////////////////////////////////////////////ここまで


//////////////////////////////////////////////////////////////////追加
session_start();

$pdo = new PDO("sqlite:data/myblog.sqlite");
$pdo->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_WARNING);
$st = $pdo->prepare("INSERT INTO comment(name, body,time) VALUES( ?, ?, ?)");
//$st->execute(array(コメント先の記事ID, 投稿者, 本文));
$st->execute(array($name, $body, $time));
//////////////////////////////////////////////////////////////////追加ここまで


////////////////////////////////////////////////////////////////コメント用変数
function h($str)
{
    return htmlspecialchars($str, ENT_QUOTES, "UTF-8");
}

//日本時間の日付時刻
date_default_timezone_set("Asia/Tokyo");
if (isset($_GET["name"]) && isset($_GET["body"])) {
    $name = $_GET["name"];
    $body = $_GET["body"];
    $time = date("Y-m-d H:i");

}


/////////////////////////////////////////////////////////////////////
//Twitterでログインしてなければログインページへ
  if (!isset($_SESSION['access_token'])){
    header("Location: Twitterlogin.php");
    exit;
    }
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
//Twitterの認証が済んでいるならログアウトが表示される
if(!isset($_SESSION['access_token'])){
	echo "' <a href=\"Twitterlogin.php\"><img src=\"images\login.png\" width=\"210\" height=\"80\"  alt=\"Login\" style=\"position: absolute; right: 93px; top: 50px;\"'></a>";
}else{
	echo "'<a href=\"twitterlogout.php\"><img src=\"images\logout.png\" width=\"210\" height=\"80\"  alt=\"Logout\" style=\"position: absolute; right: 93px; top: 50px;\"’></a>";
}

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
    <li><a href="./top.php"><img src="images/topok.png" width="290" height="80" alt="TOP"></a></li>
    <li><a href="./workmake.php"><img src="images/workmaken.png" width="290" height="80" alt="作品をつくる"></a></li>
    <li><a href="./mypage.php"><img src="images/mypagen.png" width="290" height="80" alt="マイページ"></a></li>
</ul>
<!--//////////////////////////////////////////////////////////////////////////////////////////常にある３つのページここまで-->


<!--内容///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////-->
<!--//////////////////////////////////////////////////////////////////////////////////////////作品-->
<br>
<!--<h1>Works</h1>-->
<div id="contenttitle">
    <img src="images/works.png" width="338" height="150">
</div>


<br>


<!--００さん　の作品　　　　　じぶんだったら　あなた　の作品！-->
<!--<h2>００さん　の　作品</h2>-->
<div id="contenttitle">
    <img src="images/whowork.png" width="398" height="200">
</div>


<!--？！サムネ画像　１こ 対応するやつをもってこれるようにしよう-->

<div id="workimage">
    <image class="image-grid" src="test.png" width="600" height="600"></image>
</div>


<?php /*        foreach ($data as $images) {
            ?>
            <image class="image-grid" src="test.png" width="200" height="200" ></image>
            <?php
        }
        */ ?>


<!--//////////////////////////////////////////////////////////////////////////////////////////作品ここまで-->


<br>
<br>
<!--/////////////////////////////////////////////////////////////////////////////////////////作品の詳細-->

<!-- <h1>作品の詳細</h1>-->
<div id="contenttitle">
    <img src="images/workinfo.png" width="338" height="120">
</div>

<p>だれがつくったの</p>

<p>コメント…</p>
<!--//////////////////////////////////////////////////////////////////////////////////////////作品の詳細ここまで-->


<br>
<br>
<br>
<br>
<br>
<!--////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////コメント-->


<!--////////////////////////////////////////////////////////////////////////////////////////////コメント投稿-->
<div id="comment">
    <form action="workpage2.php" method="get">

        <!--<h2>ハンドルネーム</h2>-->
        <div id="contenttitle">
            <img src="images/HN.png" width="238" height="100">
        </div>
        <br>
        <input type="text" name="name" 　value="ハンドルネーム" style=" font-size:30px">
        <!--/ <input type="text" style="position: absolute;  width:460px; height:50px; left: 41.0%; "  value="ハンドルネーム" name="name" >-->
        <br>
        <br>
        <br>
        <br>

        <!--<h2>内容<</h2>-->
        <div id="contenttitle">
            <img src="images/comment.png" width="238" height="100">
        </div>
        <br>
        <textarea name="body" value="コメント" style=" font-size:30px;  width:500px; height:400px;"></textarea>
        <!--  <input type="text" style="position: absolute; width:460px; height:300px;  left: 41.0%;"   value="内容" name="body"> -->
        <br>
        <br>
        <br>
        <br>
        <br>


        <!--ボタン-->
        <!--<div id="toukoubut">      </div>-->
        <div id="toukoubutton">
            <!--ボタンと画像の大きさを合わせる！-->
            <button type="submit" style="width:160px; height:50px;"><img src="images/commentbut.png" width="160"
                                                                         height="50"></button>
            <!--<input type="button"  value="ログイン"  style="width:160px; height:50px;"> -->
        </div>
</div>


<!--/////////////////////////////////////////////////////////////////////////////////////////コメント投稿ここまで-->


<br>
<br>
<!--  <h1>コメント一覧</h1>-->
<div id="contenttitle">
    <img src="images/commentlist.png" width="338" height="120">
</div>


<!--//////////////////////////////////////////////////////////////////////////コメント表示-->
<?php //$st = $pdo->query("commentテーブルのarticle_id属性がPHPの変数$article["id"]と一致する行を探し、新しい順に並べる");
$st = $pdo->query("SELECT * FROM comment");
$data2 = $st->fetchAll();

////////////////////////////////////////コメント
foreach ($data2 as $comment) {
//>>>コメント内容<<<
//名前　内容
    print '<div class="comment">';
    print '<h3>' . h($comment["name"]) . '</h3>';
    print '<p>' . h($comment["body"]) . '</p>';
    print '</div>';
}
?>

<!--//////////////////////////////////////////////////////////////////////////コメント表示ここまで-->


<!--//////////////////////////////////////////////////////////////////////////////////////////////////////////////コメントここまで-->


<!--内容ここまで///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////-->


</body>
</html>
