var dice1 = null;
var dice2 = null;
var dice3 = null;
var dice4 = null;
var matrix = null;
var secUserInfo = null; // 登錄板，輸入玩家姓名
var secBoard = null;    // 記分板
var logger = null;
var blueName = null;    // 藍方姓名
var redName = null;     // 紅方姓名
var btnPlay = null;
var btnDraw = null;
var countBlueWin = 0;   // 藍方贏次數
var countRedWin = 0;    // 紅方贏次數
var countDue = 0;       // 平手次數
var turn = 0; // 輪到誰？ 0:blue, 1:red
var bluePoint = 0;
var redPoint = 0;
var state = 0;

function switchState() {
    if (state == 0) {
        blueName.disabled = false;  // 開始玩之前，輸入兩方姓名
        blueName.focus();
        blueName.select();
        redName.disabled = false;
        btnPlay.value = "開始";
        btnPlay.disabled = false;
        secBoard.style.visibility = "collapse";
        logger.innerHTML = "&nbsp;";
        bluePoint = redPoint = 0;
    } else if (state == 1) {
        blueName.disabled = true;   // 遊戲進行中
        redName.disabled = true;
        btnPlay.disabled = true;
        secBoard.style.visibility = "visible";
        btnDraw.disabled = false;
        showTurn();
    } else if (state == 2) {
        blueName.disabled = false;  // 遊戲結束，提示是否再玩一局        
        redName.disabled = false;
        btnPlay.value = "重玩";
        btnPlay.disabled = false;
        btnPlay.focus();
        secBoard.style.visibility = "visible";
        btnDraw.disabled = true;
    }
}

function playGame() {
    turn = 0;
    logger.innerHTML = "&nbsp;";
    resetSquare();
    state = 1;
    switchState();
}

/* 判斷勝負 */
function judge() {
    var blue = 0;
    var red = 0;
    if ((bluePoint.substr(0, 2) == "豹子") && (redPoint.substr(0, 2) == "豹子")) {
        blue = bluePoint.substr(bluePoint.length - 2);
        red = redPoint.substr(redPoint.length - 2);
    } else {
        blue = parseInt(bluePoint);
        red = parseInt(redPoint);
    }
    if (blue > red) {
        countBlueWin++;
        alert("藍方 " + blueName.value + " 獲勝!");
    } else if (red > blue) {
        countRedWin++;
        alert("紅方 " + redName.value + " 獲勝!");
    } else {
        countDue++;
        alert("雙方平手!");
    }
    countWins();
    state = 2;
    switchState();
}

var runDelay = 100; // delay 100 ms between two random dice draws
var runCountdown = 0;
var runTimer = 0;
var diceList = [
        ["images/Dice-b-1.jpg", "images/Dice-b-2.jpg", "images/Dice-b-3.jpg", "images/Dice-b-4.jpg", "images/Dice-b-5.jpg", "images/Dice-b-6.jpg"],
        ["images/Dice-r-1.jpg", "images/Dice-r-2.jpg", "images/Dice-r-3.jpg", "images/Dice-r-4.jpg", "images/Dice-r-5.jpg", "images/Dice-r-6.jpg"]
    ];
function drawDice(duration) {
    runCountdown = duration * 1000 / runDelay;
    runTimer = setTimeout("diceRandom()", runDelay);
    btnDraw.disabled = true;
}

function diceRandom() {
    var arr = [1, 2, 3, 4];
    for (var i = 0; i < arr.length; i++) {
        arr[i] = randInt(1, 6);
        matrix[i].src = diceList[turn][arr[i] - 1];
        matrix[i].title = arr[i];
    }
    runCountdown--;
    if (runCountdown) {
        runTimer = setTimeout("diceRandom()", runDelay);
    } else {
        if (turn == 0) {
            bluePoint = countPoint(arr);
            logger.innerHTML = "<p><span class='blueText'>藍方：" + bluePoint + "</span></p>";
            if (bluePoint != "無點") turn = 1 - turn;
            showTurn();
        } else {
            redPoint = countPoint(arr);
            logger.innerHTML = "<p><span class='blueText'>藍方：" + bluePoint + "</span>，<span class='redText'>紅方：" + redPoint + "</span></p>";
            if (redPoint != "無點") {
                turn = 1 - turn;
                runTimer = setTimeout("judge()", runDelay);
            }
        }
        btnDraw.disabled = false;
    }
}

function randInt(rangeLeft = 0, rangeRight = 5) {
    var n = Math.random() * (rangeRight - rangeLeft + 1);
    n = Math.floor(n) + rangeLeft;
    return n;
}

function countPoint(drawn) {
    drawn.sort();
    console.log(drawn);
    var count = [0, 0, 0, 0, 0, 0, 0];
    var maxPos = -1;
    var maxValue = -1;
    var numDiff = 0;
    for (var i = 0; i < drawn.length; i++) {
        if (count[drawn[i]] == 0) numDiff++;
        count[drawn[i]] += 1;
        if (count[drawn[i]] >= maxValue) {
            maxValue = count[drawn[i]];
            maxPos = drawn[i];
        }
    }
    console.log(count);
    console.log("maxValue = " + maxValue + ", maxPos = " + maxPos);
    if (numDiff == 1) {
        return "豹子通殺，4個" + maxPos;
    } else if (numDiff == 3) {
        var sum = 0;
        for (var i = 0; i < count.length; i++) {
            if (count[i] == 1) sum += i;
        }
        return sum + "點";
    } else if (numDiff == 2) {
        if (maxValue == 2)
            return (maxPos * 2) + "點";
    }
    return "無點";
}

function play() {
    drawDice(randInt(1, 3));
}

function showTurn() {
    if (turn == 0) {
        btnDraw.value = "藍方擲骰子";
        btnDraw.className = "blueBack";
    } else if (turn == 1) {
        btnDraw.value = "紅方擲骰子";
        btnDraw.className = "redBack";
    }
}

function countWins() {
    var d = document.getElementById("gameStat");
    d.innerHTML = "<p>藍方獲勝 " + countBlueWin + " 次<br />" +
        "紅方獲勝 " + countRedWin + " 次<br />" +
        "雙方平手 " + countDue + " 次</p>";
}

function resetSquare() {
    for (var i = 0; i < matrix.length; i++) {
        matrix[i].src = "images/question.jpg";
        matrix[i].title = "?";
    }
}