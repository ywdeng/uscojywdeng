var inputItems = [];
var parenthesesCount = 0;
var currentInput = "0";

/*** state
   0: entering number 
   1: entering operator and others
****/
var state = 0;

function init() {
    btnPeriod = document.getElementById("periof");
    btnLP = document.getElementById("LP");
    btnRP = document.getElementById("RP");
    btnEQ = document.getElementById("equals");
    txtIncoming = document.getElementById("incoming");
    txtDisp = document.getElementById("disp");
    resetAll();
}

function refreshPanel() {
    btnPeriod.disabled = currentInput.includes(".");
    btnRP.disabled = (parenthesesCount < 1);
    btnLP.disabled = ((state == 0) || (state == 2)) && ((inputItems.length > 0) || (Number(currentInput) != 0));

    var line = "";
    if (inputItems && inputItems.length > 0) {
        line = line + inputItems[0];
        for (var i = 1; i < inputItems.length; ++i) {
            line = line + " " + inputItems[i];
        }
    }
    txtDisp.innerHTML = line;
    txtIncoming.value = currentInput;
}

function resetCurrent() {
    currentInput = "0";
    refreshPanel();
}

function resetAll() {
    currentInput = "0";
    inputItems = [];
    parenthesesCount = 0;
    state = 0;
    refreshPanel();
}

function setNumber(n) {
    if ((currentInput == "0") && (n != ".")) {
        currentInput = "" + n;
    } else {
        currentInput = currentInput + n;
    }
    state = 0;
    refreshPanel();
}

function setOperator(op) {
    inputItems.push(Number(currentInput));
    currentInput = "0";
    state = 1;
    if (op == "(") {
        parenthesesCount++;
        if (inputItems[inputItems.length - 1] == 0) {
            inputItems[inputItems.length - 1] = op;
        }
    } else {
        inputItems.push(op);
        if (op == ")") {
            parenthesesCount--;
            state = 2;
        }
    }
    refreshPanel();
}

function backspace() {
    if (currentInput == "0") {
        if (inputItems.length > 0) {
            var x = inputItems.pop();
            if (!isNaN(x)) state = 1;
            else state = 0;
        }
    } else {
        currentInput = currentInput.substr(0, currentInput.length - 1);
        if (currentInput.length < 1) currentInput = "0";
    }
    refreshPanel();
}