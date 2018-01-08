<?php
//日本時間の日付時刻
date_default_timezone_set("Asia/Tokyo");

session_start();
if (isset($_GET["html"]) && isset($_GET["animation"]) && isset($_GET["title"]) && isset($_GET["caption"])){
    $html = $_GET["html"];
    $animation = $_GET["animation"];
    $title = $_GET["title"];
    $caption = $_GET["caption"];
    $username = $_SESSION["screen_name"];
    $time = date("Y-m-d H:i");

    $pdo = new PDO("sqlite:data/works.sqlite");
    $pdo->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_WARNING);

    if (isset($_GET["id"])){
        $id = $_GET["id"];

        $st = $pdo->prepare("update sketch set username = '$username' where id = '$id'");
        $st = $pdo->prepare("update sketch set title = '$title' where id = '$id'");
        $st = $pdo->prepare("update sketch set caption = '$caption' where id = '$id'");
        $st = $pdo->prepare("update sketch set date = '$time' where id = '$id'");
        $st = $pdo->prepare("update sketch set animation = '$animation' where id = '$id'");
        $st = $pdo->prepare("update sketch set html = '$html' where id = '$id'");

    }else{
        $st = $pdo->prepare("INSERT INTO sketch(username,title,caption,date,animation,html) VALUES( ?, ?, ?, ?, ?, ?)");
        $st->execute(array($username, $title, $caption, $time, $animation, $html));
    }

    header("Location: top.php");
    exit;
}
?>