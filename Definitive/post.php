<?php
//日本時間の日付時刻
date_default_timezone_set("Asia/Tokyo");

session_start();
if (isset($_POST["html"]) && isset($_POST["animation"]) && isset($_POST["title"]) && isset($_POST["caption"])) {
    $html = $_POST["html"];
    $animation = $_POST["animation"];
    $title = $_POST["title"];
    $caption = $_POST["caption"];
    $username = $_SESSION["screen_name"];
    $time = date("Y-m-d H:i");

    $pdo = new PDO("sqlite:data/works.sqlite");
    $pdo->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_WARNING);

    if (isset($_POST["thumbnail"])) {
        $data = $_POST['thumbnail'];
        $data = base64_decode($data);
        $im = imagecreatefromstring($data);
        $timedata = date("Y-m-d H-i-s");
        //2018-01-08 21-40-24 taizosorry.pngみたいなファイルが生成される
        $img_name = $timedata . " " . $username . ".png";
        imagepng($im, "./thumbnail/" . $timedata . " " . $username . ".png");
    }

    if (isset($_POST["id"])) {
        $id = $_POST["id"];
        $st = $pdo->exec("update sketch set username = '$username', title = '$title', caption = '$caption', date = '$time', animation = '$animation', html = '$html', samune = '$img_name' where id = '$id'");

    } else {
        $st = $pdo->prepare("INSERT INTO sketch(username,title,caption,date,animation,html,samune) VALUES( ?, ?, ?, ?, ?, ?, ?)");
        $st->execute(array($username, $title, $caption, $time, $animation, $html, $img_name));
    }

    header("Location: mypage.php");
    exit;
}
?>
