$(document).ready(function() {
    $(".faq_header").click(function() {
      $(this).next(".faq_answer").slideToggle();
      $(this).find(".toggle").text($(this).find(".toggle").text() == "+" ? "-" : "+");
    });
  });