console.log("hiii");

// we keep all the code in document.ready() bcz its makes sure that this code excutes after the the scripts files
// gets load, means if any code in file it excute as its get loads but the code inside this methods excutes only 
// after the its completes the load of file 

//to jquery in direct .js file, install Jquery and Jsdom 
// 1.node -v 
// 2.npm -v 
// npm init -y 
// npm install jquery jsdom


//import jsdom,jquery 
const { JSDOM } = require('jsdom');
const jQuery = require('jquery');
//intialize html root
const dom = new JSDOM(`<!DOCTYPE html><html><body><div id="test">Hello, world!</div></body></html>`);

// pass the window obj from JSDOM to Jquery
const $ = jQuery(dom.window);

$(dom.window.document).ready(function() {
    console.log($('#test').text()); 
    $('#test').text('Hello from Node.js!');
    console.log($('#test').text());
});

console.log("Learn Well");

// in short function of $(document).ready(function(){}) 
$(function(){
    console.log("Heyyyyyy");
});