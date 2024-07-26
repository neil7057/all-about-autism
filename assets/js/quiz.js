const quizFeedback = [
    "1-3: Oh dear, more reading required",
    "1-3: Oh dear, more reading required",
    "1-3: Oh dear, more reading required",
    "4-6: A bit low but you tried!",
    "4-6: A bit low but you tried!",
    "4-6: A bit low but you tried!",
    "7-9: Getting there, Good effort.",
    "7-9: Getting there, Good effort.",
    "7-9: Getting there, Good effort.",
    "10 points: Pretty Good!",
    "11 points: So close!",
    "12 points: Superstar, try some more Questions."
];

const questions = [
    {
        question: "What is Autism1?",
        answers: [
            {text: "A Disease without cure", correct: false},
            {text: "A neurological condition", correct: true},
            {text: "A disease but not contagious", correct: false},
            {text: "Doesn't really exist", correct: false}
                ]
    },
    {
        question: "What is Autism2?",
        answers: [
            {text: "A neurological condition", correct: true},
            {text: "A Disease without cure", correct: false},
            {text: "A disease but not contagious", correct: false},
            {text: "Doesn't really exist", correct: false}
                ]
    },
    {
        question: "What is Autism3?",
        answers: [
            {text: "Doesn't really exist", correct: false},
            {text: "A Disease without cure", correct: false},
            {text: "A disease but not contagious", correct: false},
            {text: "A neurological condition", correct: true}
                ]
    },
    {
        question: "What is Autism4?",
        answers: [
            {text: "A Disease without cure", correct: false},
            {text: "A neorological condition", correct: true},
            {text: "A disease but not contagious", correct: false},
            {text: "Doesn't really exist", correct: false}
                ]
    }
];

//     {
//         question: "What is Autism5?",
//         answers: [
//             {text: "A Disease without cure", correct: false},
//             {text: "A neorological condition", correct: true},
//             {text: "A diseas but not contagious", correct: false},
//             {text: "Doesn't really exist", correct: false}
//                 ]
//     },
//     {
//         question: "What is Autism?6",
//         answers: [
//             {text: "A Disease without cure", correct: false},
//             {text: "A neorological condition", correct: true},
//             {text: "A diseas but not contagious", correct: false},
//             {text: "Doesn't really exist", correct: false}
//                 ]
//     },
//     {
//         question: "What is Autism7?",
//         answers: [
//             {text: "A Disease without cure", correct: false},
//             {text: "A neorological condition", correct: true},
//             {text: "A diseas but not contagious", correct: false},
//             {text: "Doesn't really exist", correct: false}
//                 ]
//     },
//     {
//         question: "What is Autism8?",
//         answers: [
//             {text: "A Disease without cure", correct: false},
//             {text: "A neorological condition", correct: true},
//             {text: "A diseas but not contagious", correct: false},
//             {text: "Doesn't really exist", correct: false}
//                 ]
//     },
//     {
//         question: "What is Autism9?",
//         answers: [
//             {text: "A Disease without cure", correct: false},
//             {text: "A neorological condition", correct: true},
//             {text: "A diseas but not contagious", correct: false},
//             {text: "Doesn't really exist", correct: false}
//                 ]
//     },
//     {
//         question: "What is Autism10?",
//         answers: [
//             {text: "A Disease without cure", correct: false},
//             {text: "A neorological condition", correct: true},
//             {text: "A diseas but not contagious", correct: false},
//             {text: "Doesn't really exist", correct: false}
//                 ]
//     },
//     {
//         question: "What is Autism11?",
//         answers: [
//             {text: "A Disease without cure", correct: false},
//             {text: "A neorological condition", correct: true},
//             {text: "A diseas but not contagious", correct: false},
//             {text: "Doesn't really exist", correct: false}
//                 ]
//     },
//     {
//         question: "What is Autism12?",
//         answers: [
//             {text: "A Disease without cure", correct: false},
//             {text: "A neorological condition", correct: true},
//             {text: "A diseas but not contagious", correct: false},
//             {text: "Doesn't really exist", correct: false}
//                 ]
//     },
//     {
//         question: "What is Autism13?",
//         answers: [
//             {text: "A Disease without cure", correct: false},
//             {text: "A neorological condition", correct: true},
//             {text: "A diseas but not contagious", correct: false},
//             {text: "Doesn't really exist", correct: false}
//                 ]
//     },
//     {
//         question: "What is Autism14?",
//         answers: [
//             {text: "A Disease without cure", correct: false},
//             {text: "A neorological condition", correct: true},
//             {text: "A diseas but not contagious", correct: false},
//             {text: "Doesn't really exist", correct: false}
//                 ]
//     },
//     {
//         question: "What is Autism15?",
//         answers: [
//             {text: "A Disease without cure", correct: false},
//             {text: "A neorological condition", correct: true},
//             {text: "A diseas but not contagious", correct: false},
//             {text: "Doesn't really exist", correct: false}
//                 ]
//     },
//     {
//         question: "What is Autism16?",
//         answers: [
//             {text: "A Disease without cure", correct: false},
//             {text: "A neorological condition", correct: true},
//             {text: "A diseas but not contagious", correct: false},
//             {text: "Doesn't really exist", correct: false}
//                 ]
//     },
//     {
//         question: "What is Autism17?",
//         answers: [
//             {text: "A Disease without cure", correct: false},
//             {text: "A neorological condition", correct: true},
//             {text: "A diseas but not contagious", correct: false},
//             {text: "Doesn't really exist", correct: false}
//                 ]
//     },
//     {
//         question: "What is Autism18?",
//         answers: [
//             {text: "A Disease without cure", correct: false},
//             {text: "A neorological condition", correct: true},
//             {text: "A diseas but not contagious", correct: false},
//             {text: "Doesn't really exist", correct: false}
//                 ]
//     },
//     {
//         question: "What is Autism19?",
//         answers: [
//             {text: "A Disease without cure", correct: false},
//             {text: "A neorological condition", correct: true},
//             {text: "A diseas but not contagious", correct: false},
//             {text: "Doesn't really exist", correct: false}
//                 ]
//     },
//     {
//         question: "What is Autism20?",
//         answers: [
//             {text: "A Disease without cure", correct: false},
//             {text: "A neorological condition", correct: true},
//             {text: "A diseas but not contagious", correct: false},
//             {text: "Doesn't really exist", correct: false}
//                 ]
//     }
// ];