//Implement the red light using jQuery. Don't forget to add the script tags.
$(document).ready(function(){

// var total=0;

// $("#zero").click(zero);
// $("#add5").click(addFive);
// $("#add10").click(add10);
// $("#sub1").click(subtract1);


// function addFive() {

// 	total = total + 5;
// 	displayResult();
// }



// function add10() {

// 	total = total + 10;
// 	displayResult();
// }

// function subtract1() {

// 	total = total - 1;
// 	displayResult();
// }


// function zero() {

// 	total = 0;
// 	displayResult();
// }



// function displayResult() {
// $("#result").html(total);
// }


// $("#submit").click(compare);

// function compare() {
// 	var a = $("#a").val(); 
// 	var b = $("#b").val(); 


// if(a > b){
//         $("#comparison").html(">")
//     } else if (a < b){
//         $("#comparison").html("<")
//     } else {
//     	$("#comparison").html("===")
//     }
//     $("#comparison").html()
// }

$("#submit").click(convert);

function convert() {
	var f = parseFloat($("#f").val());
	var c = ((f-32)*(5/9));
    $("#c").text(c);

    if (f < 32) {
        remove();
        $("body").addClass("cold");

    } else if (f < 70) {
        remove();
        $("body").addClass("warm");

    } else {
        remove();
        $("body").addClass("hot");
    }

}

function remove() {
    $("body").removeClass();

}

console.log('hello');


});