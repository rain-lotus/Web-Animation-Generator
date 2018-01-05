<?php
//////////////////////////////////////////////SQLITEきたら書き換える！
$pdo = new PDO("sqlite:works.sqlite");
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
 
     <!--サイト説明 　左側に。　文考える →画像にする-->
     <div id="citecap"> 
     <img src="images/citecap.png" width="358" height="250" style="position: absolute; left: 80px;">
     </div>
   
     <!--△ロゴ 真ん中になってる？　本物決めて、大きさ調整-->
     <div id="title">
      <img src="images/rogo.png" width="338" height="250" style="position: relative; left: 43.5%; top: 0px; ">
     </div>
      
 
         <!--★画像ボタンか　画像リンクリンクがいい気がする。　　-->
<!--   <div id="hedbut">
      <input type="button"  style="position: absolute; right: 344px; top: 50px; width:210px; height:80px;" value="about"> 
      <input type="button" style="position: absolute; right: 93px; top: 50px;  width:210px; height:80px;" value="login"> 
     ★検索　出来たら検索マークを貼りたい！
      <input type="text" style="position: absolute; right: 93px; top: 167px;  width:460px; height:50px;"  value="search"> 
   </div>   
  -->
   <a href="./about.php"><img src="images/about.png" width="210" height="80" alt="About" style="position: absolute; right: 344px; top: 50px;">
     <a href="./login2.php"><img src="images/login.png" width="210" height="80" alt="Login" style="position: absolute; right: 93px; top: 50px;">
  
      <input type="text" style="position: absolute; right: 93px; top: 167px;  width:460px; height:50px;"  value="search"> 
  
  
  
  
  
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
      <img src="images/about-t.png" width="338" height="150" >
     </div>
  <br>
  <br>
     
<!--/////////////////////説明など-->
     <p>説明とか！</p>
  
     
     
     
     
     
     <!--/////////////////////////////////////////////////////////////////////////////////////////アバウトここまで-->
     

     
     <!--内容///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////-->
  
  
</body>
</html>