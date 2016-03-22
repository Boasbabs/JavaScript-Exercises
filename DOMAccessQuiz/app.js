
 function q1() {
 	var questionOne = document.getElementById("para1");
	questionOne.innerHTML = "I am Id of para1";
 }

// var questionTwo = document.getElementsByClassName("class1");
// questionTwo[0].innerHTML = "I am class1";
 document.getElementsByClassName("class1")[0].innerHTML = "I am class1";

var questionThree = document.getElementsByTagName('p');
questionThree[2].innerHTML = "Third paragraph to be identified";

var questionFour = document.getElementById("block1");
questionFour.style.backgroundColor = "blue";

function questionFive() {
	var questionFive = document.getElementById("block2");
	questionFive.style.fontSize = "20px";
}
function mOver() {
	document.getElementById("block3").style.color = "red";
	// body...
}
function mOut() {
	document.getElementById("block3").style.color = "black";
	// body...
}
function hide() {
	document.getElementById("block4").style.visibility = "hidden";
}
function q8() {
	var questionEight = document.getElementsByClassName("box1");
	for (i=0; i <= questionEight.length; i++) {
		questionEight[i].style.backgroundColor = "green";
	}
 }
 function q9() {
	var questionEight = document.getElementsByClassName("box2");
	for (i=0; i <= questionEight.length; i++) {
		questionEight[i].style.backgroundColor = "blue";
	}
 }
 function q11() {
 	var newPara = document.createElement("P");
 	var newText = document.createTextNode("I got generated on the fly...");
 	newPara.appendChild(newText);
 	document.getElementById("para2").appendChild(newPara);
 	// body...
 }

 function q12() {
 	var parent = document.getElementById("para3");
 	var child = document.getElementById("para4");
 	child.remove();
 }

 function q14() {
 	var animateDiv = document.getElementById("box5");
 	animateDiv.style.transform = "scale(2.3)";
 	// body...animation-direction: alternate; transform: scale(1.3
 }