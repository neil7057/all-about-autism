/*jshint esversion: 6 */
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
}

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

// create constants for use in quiz functions
const questionElementNo = document.getElementById("question-number");
const questionElement = document.getElementById("question");
const questionElementTc = document.getElementById("question-time-counter");
const answerButtons = document.getElementById("answer-btns");
const nextButton = document.getElementById("next-btn");
var count = 0;
var timer = 0;

// maximum time per question
function questionTimer () {
count = 15;
timer = setInterval(function() {
questionElementTc.innerHTML = "Time Left: " + count + " seconds";
count--;
if(count < 10 ) {
  questionElementTc.classList.add("timerunningout");
}
if(count === 0) {
  stopInterval(timer)
}
  }, 1000);
}

// timed out
var stopInterval = function(timer) {
// reset counter text color
questionElementTc.classList.remove("timerunningout");
clearInterval(timer);
// show timeout message, reset timer, do not increment count, display next button
questionElementTc.innerHTML = "You Ran Out of Time!";
configureButtons();
nextButton.style.display ="block";
}

// on timeout, displa correct answer and disable buttons
function configureButtons () {
Array.from(answerButtons.children).forEach(button => {
  if(button.dataset.correct === "true") {
    button.classList.add("correct");
  }
  button.disabled = true;
});
}

// set question index and score to zero before start of quiz
let currQuestIndex = 0;
let quizScore = 0;

// hide 'start quiz' button, display quiz screen, reset score and question index, display 1st question
function beginQuiz() {
currQuestIndex = 0;
quizScore = 0;
nextButton.innerhtml = "next";
questionElementTc.innerHTML = "Starting timer";
displayQuestion();
}

function displayQuestion() {
clearGrid();
let currQuestion = questions[currQuestIndex];
let questionNumber = currQuestIndex + 1;
questionElementNo.innerHTML = "Question " + questionNumber + " of " + questions.length + ": ";
questionElement.innerHTML = currQuestion.question;
questionTimer();
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
nextButton.innerHTML ="Next";
questionElementTc.classList.remove("timerunningout");
// class is added after this call in display score but needs to be reset on beginquiz
questionElementTc.classList.remove("center-content");
while (answerButtons.firstChild) {
  answerButtons.removeChild(answerButtons.firstChild);
}
}

// when user selects an answer, set colors and disable further selections
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
// stop timer and make next button visible
clearInterval(timer);
nextButton.style.display ="block";
}

// after answering last question, display score and performance comment
function displayScore() {
clearGrid();
clearInterval(timer);
questionElementTc.classList.add("center-content");
questionElementTc.innerHTML = "End of the Quiz";
questionElementNo.classList.add("center-content");
questionElementNo.innerHTML = `You scored ${quizScore} out of ${questions.length}!`;
questionElement.classList.add("center-content");
questionElement.innerHTML = quizFeedback[quizScore];
nextButton.innerHTML ="Play Again";
nextButton.style.display="block";
}

// iterate around until last question then display score
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
  console.log("begin quiz");
  beginQuiz();
}    
});

// launch quiz on 'start quiz' button
$("#quizTrigger").click(function() {
$("#quizTrigger").toggle("hide");
$(".quizmain").toggle("show");
beginQuiz();
});
