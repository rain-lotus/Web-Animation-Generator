<!doctype html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport"
          content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Document</title>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.2.1/jquery.min.js"></script>
    <link rel="stylesheet" href="animejs.css">
</head>

<body>
</div>
<div class="left">
    <!--TODO キャンバスにぶち込む要素達。初期設定する-->
    <!--<div class="add_element" id="その要素のタイプ名とか"><div>-->
    <!--完全に幾何学でやる場合である……-->
    <div class="add_element" id="elema">elema</div>
    <div class="add_element" id="elemb">elemb</div>
    <div class="add_element" id="elemc">elemc</div>
    <br>
<!--    厳しそうだから一回殺した-->
<!--    <div class="add_move" id="translate">translate</div>-->
<!--    <div class="add_move" id="rotate">rotate</div>-->
<!--    <div class="add_move" id="opacity">opacity</div>-->
<!--    <br>-->
<!---->

    translateX <input type="text" class="parameter" id="translateX"><br>
    translateY <input type="text" class="parameter" id="translateY"><br>
    rotate <input type="text" class="parameter" id="rotate"><br>
    opacity <input type="text" class="parameter" id="opacity"><br>
    <input type="button" value="add" class="add">
    backgroundcolor

</div>
<div class="right">
    ここは仮です<br>
    <input type="text" placeholder="tytle"><br>
    <input type="text" placeholder="description"><br>
    <input type="button" value="submit">
</div>

<div id="wrapper">
    <div id="canvas">
        <span id='mouse'></span>
        <!--.element is object-->
    </div>
</div>

<div class="edit">
    <input type="button" value="run" id="run"><br>
    <div class="line player align-items">
        <button class="play">Play</button>
        <button class="pause">Pause</button>
        <button class="restart">Restart</button>
        <button class="reset">reset</button>
    </div>
    <input class="progress" step="2" type="range" min="0" max="100" value="0">

    <div class="get_html"></div>

    <div id="history"></div>

</div>
<script src="https://cdnjs.cloudflare.com/ajax/libs/animejs/2.2.0/anime.min.js"></script>
<script src="js/function.js"></script>
<script src="js/button_progress.js"></script>
<script src="js/dragdrop.js"></script>
<script src="js/get_html.js"></script>
<script src="js/editanime.js"></script>
</body>
</html>