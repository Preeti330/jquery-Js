const { JSDOM } = require('jsdom');
const jQuery = require('jquery');
//intialize html root
const dom = new JSDOM(`<!DOCTYPE html><html><body><div id="test" >Hello, world!<h1 class="myclass">By class name</h1><h2 class="h2class">h2 class</h2></div><input type="text" disabled> <a href="google.com" target="_blank"></a></body></html>`);
const $ = jQuery(dom.window)
//Sytanx :
// $(selector).action();
// $ -> sign to define/jquery to access 
// selector -> used to find out element
// action() -> perform some action on element 

//select element on base of class 
var text1 = $('.myclass').text();

// select element on base of id 
var text2 = $("#test").css('color','red'); 

// select based on tag name 
var text3 = $("div").text(); 
console.log(text3);
var text4 = $("input[type='text']").text(); 
console.log(text4,"input");
// select h2 tag with class name h2class
var text5 = $("h2.h2class").text();
console.log(text5);

// get the element of h1 
var text6 = $("h2:first").text();
console.log(text6);

// based on attribute
var text7 = $("input['disabled']").text();

//based on select all anchor tags with target _blank
var text8 = $('a[target="_blank"]').text();



