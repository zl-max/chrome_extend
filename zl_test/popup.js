
function sayHello(){
	var message = document.createTextNode("Hello World!");
	var out = document.createElement("div");
	var a=document.createElement("a");
	a.innerHTML="aaa";
	a.setAttribute("href","http://www.baidu.com");
	out.appendChild(message);
	out.appendChild(a);
	document.body.appendChild(out);
}

window.onload=sayHello;

