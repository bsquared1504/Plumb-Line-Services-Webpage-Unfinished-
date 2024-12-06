"use strict";

/*New Perspectives on HTML5, CSS3, and JavaScript 6th Edition
   Final Project
   Contact Page JavaScript

   Author: Brady Brown
*/


window.addEventListener("load", function(){
	//Retrieve the field/value pairs from the URL
	var formData = location.search.slice(1);
	formData = formData.replace(/\+/g," ");
	formData = decodeURIComponent(formData);
	var formFields = formData.split(/[&=]/g);
	if (formFields[1] == 1){
		document.forms.payment.elements.workType.value = "new";
	}else if(formFields[1] == 2){
		document.forms.payment.elements.workType.value = "replace";
	}else if(formFields[1] == 3){
		document.forms.payment.elements.workType.value = "misc";
	}
}