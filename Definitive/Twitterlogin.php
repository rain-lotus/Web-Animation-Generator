<?php
session_start();
 
define("Consumer_Key", "Pm2y1nDpgmtTrKl502YuH8SxE");
define("Consumer_Secret", "a6maELzlapKQucPGxQhL5r1N94Qy4tkP4EeatsyNfE0KFJXoN8");
 
//Callback URL(callback.phpの場所に合わせてURLを変える)
define('Callback','http://localhost:8080/Definitive/callback.php');
 
//ライブラリを読み込む
require "twitteroauth-master/autoload.php";
use Abraham\TwitterOAuth\TwitterOAuth;
 
//TwitterOAuthのインスタンスを生成し、Twitterからリクエストトークンを取得する
$connection = new TwitterOAuth(Consumer_Key, Consumer_Secret);
$request_token = $connection->oauth("oauth/request_token", array("oauth_callback" => Callback));
 
//リクエストトークンはcallback.phpでも利用するのでセッションに保存する
$_SESSION['oauth_token'] = $request_token['oauth_token'];
$_SESSION['oauth_token_secret'] = $request_token['oauth_token_secret'];
 
// Twitterの認証画面へリダイレクト
$url = $connection->url("oauth/authorize", array("oauth_token" => $request_token['oauth_token']));
header('Location: ' . $url);
?>