var num1 = 0; // 第一個數字
var num2 = 0; // 第二個數字
var numResult = 0; // 結果
var stateId = 1; // 狀態
var op = '+'; // 運算符號
var opSymbol = { '+': "&plus;", '-': "&minus;", '*': "&times;", '/': "&divide;" };

function updateDisplay() {
    var disp = document.getElementById('disp');
    switch (stateId) {
        case 1:
            disp.innerHTML = num1;
            document.getElementById('eq').disabled = true;
            document.getElementById('copy').disabled = false;
            break;
        case 2:
            disp.innerHTML = num1 + ' ' + opSymbol[op] + ' ' +
                ((num2 == 0) ? '' : num2);
            document.getElementById('eq').disabled = false;
            document.getElementById('copy').disabled = true;
            break;
        case 3:
            disp.innerHTML = num1 + ' ' + opSymbol[op] + ' ' +
                num2 + ' = ' + numResult;
            document.getElementById('copy').disabled = false;
    }
}

function resetAll() {
    num1 = num2 = 0;
    stateId = 1;
    updateDisplay();
}

function resetCurrent() {
    switch (stateId) {
        case 1:
            num1 = 0;
            break;
        case 2:
            num2 = 0;
            break;
        default:
            num1 = num2 = 0;
            stateId = 1;
    }
    updateDisplay();
}

function setNumber(n) {
    if (stateId == 1) {
        num1 = num1 * 10 + n;
    } else if (stateId == 2) {
        num2 = num2 * 10 + n;
    } else {
        resetAll();
        num1 = n;
    }
    updateDisplay();
}

function setOperator(p) {
    op = p;
    if (stateId == 3) {
        calc();
    } else {
        stateId = 2;
        updateDisplay();
    }
}

function calc() {
    switch (op) {
        case '+':
            numResult = num1 + num2;
            break;
        case '-':
            numResult = num1 - num2;
            break;
        case '*':
            numResult = num1 * num2;
            break;
        case '/':
            numResult = num1 / num2;
            break;
    }
    stateId = 3;
    updateDisplay();
    copyClipboard();
}

function negate() {
    if (stateId == 1) {
        num1 *= -1;
    } else if (stateId == 2) {
        num2 *= -1;
    } else {
        num1 = -1 * numResult;
        stateId = 1;
    }
    updateDisplay();
}

function squareRoot() {
    if (stateId == 1) {
        num1 = Math.sqrt(num1);
    } else if (stateId == 2) {
        num2 = Math.sqrt(num2);
    } else {
        num1 = Math.sqrt(numResult);
        stateId = 1;
    }
    updateDisplay();
}

function getPowerN() {
    var x = numResult;
    if (stateId == 1) {
        x = num1;
    } else if (stateId == 2) {
        x = num2;
    }
    var ans = prompt("計算 " + x + " 的 n 次方，請輸入 n 值：", "");
    if (!ans || ans == 'null') return false;
    var n = Number(ans);
    if (isNaN(n)) {
        alert("輸入格式錯誤：" + ans);
        return false;
    }
    return n;
}

function powerN() {
    var n = getPowerN();
    if (!n) return;
    if (stateId == 1) {
        num1 = Math.pow(num1, n);
    } else if (stateId == 2) {
        num2 = Math.pow(num2, n);
    } else {
        num1 = Math.pow(numResult, n);
        stateId = 1;
    }
    updateDisplay();
}

function copyClipboard() {
    var clipboard = document.getElementById("clipboard");
    clipboard.style.visibility = 'visible';
    if (stateId == 1) {
        clipboard.value = num1.toString();
    } else if (stateId == 3) {
        clipboard.value = numResult.toString();
    }
    clipboard.select();
    document.execCommand("copy");
    clipboard.style.visibility = 'hidden';
}