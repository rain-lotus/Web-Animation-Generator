<?php
//SESSION開始
session_start();
//インクルード
require_once('./twitteroauth.php');
//Consumer keyの値をTwitterAPI開発者ページでご確認下さい。
$sConsumerKey = "Pm2y1nDpgmtTrKl502YuH8SxE";
//Consumer secretの値を格納
$sConsumerSecret = "	a6maELzlapKQucPGxQhL5r1N94Qy4tkP4EeatsyNfE0KFJXoN8
";
//callbakurl
$sCallBackUrl = 'https://rain-lotus.github.io/CMP-B/testpage/twitter/callback.php';
?>

    <!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
    <html xmlns="http://www.w3.org/1999/xhtml" xml:lang="ja" lang="ja">

    <head>
        <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
        <meta http-equiv="Content-Type" content="text/html;">
        <title>Twitter OAuth Login</title>
    </head>

    <body>

        <?php
//セッションのアクセストークンのチェック
if((isset($_SESSION['oauthToken']) && $_SESSION['oauthToken'] !== NULL) && (isset($_SESSION['oauthTokenSecret']) && $_SESSION['oauthTokenSecret'] !== NULL)){

	//値の格納
	$sUserId = 			$_SESSION['userId'];
	$sScreenName = 		$_SESSION['screenName'];

	//表示
	?>
            ログインに成功しました。<br/> こんにちは！
            <?php echo $sScreenName; ?> さん<br/> ユーザーID
            <?php echo $sUserId; ?><br/>
            <br/>
            <a href="./logout.php">ログアウトする</a></p>

            <?php
}else{

	//OAuthオブジェクト生成
	$oOauth = new TwitterOAuth($sConsumerKey,$sConsumerSecret);

	//callback url を指定して request tokenを取得
	$oOauthToken = $oOauth->getRequestToken($sCallBackUrl);

	//セッション格納
	$_SESSION['requestToken'] = 			$sToken = $oOauthToken['oauth_token'];
	$_SESSION['requestTokenSecret'] = 		$oOauthToken['oauth_token_secret'];

	//認証URLの引数 falseの場合はtwitter側で認証確認表示
	if(isset($_GET['authorizeBoolean']) && $_GET['authorizeBoolean'] != '')
	$bAuthorizeBoolean = false;
	else
	$bAuthorizeBoolean = true;

	//Authorize url を取得
	$sUrl = $oOauth->getAuthorizeURL($sToken, $bAuthorizeBoolean);
	?>
                <a href="<?php echo $sUrl; ?>">ログイン</a>

                <?php } ?>

    </body>

    </html>
