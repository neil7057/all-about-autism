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
  'url("assets/images/disease.jpg")',  
  'url("assets/images/cure-modified.png")',
  'url("assets/images/vaccine.jpg")',
  'url("assets/images/learn-disab.jpg")',
  'url("assets/images/savant.jpg")',
  'url("assets/images/emotion-mod.png")',
  'url("assets/images/graph.jpg")',
  'url("assets/images/days.jpg")',
  'url("assets/images/non-verbal.png")',
  'url("assets/images/badparents.jpg")'
];

// populate card images on myths page only on screen sizes above 360px.
if (document.documentElement.clientWidth > 326) {
  var backImage = document.getElementsByClassName("myth-card-front"); 
  for (var i = 0; i < backImage.length; i++) {
  backImage[i].style.backgroundImage = mythImages[i];
  }
};

// Get the button:
let mybutton = document.getElementById("myHomeBtn");
// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};
function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}
// When the user clicks on the button, scroll to the top of the document
$("#myHomeBtn").click(function topFunction() {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
});

// quiz section code

const questionElementNo = document.getElementById("question-number");
const questionElement = document.getElementById("question");
const answerButtons = document.getElementById("answer-btns");
const nextButton = document.getElementById("next-btn");

let currQuestIndex = 0;
let quizScore = 0;

function beginQuiz() {
  $("#quizTrigger").toggle("hide");
  $(".quizmain").toggle("show");
  currQuestIndex = 0;
  quizScore = 0;
  nextButton.innerhtml = "next";
  displayQuestion();
}

function displayQuestion() {
  clearGrid();
  let currQuestion = questions[currQuestIndex];
  let questionNumber = currQuestIndex + 1;
  questionElementNo.innerHTML = "Question " + questionNumber + " of " + questions.length + ": ";
  questionElement.innerHTML = currQuestion.question;

  currQuestion.answers.forEach(answer => {
    const button = document.createElement("button");
    button.innerHTML = answer.text;
    button.classList.add("quizBtn");
    answerButtons.appendChild(button);
    if(answer.correct) {
      button.dataset.correct = answer.correct;
    }
    button.addEventListener("click", chooseAnswer);
  });
}

function clearGrid() {
  nextButton.style.display ="none";
  while (answerButtons.firstChild) {
    answerButtons.removeChild(answerButtons.firstChild);
  }
};

function chooseAnswer(e) {
  const chosenBtn = e.target;
  const isCorrect = chosenBtn.dataset.correct === "true";
  if (isCorrect) {
    chosenBtn.classList.add("correct");
    quizScore ++;
  } else {
    chosenBtn.classList.add("incorrect");
  }
  Array.from(answerButtons.children).forEach(button => {
    if(button.dataset.correct === "true") {
      button.classList.add("correct");
    }
    button.disabled = true;
  });
  nextButton.style.display ="block";
}

function displayScore() {
  clearGrid();
  questionElementNo.classList.add("center-content");
  questionElementNo.innerHTML = `You scored ${quizScore} out of ${questions.length}!`;
  questionElement.classList.add("center-content");
  questionElement.innerHTML = quizFeedback[quizScore];
  nextButton.innerHTML ="Exit";
  nextButton.style.display="block";
}


function showNextButton() {
  currQuestIndex++;
  if(currQuestIndex < questions.length) {
    displayQuestion();
  } else {
    displayScore();
  }
}


$("#next-btn").click(function() {
  if(currQuestIndex < questions.length){
    showNextButton();
  } else {
    beginQuiz();
  }    
});

$("#quizTrigger").click(function() {
  beginQuiz()
});
