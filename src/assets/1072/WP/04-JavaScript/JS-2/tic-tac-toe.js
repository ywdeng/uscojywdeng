var btn00 = null;
var btn01 = null;
var btn02 = null;
var btn10 = null;
var btn11 = null;
var btn12 = null;
var btn20 = null;
var btn21 = null;
var btn22 = null;
var matrix = null;
var secUserInfo = null; // 登錄板，輸入玩家姓名
var secBoard = null;    // 記分板
var logger = null;
var blueName = null;    // 藍方姓名
var redName = null;     // 紅方姓名
var btnPlay = null;
var countBlueWin = 0;   // 藍方贏次數
var countRedWin = 0;    // 紅方贏次數
var countDue = 0;       // 平手次數
var turn = 0; // 輪到誰？ 0:blue, 1:red
var stepCount = 0;  // 目前走到第幾手
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
    } else if (state == 1) {
        blueName.disabled = true;   // 遊戲進行中
        redName.disabled = true;
        btnPlay.disabled = true;
        secBoard.style.visibility = "visible";
        showTurn();
    } else if (state == 2) {
        blueName.disabled = false;  // 遊戲結束，提示是否再玩一局        
        redName.disabled = false;
        btnPlay.value = "重玩";
        btnPlay.disabled = false;
        btnPlay.focus();
        secBoard.style.visibility = "visible";
        freezeSquare();
    }
}

function playGame() {
    turn = 0;
    stepCount = 0;
    resetSquare();
    state = 1;
    switchState();
}

/* 判斷勝負 */
function judge() {
    for (var i = 0; i < 3; i++) {
        if ((matrix[i][0].value != "") &&
            (matrix[i][0].value == matrix[i][1].value) &&
            (matrix[i][1].value == matrix[i][2].value))
            return (matrix[i][0].value == "O") ? 0 : 1;
    }
    for (var i = 0; i < 3; i++) {
        if ((matrix[0][i].value != "") &&
            (matrix[0][i].value == matrix[1][i].value) &&
            (matrix[1][i].value == matrix[2][i].value))
            return (matrix[0][i].value == "O") ? 0 : 1;
    }
    if ((btn00.value != "") &&
        (btn00.value == btn11.value) &&
        (btn11.value == btn22.value))
        return (btn00.value == "O") ? 0 : 1;
    if ((btn02.value != "") &&
        (btn02.value == btn11.value) &&
        (btn11.value == btn20.value))
        return (btn02.value == "O") ? 0 : 1;
    if (stepCount >= 9) return 2; // 平手
    return -1;
}

function play(btn) {
    if (turn == 0) {
        btn.value = "O";
        btn.style.backgroundColor = "blue";
    } else {
        btn.value = "X";
        btn.style.backgroundColor = "red";
    }
    btn.disabled = true;
    stepCount++;
    var n = judge();
    if (n < 0) {
        turn = 1 - turn;
        showTurn();
    } else {
        if (n == 0) {
            countBlueWin++;
            alert("藍方 " + blueName.value + " 獲勝!");
        } else if (n == 1) {
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
}

function showTurn() {
    var d = document.getElementById("turn");
    if (turn == 0) {
        d.innerHTML = "輪到藍方";
        d.className = "blueText";
    } else if (turn == 1) {
        d.innerHTML = "輪到紅方";
        d.className = "redText";
    }
}

function countWins() {
    var d = document.getElementById("gameStat");
    d.innerHTML = "<p>藍方獲勝 " + countBlueWin + " 次<br />" +
        "紅方獲勝 " + countRedWin + " 次<br />" +
        "雙方平手 " + countDue + " 次</p>";
}

function freezeSquare() {
    for (var i = 0; i < 3; i++) {
        for (var j = 0; j < 3; j++) {
            matrix[i][j].disabled = true;
        }
    }
}

function resetSquare() {
    for (var i = 0; i < 3; i++) {
        for (var j = 0; j < 3; j++) {
            matrix[i][j].disabled = false;
            matrix[i][j].value = "";
            matrix[i][j].style.backgroundColor = "white";
        }
    }
}