<?php
$pdo = new PDO("sqlite:../data/works.sqlite");
$pdo->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_WARNING);
$st = $pdo->query("select * from sketch");
$data = $st->fetchAll();
?>

<!doctype html>
<html lang="ja">
<head>
    <meta charset="UTF-8">
    <meta name="viewport"
          content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">

    <link rel="stylesheet" href="style.css">

    <title>our app title</title>
</head>
<body>

<header>
    <div class="content">
        <image src="data/test.png"></image>
        <div class="headcontent"></div>
        <div class="headcontent">
            <div class="button"></div>
            <div class="button"></div>
            <input type="text">
        </div>
    </div>
</header>

<div class="main">
    <div class="content">
        <?php
        foreach ($data as $images) {
            ?>
            <image class="image-grid" src="../data/test.png"></image>
            <?php
        }
        ?>
    </div>
</div>

</body>
</html>