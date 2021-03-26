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
    event.preventDefault();
    $(".quizResults").hide();

    if (question1 === "1") {
      $(".alert").hide();
      $("#javascriptContent").show();
    } else if (question1 === "2") {
      if (question2 === "1") {
        $(".alert").hide();
        $("#pythonContent").show();
      } else {
        $(".alert").hide();
        $("#cContent").show();
      }
    } else if (question1 === "3") {
      $(".alert").hide();
      $("#swiftContent").show();
    } else {
      $("#incompleteQuiz").show();
      $(".alert").hide();
      $(" <div class=\"alert alert-danger\" role=\"alert\">ERROR: You must complete the quiz!</div > ").appendTo('#suggesterQuestions');

    }
    // inserting the answer for question #5 in the div w/ id of qualities

    if (question5 === "Developer Qualities") {
      $(".alert").hide();
      $(" <div class=\"alert alert-danger\" role=\"alert\">ERROR: You must complete the quiz!</div > ").appendTo('#suggesterQuestions');

    } else {
      $(function () {
        $("#qualities h5").remove();
        $("#qualities").hide();
        $("#qualities").show();
        $("<h5>" + question5 + " is a great quality for a developer to have!</h5>").prependTo('#qualities');
      });
    }


  });


});