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
    question2 = $("#question2").val();
    question3 = $("#question3").val();
    question4 = $("#question4").val();
    question5 = $("#question5 option:selected").text();
    console.log(question1);
    console.log(question2);
    console.log(question3);
    console.log(question4);
    console.log(question5);
    event.preventDefault();
    $(".quizResults").hide();

    if (question1 === "1") {
      $("#javascriptContent").show();
    } else if (question1 === "2") {
      if (question2 === "1") {
        $("#pythonContent").show();
      } else {
        $("#cContent").show();
      }
    } else if (question1 === "3") {
      $("#swiftContent").show();
    } else {
      console.log("Could not complete");
    }

    $(function () {
      $("<h5>" + question5 + " is a great quality to have!</h5>").prependTo('#qualities');
    });


  });


});