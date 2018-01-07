<?php
//////////////////////////////////////////////SQLITEきたら書き換える！

session_start();
$pdo = new PDO("sqlite:data/works.sqlite");
$pdo->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_WARNING);
$st = $pdo->query("select * from sketch");
$data = $st->fetchAll();



//サニタイジング
function h($str) { return htmlspecialchars($str, ENT_QUOTES, "UTF-8"); }
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
	<a href="./about.php"><img src="images/about.png" width="210" height="80" alt="About" style="position: absolute; right: 344px; top: 50px;"></a>
	<a href="./login2.php"><img src="images/login.png" width="210" height="80" alt="Login" style="position: absolute; right: 93px; top: 50px;"></a>
  

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
    <li><a href="./workmake.php"><img src="images/workmaken.png" width="290" height="80" alt="作品をつくる"></a></li>
    <li><a href="./mypage.php"><img src="images/mypageok.png" width="290" height="80" alt="マイページ"></a></li>
  </ul>
<!--//////////////////////////////////////////////////////////////////////////////////////////常にある３つのページここまで-->


  
  
  
<!--内容///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////-->  
<!--//////////////////////////////////////////////////////////////////////////////////////////マイページ-->
<br>
    
<!--<h1>マイページ</h1>-->
<div id="contenttitle">  
      <img src="images/mypage.png" width="338" height="150" >
     </div>
  <br>
  <!--//////////////////////////////○○　さん-　ツイッターの＠マークをとってきて表示！-->
  <h2>○○さん</h2>
  
  
   <br>
   <br>
   <br>
  <!--////////////////////////////// <h1>作品/h1>-->
     <div id="contenttitle">  
      <img src="images/works.png" width="338" height="150" >
     </div>
      <!--？！サムネ画像達。　300*300くらいで　３ついったら下の段にしたい！-->  
     
     
<!--/////////////////////画像　idごとにリンクにしてみた。　あと画像をとってきてリンクにしたい-->

<div class="image33">
    <?php
  
 /*ここ追加したい！　自分のユーザidと一緒のやつ！
//$sketch["username"] これ、データベースの作品情報のユーザーネーム　　　　あと、ツイッター認証のusernameがどれか。
$st = $pdo->query("SELECT * FROM sketch where username=".$sketch["username"]." order by id desc");
$data2 = $st->fetchAll();
下を　data2にかえようy
*/
	
foreach($data as $sketch) {    
$temp=h($sketch["id"]);
	$workimage=h($sketch["samune"]);

	print '<div class="sketch_wrap">';
  print '<a href="workpage2.php?id='.$temp.'"><image src="thumbnail/'.$workimage.'" width="300" height="300" ></image></a>';
  print '<a href="workmake.php?id='.$temp.'" >編集</a>';
	print '</div>';
}
   ?>
</div>
  
  

  <!--//////////////////////////////自分の作品一覧ここまで-->
  
 
<!--//////////////////////////////////////////////////////////////////////////////////////////マイページここまで-->  
  

  
<!--内容/////////////////////////////////////////////////////////////-->


  </body>
  </html>