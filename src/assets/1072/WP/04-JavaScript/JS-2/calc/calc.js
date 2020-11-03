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
            break;
        case 2:
            disp.innerHTML = num1 + ' ' + opSymbol[op] + ' ' +
                ((num2 == 0) ? '' : num2);
            document.getElementById('eq').disabled = false;
            break;
        case 3:
            disp.innerHTML = num1 + ' ' + opSymbol[op] + ' ' +
                num2 + ' = ' + numResult;
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
}


