
// Toggle panel based on button click based on div ID
$(document).ready(function(){
    $("button").click(function(){
        var dataTarget = $(this).data("target");
        $(dataTarget).slideToggle();
    });
  });

//  flips myth cards on click
$(document).ready(function(){
    $(".myth-card").click(function() {
        $(this).toggleClass("myth-card-flipped");
        console.log("flipped");
    });
  });
