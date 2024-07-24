
// Toggle panel based on button click based on div ID
$(document).ready(function(){
    $("button").click(function(){
        var dataTarget = $(this).data("target");
        $(dataTarget).slideToggle();
    });
  });

//  flips myth cards on click
//   const card = document.querySelector(".myth-card");
//   card.addEventListener("click", function () {
//     card.classList.toggle("myth-card-flipped");
//     console.log("flipped");
//   });
  

  
