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
    question5val = $("#question5 option:selected").val();
    question5 = $("#question5 option:selected").text();
    event.preventDefault();
    $(".quizResults").hide();
    $(".alert").hide();


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
    } else if (question5 === "Developer Qualities") {
      $("#incompleteQuiz").show();
      $("#qualities").hide();
      $(" <div class=\"alert alert-danger\" role=\"alert\">ERROR: You must complete the quiz!</div > ").appendTo('#suggesterQuestions');
    } else {
      $("#incompleteQuiz").show();
      $(" <div class=\"alert alert-danger\" role=\"alert\">ERROR: You must complete the quiz!</div > ").appendTo('#suggesterQuestions');
    }
    // inserting the answer for question #5 in the div w/ id of qualities
    if (question5val > 0) {
      $(function () {
        $("#qualities h5").remove();
        $("#qualities").show();
        $("<h5><span>" + question5 + "</span> is a great quality for a developer to have!</h5>").prependTo('#qualities');
      });
    } else { }
  });
});