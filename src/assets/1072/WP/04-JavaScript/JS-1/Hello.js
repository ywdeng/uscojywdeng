function sayHello() {
	var msg = document.getElementById("message");
	var name = prompt("請問尊姓大名？");
	if (name) {
		msg.innerHTML="Hello " + name;
		msg.style.color="magenta";
	} else {
		msg.innerHTML="Hello World!";
	}
}

function sayHello2(msgPrefix, node, msgPostfix) {
	var rainbow = new Array("red","orange","yellow","green",
							"blue","indigo", "violet");
	var name = prompt("請問輸入名稱：");
	if (name) {
		node.innerHTML = msgPrefix + name + msgPostfix;
		var n = Math.floor(Math.random() * rainbow.length);
		var color = rainbow[n];
		node.style.color = color;
	} 
}