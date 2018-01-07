<?php
function h($str)
{
    return htmlspecialchars($str, ENT_QUOTES, "UTF-8");
}

date_default_timezone_set("Asia/Tokyo");

if (isset($_GET["username"]) && isset($_GET["comment"])) {
    $username = $_GET["username"];
    $comment = $_GET["comment"];
    $time = date("Y-m-d H:i");
    // ＊＊＊??????????プリペアドステートメントを使い、テーブルcommentに$title, $article_id, $name,$bodyを登録する処理をここに書く＊＊＊
    $pdo = new PDO("sqlite:data/works.sqlite");
    $pdo->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_WARNING);
    $st = $pdo->prepare("INSERT INTO comment(username, comment,date) VALUES( ?, ?, ?)");
    $st->execute(array($username, $comment, $time));

//    http_response_code( 301 ) ;
//    header( "Location: " ) ;
//    exit ;

    $result = "登録しました。";
} else {
    $result = "記事の内容がありません。";
}

?>

<!DOCTYPE html>
<html lang="ja">
<head>
    <meta charset="utf-8">
    <title>コメント登録</title>
    <link rel="stylesheet" href="style.css">
</head>
<body>


<!-- 処理結果$resultと、ブログのページ(top.php)に戻るリンクを表示するHTMLをここに書く-->

<?php print "$result"; ?>
<br>
<a href="./top.php">TOPに戻る</a>


</body>
</html>
