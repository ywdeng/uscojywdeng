var baseDiceDir = "images";
var baseDiceName = baseDiceDir + "/dice";
var imgExt = ".png";
var diceColors = ["-w-", "-r-", "-v-"];
var diceImgIds = ["dice1", "dice2", "dice3", "dice4"];
var dicePoints = [0, 0, 0, 0];
var dicePointHits = [0, 0, 0, 0, 0, 0, 0];

function buildImageName(value, color) {
    return baseDiceName + diceColors[color] + value + imgExt;
}

function resetDicePoints() {
    var i;
    for (i = 0; i < 4; ++i) dicePoints[i] = 0;
    for (i = 0; i <= 6; ++i) dicePointHits[i] = 0;
}

function findMax(arr) {
    if (!arr) return [-1, -1];
    if (arr.length < 1) return [-1, -1];
    var max = 0;
    var i;
    for (i = 1; i < arr.length; ++i) {
        if (arr[i] > arr[max]) max = i;
    }
    return [max, arr[max]];
}

function showDice(x) {
    var i, n;
    for (i = 0; i < diceImgIds.length; ++i) {
        var img = document.getElementById(diceImgIds[i]);
        n = dicePoints[i];
        if (x == 1 || x == 0)
            img.src = buildImageName(n, x);
        else {
            if (dicePointHits[n] > 0)
                img.src = buildImageName(n, 1);
            else
                img.src = buildImageName(n, 0);
        }
    }
}

function rollDice() {
    resetDicePoints();
    var i;
    for (i = 0; i < diceImgIds.length; ++i) {
        var n = Math.floor((Math.random() * 6) + 1);
        dicePoints[i] = n;
        dicePointHits[n]++;
    }
    console.log(dicePoints);
    console.log(dicePointHits);

    var score = document.getElementById("showScore");
    var max = findMax(dicePointHits);
    if (max[1] == 4) {
        showDice(1);
        score.innerHTML = "<span style='color:red; font-size: larger; font-weight: bolder'>一色 " +
            dicePoints[0] + " 點豹子通殺！</span>";
    } else if (max[1] == 3) {
        showDice(0);
        score.innerHTML = "<span style='color: black'>三同，無點，請重新擲骰。</span>";
    } else if (max[1] == 2) {
        dicePointHits[max[0]] *= -1;
        var maxAgain = findMax(dicePointHits);
        var sum = 0;
        if (maxAgain[1] == 1) {
            var x;
            for (x = 1; x <= 6; ++x) {
                if (dicePointHits[x] == 1) sum += x;
            }
        } else {
            sum = maxAgain[0] * 2;
        }
        showDice(2);
        if (sum == 3) 
            score.innerHTML = "<span style='color: red'>" + sum + " 點，BG！</span>";
        else
            score.innerHTML = "<span style='color: blue'>" + sum + " 點</span>";
    } else {
        showDice(0);
        score.innerHTML = "<span style='color: black'>無點，請重新擲骰。</span>";
    }

}