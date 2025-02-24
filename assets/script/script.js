$(document).ready(function() {
    $(".faq_header").click(function() {
      $(this).next(".faq_answer").slideToggle();
      $(this).find(".toggle").text($(this).find(".toggle").text() == "+" ? "-" : "+");
    });
  });


  
  function toggleReadMore(btn) {
    let moreContent = btn.parentElement.nextElementSibling;
    
    if (moreContent.style.display === "none" || moreContent.style.display === "") {
        moreContent.style.display = "block";
        btn.textContent = "Read Less";
    } else {
        moreContent.style.display = "none";
        btn.textContent = "Read More";
    }
}
