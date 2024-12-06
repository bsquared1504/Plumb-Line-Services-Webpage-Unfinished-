"use strict";

/*New Perspectives on HTML5, CSS3, and JavaScript 6th Edition
   Final Project
   Services Page JavaScript

   Author: Brady Brown
*/

window.addEventListener("load", function(){
	var form1 = document.forms.serviceForm1;
	var form2 = document.forms.serviceForm2;
	var form3 = document.forms.serviceForm3;
	
	form1.elements.service.value = 1;
	form2.elements.service.value = 2;
	form3.elements.service.value = 3;
});
