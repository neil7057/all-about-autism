
// Toggle panel based on button click based on div ID
$(document).ready(function(){
    $("button").click(function(){
        var dataTarget = $(this).data("target");
        $(dataTarget).slideToggle();
    });
  });

