"use strict";

/*New Perspectives on HTML5, CSS3, and JavaScript 6th Edition
   Final Project
   Projects Page JavaScript

   Author: Brady Brown
*/

window.onload = init;
var i = 1;


function init(){
	var button1 = document.getElementById("button1");
	var button2 = document.getElementById("button2");
	var setImage = document.getElementById("setImage");
	setImage.src = "pl_project1.png";
		
	button1.onclick = prevImage(i);
	button2.onclick = nextImage(i);
}

function nextImage(i){
	var setImage = document.getElementById("setImage");
	switch(i){
		case '1':
			setImage.src = "pl_project2.png";
			i = 2;
			break;
		case '2':
			setImage.src = "pl_project3.png";
			i = 3;
			break;
		case '3':
			setImage.src = "pl_project4.png";
			i = 4;
			break;
		case '4':
			setImage.src = "pl_project5.png";
			i = 5;
			break;
		case '5':
			setImage.src = "pl_project6.png";
			i = 6;
			break;
		case '6':
			setImage.src = "pl_project1.png";
			i = 7;
			break;
	}
}

function prevImage(){
	var setImage = document.getElementById("setImage");
	var num = setImage.src.charAt(9);
	switch(num){
		case '1':
			setImage.src = "pl_project6.png";
			i = 6;
			break;
		case '2':
			setImage.src = "pl_project1.png";
			break;
		case '3':
			setImage.src = "pl_project2.png";
			break;
		case '4':
			setImage.src = "pl_project3.png";
			break;
		case '5':
			setImage.src = "pl_project4.png";
			break;
		case '6':
			setImage.src = "pl_project5.png";
			break;
	}
}
