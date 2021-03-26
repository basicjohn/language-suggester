// Business logic:
var question1
var question2
var question3
var question4
var question5





// Everything below this line is user interface logic:
$(document).ready(function () {
  $("#suggesterQuestions").submit(function (event) {
    question1 = $("#question1").val();
    console.log(question1);
    event.preventDefault();
  });






});