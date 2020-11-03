
// 所有的 card id 都要在此登記
var items = ["b1", "b2", "b3", "b4", "b5", "b6"];

function show(anchor) {
    var tokens = anchor.href.split("#");
    var itemId = tokens[tokens.length - 1];
    for (var n = 0; n < items.length; ++n) {
        if (items[n] != itemId) {
            var x = document.getElementById(items[n]);
            if (x) x.style.zIndex = "-1";
        }
    }
    var x = document.getElementById(itemId);
    if (x) x.style.zIndex = "9999";
    else alert("指定的項目 '" + itemId + "' 不存在！");
}