/*jshint esversion: 6 */

// This file contains arrays for questions and quizFeedback, main js processing is in scripts.js

const quizFeedback = [
    "0: Oh dear, Not really trying?",
    "1-3: Oh dear, more reading required",
    "1-3: Oh dear, more reading required",
    "1-3: A bit low but you tried!",
    "4-6: A bit low but you tried!",
    "4-6: A bit low but you tried!",
    "4-6: Getting there, Good effort.",
    "7-9: Getting there, Good effort.",
    "7-9: Getting there, Good effort.",
    "7-9: Getting there, Good effort.",
    "10 points: Pretty Good!",
    "11 points: So close!",
    "12 points: Superstar, try some more Questions."
];

const fullQuestions = [
    {
        question: "What is Autism?",
        answers: [
            {text: "A1", correct: false},
            {text: "A2", correct: true},
            {text: "A3", correct: false},
            {text: "A4", correct: false}
                ]
    },
    {
        question: "q2?",
        answers: [
            {text: "A2", correct: true},
            {text: "A1", correct: false},
            {text: "A3", correct: false},
            {text: "A4", correct: false}
                ]
    },
    {
        question: "q3?",
        answers: [
            {text: "A4", correct: false},
            {text: "A1", correct: false},
            {text: "A3", correct: false},
            {text: "A2", correct: true}
                ]
    },
    {
        question: "q4?",
        answers: [
            {text: "A1", correct: false},
            {text: "A2", correct: true},
            {text: "A3", correct: false},
            {text: "A4", correct: false}
                ]
    },
    {
        question: "q5?",
        answers: [
            {text: "A1", correct: false},
            {text: "A2", correct: true},
            {text: "A3", correct: false},
            {text: "A4", correct: false}
                ]
    },
    {
        question: "q?6",
        answers: [
            {text: "A1", correct: false},
            {text: "A2", correct: true},
            {text: "A3", correct: false},
            {text: "A4", correct: false}
                ]
    },
    {
        question: "q7?",
        answers: [
            {text: "A1", correct: false},
            {text: "A2", correct: true},
            {text: "A3", correct: false},
            {text: "A4", correct: false}
                ]
    },
    {
        question: "q8?",
        answers: [
            {text: "A1", correct: false},
            {text: "A2", correct: true},
            {text: "A3", correct: false},
            {text: "A4", correct: false}
                ]
    },
    {
        question: "q9?",
        answers: [
            {text: "A1", correct: false},
            {text: "A2", correct: true},
            {text: "A3", correct: false},
            {text: "A4", correct: false}
                ]
    },
    {
        question: "q10?",
        answers: [
            {text: "A1", correct: false},
            {text: "A2", correct: true},
            {text: "A3", correct: false},
            {text: "A4", correct: false}
                ]
    },
    {
        question: "q11?",
        answers: [
            {text: "A1", correct: false},
            {text: "A2", correct: true},
            {text: "A3", correct: false},
            {text: "A4", correct: false}
                ]
    },
    {
        question: "q12?",
        answers: [
            {text: "A1", correct: false},
            {text: "A2", correct: true},
            {text: "A3", correct: false},
            {text: "A4", correct: false}
                ]
    },
    {
        question: "q13?",
        answers: [
            {text: "A1", correct: false},
            {text: "A2", correct: true},
            {text: "A3", correct: false},
            {text: "A4", correct: false}
                ]
    },
    {
        question: "q14?",
        answers: [
            {text: "A1", correct: false},
            {text: "A2", correct: true},
            {text: "A3", correct: false},
            {text: "A4", correct: false}
                ]
    },
    {
        question: "q15?",
        answers: [
            {text: "A1", correct: false},
            {text: "A2", correct: true},
            {text: "A3", correct: false},
            {text: "A4", correct: false}
                ]
    },
    {
        question: "q16?",
        answers: [
            {text: "A1", correct: false},
            {text: "A2", correct: true},
            {text: "A3", correct: false},
            {text: "A4", correct: false}
                ]
    },
    {
        question: "q17?",
        answers: [
            {text: "A1", correct: false},
            {text: "A2", correct: true},
            {text: "A3", correct: false},
            {text: "A4", correct: false}
                ]
    },
    {
        question: "q18?",
        answers: [
            {text: "A1", correct: false},
            {text: "A2", correct: true},
            {text: "A3", correct: false},
            {text: "A4", correct: false}
                ]
    },
    {
        question: "q19?",
        answers: [
            {text: "A1", correct: false},
            {text: "A2", correct: true},
            {text: "A3", correct: false},
            {text: "A4", correct: false}
                ]
    },
    {
        question: "q20?",
        answers: [
            {text: "A1", correct: false},
            {text: "A2", correct: true},
            {text: "A3", correct: false},
            {text: "A4", correct: false}
                ]
    },
    {   
        question: "q21?",
        answers: [
            {text: "A1", correct: false},
            {text: "A2", correct: true},
            {text: "A3", correct: false},
            {text: "A4", correct: false}
                ]
    },
    {
        question: "q22?",
        answers: [
            {text: "A2", correct: true},
            {text: "A1", correct: false},
            {text: "A3", correct: false},
            {text: "A4", correct: false}
                ]
    },
    {
        question: "q23?",
        answers: [
            {text: "A4", correct: false},
            {text: "A1", correct: false},
            {text: "A3", correct: false},
            {text: "A2", correct: true}
                ]
    },
    {
        question: "q24?",
        answers: [
            {text: "A1", correct: false},
            {text: "A2", correct: true},
            {text: "A3", correct: false},
            {text: "A4", correct: false}
                ]
    },
    {
        question: "q52?",
        answers: [
            {text: "A1", correct: false},
            {text: "A2", correct: true},
            {text: "A3", correct: false},
            {text: "A4", correct: false}
                ]
    },
    {
        question: "q?26",
        answers: [
            {text: "A1", correct: false},
            {text: "A2", correct: true},
            {text: "A3", correct: false},
            {text: "A4", correct: false}
                ]
    },
    {
        question: "q27?",
     answers: [
            {text: "A1", correct: false},
            {text: "A2", correct: true},
            {text: "A3", correct: false},
            {text: "A4", correct: false}
                ]
    },
    {
        question: "q28?",
        answers: [
            {text: "A1", correct: false},
            {text: "A2", correct: true},
            {text: "A3", correct: false},
            {text: "A4", correct: false}
                ]
    },
    {
        question: "q29?",
        answers: [
            {text: "A1", correct: false},
            {text: "A2", correct: true},
            {text: "A3", correct: false},
            {text: "A4", correct: false}
                ]
    },
{
    question: "q30?",
    answers: [
        {text: "A1", correct: false},
        {text: "A2", correct: true},
        {text: "A3", correct: false},
        {text: "A4", correct: false}
            ]
},
{
    question: "q31?",
    answers: [
        {text: "A1", correct: false},
        {text: "A2", correct: true},
        {text: "A3", correct: false},
        {text: "A4", correct: false}
            ]
},
{
    question: "q32?",
    answers: [
        {text: "A1", correct: false},
        {text: "A2", correct: true},
        {text: "A3", correct: false},
        {text: "A4", correct: false}
            ]
},
{
    question: "q33?",
    answers: [
        {text: "A1", correct: false},
        {text: "A2", correct: true},
        {text: "A3", correct: false},
        {text: "A4", correct: false}
            ]
},
{
    question: "q34?",
    answers: [
        {text: "A1", correct: false},
        {text: "A2", correct: true},
        {text: "A3", correct: false},
        {text: "A4", correct: false}
            ]
},
{
    question: "q35?",
    answers: [
        {text: "A1", correct: false},
        {text: "A2", correct: true},
        {text: "A3", correct: false},
        {text: "A4", correct: false}
            ]
},
{
    question: "q36?",
    answers: [
        {text: "A1", correct: false},
        {text: "A2", correct: true},
        {text: "A3", correct: false},
        {text: "A4", correct: false}
            ]
},
{
    question: "q37?",
    answers: [
        {text: "A1", correct: false},
        {text: "A2", correct: true},
        {text: "A3", correct: false},
        {text: "A4", correct: false}
            ]
},
{
    question: "q38?",
    answers: [
        {text: "A1", correct: false},
        {text: "A2", correct: true},
        {text: "A3", correct: false},
        {text: "A4", correct: false}
            ]
},
{
    question: "q39?",
    answers: [
        {text: "A1", correct: false},
        {text: "A2", correct: true},
        {text: "A3", correct: false},
        {text: "A4", correct: false}
            ]
},
{
    question: "q40?",
    answers: [
        {text: "A1", correct: false},
        {text: "A2", correct: true},
        {text: "A3", correct: false},
        {text: "A4", correct: false}
            ]
},
{
    question: "q41?",
    answers: [
        {text: "A1", correct: false},
        {text: "A2", correct: true},
        {text: "A3", correct: false},
        {text: "A4", correct: false}
            ]
},
{
    question: "q42?",
    answers: [
        {text: "A2", correct: true},
        {text: "A1", correct: false},
        {text: "A3", correct: false},
        {text: "A4", correct: false}
            ]
},
{
    question: "q43?",
    answers: [
        {text: "A4", correct: false},
        {text: "A1", correct: false},
        {text: "A3", correct: false},
        {text: "A2", correct: true}
            ]
},
{
    question: "q44?",
    answers: [
        {text: "A1", correct: false},
        {text: "A2", correct: true},
        {text: "A3", correct: false},
        {text: "A4", correct: false}
            ]
},
{
    question: "q45?",
    answers: [
        {text: "A1", correct: false},
        {text: "A2", correct: true},
        {text: "A3", correct: false},
        {text: "A4", correct: false}
            ]
},
{
    question: "q?46",
    answers: [
        {text: "A1", correct: false},
        {text: "A2", correct: true},
        {text: "A3", correct: false},
        {text: "A4", correct: false}
            ]
},
{
    question: "q47?",
    answers: [
        {text: "A1", correct: false},
        {text: "A2", correct: true},
        {text: "A3", correct: false},
        {text: "A4", correct: false}
            ]
},
{
    question: "q48?",
    answers: [
        {text: "A1", correct: false},
        {text: "A2", correct: true},
        {text: "A3", correct: false},
        {text: "A4", correct: false}
            ]
},
{
    question: "q49?",
    answers: [
        {text: "A1", correct: false},
        {text: "A2", correct: true},
        {text: "A3", correct: false},
        {text: "A4", correct: false}
            ]
},
{
    question: "q50?",
    answers: [
        {text: "A1", correct: false},
        {text: "A2", correct: true},
        {text: "A3", correct: false},
        {text: "A4", correct: false}
            ]
},
{
    question: "q52?",
    answers: [
        {text: "A2", correct: true},
        {text: "A1", correct: false},
        {text: "A3", correct: false},
        {text: "A4", correct: false}
            ]
},
{
    question: "q53?",
    answers: [
        {text: "A4", correct: false},
        {text: "A1", correct: false},
        {text: "A3", correct: false},
        {text: "A2", correct: true}
            ]
},
{
    question: "q54?",
    answers: [
        {text: "A1", correct: false},
        {text: "A2", correct: true},
        {text: "A3", correct: false},
        {text: "A4", correct: false}
            ]
},
{
    question: "q55?",
    answers: [
        {text: "A1", correct: false},
        {text: "A2", correct: true},
        {text: "A3", correct: false},
        {text: "A4", correct: false}
            ]
},
{
    question: "q?56",
    answers: [
        {text: "A1", correct: false},
        {text: "A2", correct: true},
        {text: "A3", correct: false},
        {text: "A4", correct: false}
            ]
},
{
    question: "q57?",
    answers: [
        {text: "A1", correct: false},
        {text: "A2", correct: true},
        {text: "A3", correct: false},
        {text: "A4", correct: false}
            ]
},
{
    question: "q58?",
    answers: [
        {text: "A1", correct: false},
        {text: "A2", correct: true},
        {text: "A3", correct: false},
        {text: "A4", correct: false}
            ]
},
{
    question: "q59?",
    answers: [
        {text: "A1", correct: false},
        {text: "A2", correct: true},
        {text: "A3", correct: false},
        {text: "A4", correct: false}
            ]
},
{
    question: "q60?",
    answers: [
        {text: "A1", correct: false},
        {text: "A2", correct: true},
        {text: "A3", correct: false},
        {text: "A4", correct: false}
            ]
},
{
    question: "q61?",
    answers: [
        {text: "A1", correct: false},
        {text: "A2", correct: true},
        {text: "A3", correct: false},
        {text: "A4", correct: false}
            ]
},
{
    question: "q62?",
    answers: [
        {text: "A1", correct: false},
        {text: "A2", correct: true},
        {text: "A3", correct: false},
        {text: "A4", correct: false}
            ]
},
{
    question: "q63?",
    answers: [
        {text: "A1", correct: false},
        {text: "A2", correct: true},
        {text: "A3", correct: false},
        {text: "A4", correct: false}
            ]
},
{
    question: "q64?",
    answers: [
        {text: "A1", correct: false},
        {text: "A2", correct: true},
        {text: "A3", correct: false},
        {text: "A4", correct: false}
            ]
},
{
    question: "q65?",
    answers: [
        {text: "A1", correct: false},
        {text: "A2", correct: true},
        {text: "A3", correct: false},
        {text: "A4", correct: false}
            ]
},
{
    question: "q66?",
    answers: [
        {text: "A1", correct: false},
        {text: "A2", correct: true},
        {text: "A3", correct: false},
        {text: "A4", correct: false}
            ]
},
{
    question: "q67?",
    answers: [
        {text: "A1", correct: false},
        {text: "A2", correct: true},
        {text: "A3", correct: false},
        {text: "A4", correct: false}
            ]
},
{
    question: "q68?",
    answers: [
        {text: "A1", correct: false},
        {text: "A2", correct: true},
        {text: "A3", correct: false},
        {text: "A4", correct: false}
            ]
},
{
    question: "q69?",
    answers: [
        {text: "A1", correct: false},
        {text: "A2", correct: true},
        {text: "A3", correct: false},
        {text: "A4", correct: false}
            ]
},
{
    question: "q70?",
    answers: [
        {text: "A1", correct: false},
        {text: "A2", correct: true},
        {text: "A3", correct: false},
        {text: "A4", correct: false}
            ]
},
{   
question: "q71?",
answers: [
    {text: "A1", correct: false},
    {text: "A2", correct: true},
    {text: "A3", correct: false},
    {text: "A4", correct: false}
        ]
},
{
question: "q72?",
answers: [
    {text: "A2", correct: true},
    {text: "A1", correct: false},
    {text: "A3", correct: false},
    {text: "A4", correct: false}
        ]
},
{
question: "q73?",
answers: [
    {text: "A4", correct: false},
    {text: "A1", correct: false},
    {text: "A3", correct: false},
    {text: "A2", correct: true}
        ]
},
{
question: "q74?",
answers: [
    {text: "A1", correct: false},
    {text: "A2", correct: true},
    {text: "A3", correct: false},
    {text: "A4", correct: false}
        ]
},
{
question: "q72?",
answers: [
    {text: "A1", correct: false},
    {text: "A2", correct: true},
    {text: "A3", correct: false},
    {text: "A4", correct: false}
        ]
},
{
question: "q?76",
answers: [
    {text: "A1", correct: false},
    {text: "A2", correct: true},
    {text: "A3", correct: false},
    {text: "A4", correct: false}
        ]
},
{
question: "q77?",
answers: [
    {text: "A1", correct: false},
    {text: "A2", correct: true},
    {text: "A3", correct: false},
    {text: "A4", correct: false}
        ]
},
{
question: "q78?",
answers: [
    {text: "A1", correct: false},
    {text: "A2", correct: true},
    {text: "A3", correct: false},
    {text: "A4", correct: false}
        ]
},
{
question: "q79?",
answers: [
    {text: "A1", correct: false},
    {text: "A2", correct: true},
    {text: "A3", correct: false},
    {text: "A4", correct: false}
        ]
},
{
question: "q80?",
answers: [
    {text: "A1", correct: false},
    {text: "A2", correct: true},
    {text: "A3", correct: false},
    {text: "A4", correct: false}
        ]
},
{
question: "q81?",
answers: [
    {text: "A1", correct: false},
    {text: "A2", correct: true},
    {text: "A3", correct: false},
    {text: "A4", correct: false}
        ]
},
{
question: "q82?",
answers: [
    {text: "A1", correct: false},
    {text: "A2", correct: true},
    {text: "A3", correct: false},
    {text: "A4", correct: false}
        ]
},
{
question: "q83?",
answers: [
    {text: "A1", correct: false},
    {text: "A2", correct: true},
    {text: "A3", correct: false},
    {text: "A4", correct: false}
        ]
},
{
question: "q84?",
answers: [
    {text: "A1", correct: false},
    {text: "A2", correct: true},
    {text: "A3", correct: false},
    {text: "A4", correct: false}
        ]
},
{
question: "q85?",
answers: [
    {text: "A1", correct: false},
    {text: "A2", correct: true},
    {text: "A3", correct: false},
    {text: "A4", correct: false}
        ]
},
{
question: "q86?",
answers: [
    {text: "A1", correct: false},
    {text: "A2", correct: true},
    {text: "A3", correct: false},
    {text: "A4", correct: false}
        ]
},
{
question: "q87?",
answers: [
    {text: "A1", correct: false},
    {text: "A2", correct: true},
    {text: "A3", correct: false},
    {text: "A4", correct: false}
        ]
},
{
question: "q88?",
answers: [
    {text: "A1", correct: false},
    {text: "A2", correct: true},
    {text: "A3", correct: false},
    {text: "A4", correct: false}
        ]
},
{
question: "q89?",
answers: [
    {text: "A1", correct: false},
    {text: "A2", correct: true},
    {text: "A3", correct: false},
    {text: "A4", correct: false}
        ]
},
{
question: "q90?",
answers: [
    {text: "A1", correct: false},
    {text: "A2", correct: true},
    {text: "A3", correct: false},
    {text: "A4", correct: false}
        ]
},
{
    question: "q91?",
    answers: [
        {text: "A1", correct: false},
        {text: "A2", correct: true},
        {text: "A3", correct: false},
        {text: "A4", correct: false}
            ]
    },
    {
    question: "q92?",
    answers: [
        {text: "A1", correct: false},
        {text: "A2", correct: true},
        {text: "A3", correct: false},
        {text: "A4", correct: false}
            ]
    },
    {
    question: "q93?",
    answers: [
        {text: "A1", correct: false},
        {text: "A2", correct: true},
        {text: "A3", correct: false},
        {text: "A4", correct: false}
            ]
    },
    {
    question: "q94?",
    answers: [
        {text: "A1", correct: false},
        {text: "A2", correct: true},
        {text: "A3", correct: false},
        {text: "A4", correct: false}
            ]
    },
    {
    question: "q95?",
    answers: [
        {text: "A1", correct: false},
        {text: "A2", correct: true},
        {text: "A3", correct: false},
        {text: "A4", correct: false}
            ]
    },
    {
    question: "q96?",
    answers: [
        {text: "A1", correct: false},
        {text: "A2", correct: true},
        {text: "A3", correct: false},
        {text: "A4", correct: false}
            ]
    },
    {
    question: "q97?",
    answers: [
        {text: "A1", correct: false},
        {text: "A2", correct: true},
        {text: "A3", correct: false},
        {text: "A4", correct: false}
            ]
    },
    {
    question: "q98?",
    answers: [
        {text: "A1", correct: false},
        {text: "A2", correct: true},
        {text: "A3", correct: false},
        {text: "A4", correct: false}
            ]
    },
    {
    question: "q99?",
    answers: [
        {text: "A1", correct: false},
        {text: "A2", correct: true},
        {text: "A3", correct: false},
        {text: "A4", correct: false}
            ]
    },
    {
    question: "q100?",
    answers: [
        {text: "A1", correct: false},
        {text: "A2", correct: true},
        {text: "A3", correct: false},
        {text: "A4", correct: false}
            ]
    }
];