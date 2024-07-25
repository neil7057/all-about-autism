
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
    });
  });

  // create array of images for card fronts on myths page
const mythImages = [
  'url("../assets/images/disease.jpg")',  
  'url("../assets/images/cure-modified.png")',
  'url("../assets/images/vaccine.jpg")',
  'url("../assets/images/learn-disab.jpg")',
  'url("../assets/images/savant.jpg")',
  'url("../assets/images/emotion-mod.png")',
  'url("../assets/images/graph.jpg")',
  'url("../assets/images/days.jpg")',
  'url("../assets/images/non-verbal.png")',
  'url("../assets/images/badparents.jpg")'
];

// populate card images on myths page only on screen sizes above 360px.
if (document.documentElement.clientWidth > 326) {
  var backImage = document.getElementsByClassName("myth-card-front"); 
  for (var i = 0; i < backImage.length; i++) {
  backImage[i].style.backgroundImage = mythImages[i];
  console.log(mythImages[i]);
  }
};
