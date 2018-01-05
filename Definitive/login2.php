

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
 
     <!--ログイン画面　真ん中寄せ-->
     <div id="loginhead">
     <img src="images/logingamen.png" width="358" height="150">
  </div>
   
</header>
<!--//////////////////////////////////////////////////////////////////////////////////////////ヘッダーここまで-->

  
  
  
  
<!--内容///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////-->  
<!--//////////////////////////////////////////////////////////////////////////////////////////ログイン    username password-->
  <br>
  <br>
  <br>
  <!--///////////////////////////////////ログイン説明-->
       <div id="logincap"> 
     <img src="images/citecap.png" width="358" height="250">
     </div>
  <br>
  <br>
  <br>
  <br>
  <br>
  <br>
  
  
  
  <div id="login">
  <!--/////////////////////////ユーザーネーム-->
   <img src="images/username.png" width="258" height="90" >
    <br>
  <input type="text" style="width:460px; height:50px; font-size:30px;"  value="ユーザーネーム" > 
  <br>
  <br>
  <br>
  <br>
  <!--/////////////////////////パスワード-->
  <img src="images/password.png" width="258" height="90" >
    <br>
    <input type="text" style="width:460px; height:50px; font-size:30px"  value="パスワード"> 
    <br>
    <br>
    <br>
    <br>
    <br>
    <br>
    <br>
    <br>
    <br>
    <!--/////////////////////////ログインボタン-->
      <div id="loginbutton">
        
              <!--ボタンと画像の大きさを合わせる！-->
        <button type="submit"  style="width:160px; height:50px;"><img src="images/loginbut.png" width="160" height="50"></button>
       <!--<input type="button"  value="ログイン"  style="width:160px; height:50px;"> -->
    </div>
    
  </div>
<!--//////////////////////////////////////////////////////////////////////////////////////////ログインここまで-->  
    <br>
    
    <!--/////////////////////////トップに戻る　リンク　文字大きめにした　右にした-->
  <div id="toplink">
  <a href="./top.php">トップに戻る</a>
  </div>
  <!--ツイッターの画像　はる？？？？？？？-->
  <img src="images/logintwitterlogo.png" width="200" height="200" style="position: relative; left: 20px; buttom: 0px; " align="left" >


  
  
  
  
<!--内容///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////-->
  
  
</body>
</html>