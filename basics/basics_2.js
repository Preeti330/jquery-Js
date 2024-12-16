const { JSDOM } = require('jsdom');
const jQuery = require('jquery');

const dom = new JSDOM(`<!DOCTYPE html><html><body><div id="test" >Hello, world!<h1 class="myclass">By class name</h1><h2 class="h2class">h2 class</h2></div><input type="text" disabled value="checkmyval"> <a href="google.com" target="_blank"></a></body></html>`);

const $ = jQuery(dom.window);

// actions/methods of jquery
// html() -> get or sets the content of element
var html = $('#test').html();
$('#test').html("<h1>hii bro</h1>");
// console.log(html);

// text() -> get text of element 
var text = $("#test").text();
$('#test').text("Hey Set some text");
// console.log(text);

// attr -> set or get attribute 
var href = $('a').attr('href');
// console.log(href);

// get value 
var text2 = $("input").val();
// console.log(text2);

// set value 
 $("input").attr("value","bheema");
var text3 = $("input").val();
console.log(text3);

// append text at end of the div 
$('div').append(<p>Hey add some more text</p>);

//append the text at begining of div 
$('div').prepend('<h1>Hey Add text at begining of text </h1>');

//remove text 
$('.myclass').remove();

//empty text 
$('h2').empty();

// Add CSS 
$('h2').css('color',"red");
$('h2').css({
    background:'pink',
});

// add class 
$('input').addClass('addinput');
$('input').removeClass();





