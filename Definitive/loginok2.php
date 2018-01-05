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
    <title>our app title</title>
</head>


<body>

<!--//////////////////////////////////////////////////////////////////////////////////////////ヘッダー-->
<header>

    <!--ログイン画面　真ん中寄せ-->
    <div id="loginhead">
        <img src="images/logingamen.png" width="358" height="150">
    </div>

</header>
<!--//////////////////////////////////////////////////////////////////////////////////////////ヘッダーここまで-->


<!--内容///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////-->
<!--//////////////////////////////////////////////////////////////////////////////////////////次どこいく？-->

<br>
<br>


<!--///////////////////////////////////作品見てみたい人　トップページへ-->
<div id="login">
    <img src="images/wantwatch.png" width="558" height="250">
    <br>
    <a href="./top.php">トップページ</a>
    <br>
    <br>
    <br>
    <br>
    <br>
    <br>
    <br>

    <!--///////////////////////////////////作品作りたい人　作品をつくる　へ-->

    <img src="images/wantmake.png" width="558" height="250">
    <br>
    <a href="./workmake.php">作品をつくる</a>
    <br>


</div>
<br>
<br>
<br>
<br>
<br>
<br>


<!--//////////////////////////////////////////////////////////////////////////////////////////次どこ行く？ここまで-->


<!--内容///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////-->


</body>
</html>
















