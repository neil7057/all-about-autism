/*jshint esversion: 6 */

// This file contains arrays for questions and quizFeedback, main js processing is in scripts.js

const quizFeedback = [
    "0: Oh Dear, Not Really Trying?",
    "1-3: Oh Dear, More Reading Required",
    "1-3: Oh Dear, More Reading Required",
    "1-3: A bit Low But You Tried!",
    "4-6: A bit Low But You Tried!",
    "4-6: A bit Low But You Tried!",
    "4-6: Getting There, Good Effort.",
    "7-9: Getting There, Good Effort.",
    "7-9: Getting There, Good Effort.",
    "7-9: Getting There, Good Effort.",
    "10 Points: Pretty Good!",
    "11 Points: So Close!",
    "12 Points: Superstar, Try Some More Questions."
];

const fullQuestions = [
    {
        question: "What is Autism?",
        answers: [
            {text: "A Disease", correct: false},
            {text: "A Neurological Condition", correct: true},
            {text: "A Modern Fad", correct: false},
            {text: "A Fictional Condition", correct: false}
                ]
    },
    {
        question: "Autism is a Modern Condition",
        answers: [
            {text: "It's likely been around for Millenia", correct: true},
            {text: "It's about 20 years old", correct: false},
            {text: "Only since the 1950's", correct: false},
            {text: "Its started after WW1", correct: false}
                ]
    },
    {
        question: "Who Was Hans Aspberger",
        answers: [
            {text: "A German Industrialist", correct: false},
            {text: "Goalkeeper for Bayern Munich", correct: false},
            {text: "King of Bavaria", correct: false},
            {text: "A Pioneer in Autism", correct: true}
                ]
    },
    {
        question: "Where is Autism Officially Classified in The USA",
        answers: [
            {text: "The White House", correct: false},
            {text: "US Surgeon General's Office", correct: false},
            {text: "Diagnostic and Statistical Manual of Mental Disorders 5", correct: true},
            {text: "At 77 Sunset Strip", correct: false}
                ]
    },
    {
        question: "It's 50 years since who first described Classic Autism",
        answers: [
            {text: "Leo Spanner", correct: false},
            {text: "Leo Kanner", correct: true},
            {text: "Leo Banner", correct: false},
            {text: "Leo Sayer", correct: false}
                ]
    },
    {
        question: "A common sign of Autism",
        answers: [
            {text: "Physical Disability", correct: false},
            {text: "Taking Things Literally", correct: true},
            {text: "Inability to Swim", correct: false},
            {text: "Depression", correct: false}
                ]
    },
    {
        question: "A common sign of Autism",
        answers: [
            {text: "Being Aggressive", correct: false},
            {text: "Unable to Sleep", correct: false},
            {text: "A Very 'Fixed Mindset'", correct: true},
            {text: "Star Trek Fan", correct: false}
                ]
    },
    {
        question: "A common sign of Autism",
        answers: [
            {text: "Unable to Make Friends", correct: true},
            {text: "Outgoing and Noisy", correct: false},
            {text: "Good at Art", correct: false},
            {text: "Travel Sickness", correct: false}
                ]
    },
    {
        question: "A common sign of Autism",
        answers: [
            {text: "Notices Patterns", correct: true},
            {text: "Knits Patterns", correct: false},
            {text: "Studies Patents", correct: false},
            {text: "Very Patient", correct: false}
                ]
    },
    {
        question: "Boys are more likely to be Autistic than Girls",
        answers: [
            {text: "True by a Factor of 3:1", correct: false},
            {text: "False, but Girls can be Harder to Diagnose", correct: true},
            {text: "True by a Factor of 2:1", correct: false},
            {text: "True, It's a Boy Thing", correct: false}
                ]
    },
    {
        question: "Approximately how many Autistic people have a 'Special' Talent",
        answers: [
            {text: "100%", correct: false},
            {text: "10%", correct: true},
            {text: "25%", correct: false},
            {text: "50%", correct: false}
                ]
    },
    {
        question: "Approximately how many Autistic people are there in the UK",
        answers: [
            {text: "1 in Every 75", correct: false},
            {text: "We Don't know", correct: true},
            {text: "1 in Every Town", correct: false},
            {text: "3 Plus My Mate John", correct: false}
                ]
    },
    {
        question: "Approximately how many Autistic people are there identified in the UK",
        answers: [
            {text: "Around 1 in 50", correct: false},
            {text: "Around 700,000", correct: true},
            {text: "More than a Million", correct: false},
            {text: "Under 50,000", correct: false}
                ]
    },
    {
        question: "A common sign of Autism",
        answers: [
            {text: "Maintains Good Eye Contact", correct: false},
            {text: "Avoids Eye Contact", correct: true},
            {text: "Wears Contact Lens", correct: false},
            {text: "Blinks A Lot", correct: false}
                ]
    },
    {
        question: "Autism is a....",
        answers: [
            {text: "Plectrum", correct: false},
            {text: "Spectrum", correct: true},
            {text: "Atrium", correct: false},
            {text: "Compendium", correct: false}
                ]
    },
    {
        question: "All Autistic Adults and children have the same Strengths",
        answers: [
            {text: "Broadly Speaking, Yes", correct: false},
            {text: "No, Everyone is an Individual", correct: true},
            {text: "All Children are The Same", correct: false},
            {text: "Yes, and The Same Weaknesses", correct: false}
                ]
    },
    {
        question: "All Autistic Adults and children have the same Weaknesses",
        answers: [
            {text: "Correct, They're Clones", correct: false},
            {text: "Incorrect, They're all Individuals", correct: true},
            {text: "Correct, They Have The same Brain Structure", correct: false},
            {text: "Correct", correct: false}
                ]
    },
    {
        question: "All Autistic Adults and children have the same Abilities",
        answers: [
            {text: "Correct, They're Clones", correct: false},
            {text: "Correct, They're All Great at Maths", correct: false},
            {text: "Correct, But It's Not a Good Thing", correct: false},
            {text: "Incorrect, They're All Individuals", correct: true}
                ]
    },
    {
        question: "All Autistic Adults and children have the same IQ",
        answers: [
            {text: "Correct, They're All a Mini-Genius", correct: false},
            {text: "Correct, They Have The Same Brain structure", correct: false},
            {text: "Incorrect, They're All Individuals", correct: true},
            {text: "Correct, Below Average", correct: false}
                ]
    },
    {
        question: "Aspbergers is now out of fashion as a label because",
        answers: [
            {text: "He wasn't American", correct: false},
            {text: "He was a bit of a Nazi", correct: true},
            {text: "He lived too long ago", correct: false},
            {text: "We've moved to other letters of the Alphabet", correct: false}
                ]
    },
    {   
        question: "To check you're paying attention, select 'I'm Spartacus'",
        answers: [
            {text: "No, I'm Spartacus", correct: false},
            {text: "I'm Spartacus", correct: true},
            {text: "And So's My Brother", correct: false},
            {text: "Welease Woderick", correct: false}
                ]
    },
    {
        question: "The Autism Spectrum is",
        answers: [
            {text: "Used to Demonstrate the Range of Autism", correct: true},
            {text: "A 1980's Computer", correct: false},
            {text: "A US Rock Band", correct: false},
            {text: "Used to Play a Guitar", correct: false}
                ]
    },
    {
        question: "Autism Spectrum is often replaced by:",
        answers: [
            {text: "Rainbow", correct: false},
            {text: "Variety", correct: false},
            {text: "Ability", correct: false},
            {text: "Constellation", correct: true}
                ]
    },
    {
        question: "Autism is usually represented by:",
        answers: [
            {text: "Red and Green", correct: false},
            {text: "A Rainbow", correct: true},
            {text: "Purple and Blue", correct: false},
            {text: "Black and White", correct: false}
                ]
    },
    {
        question: "Those with Autism always have additional medical conditions",
        answers: [
            {text: "It's Common But Not Universal", correct: true},
            {text: "Always", correct: false},
            {text: "Either ADHD or Depression", correct: false},
            {text: "Usually a Physical Disability", correct: false}
                ]
    },
    {
        question: "The Main Difference between 'Aspbergers' and Autism is:",
        answers: [
            {text: "IQ Level", correct: false},
            {text: "Speech Delay Around Milestones", correct: true},
            {text: "Hair Colour", correct: false},
            {text: "Maths Abilities", correct: false}
                ]
    },
    {
        question: "Non-Verbal means unable to Communicate",
     answers: [
            {text: "Correct, Speech is Essential", correct: false},
            {text: "Incorrect, Approximately 93% of All Communication is Non-Verbal", correct: true},
            {text: "Correct, That's What Separates us From Animals", correct: false},
            {text: "Incorrect, 50% of All Communication is Non-Verbal", correct: false}
                ]
    },
    {
        question: "All Autistics are Late to Talk",
        answers: [
            {text: "By at Least 2 years", correct: false},
            {text: "Untrue, it Varies", correct: true},
            {text: "Earliest Speech is at Age 5", correct: false},
            {text: "It's a Sure Sign of Autism", correct: false}
                ]
    },
    {
        question: "Stimming is",
        answers: [
            {text: "Slang for Fast Swimming", correct: false},
            {text: "Done With a Stim Stick", correct: false},
            {text: "Another Name for Cliff Diving", correct: false},
            {text: "Self Stimulatory Behaviour", correct: true}
                ]
    },
    {
        question: "High-Functioning is a more accurate term for",
        answers: [
            {text: "Tall People", correct: false},
            {text: "Aspbergers", correct: true},
            {text: "Masking", correct: false},
            {text: "Crane Drivers", correct: false}
                ]
    },
    {
        question: "The Main Cure for Autism is",
        answers: [
            {text: "Medication", correct: false},
            {text: "There is No Cure", correct: true},
            {text: "Physical Therapy", correct: false},
            {text: "Tough Love", correct: false}
                ]
    },
    {
        question: "The Puzzle Pattern Logo is",
        answers: [
            {text: "Favoured by All", correct: false},
            {text: "Used by Jigsaw Enthusiasts", correct: false},
            {text: "New", correct: false},
            {text: "Mostly Out of Favour", correct: true}
                ]
    },
    {
        question: "An Example of Stimming is",
        answers: [
            {text: "Watching Netflix", correct: false},
            {text: "Hand Flapping", correct: true},
            {text: "Fishing", correct: false},
            {text: "Talking Too Loud", correct: false}
                ]
    },
    {
        question: "An Example of Stimming is",
        answers: [
            {text: "Insomnia", correct: false},
            {text: "Echolalia", correct: true},
            {text: "Australia", correct: false},
            {text: "Somnambulism", correct: false}
                ]
    },
    {
        question: "Echolalia is",
        answers: [
            {text: "Sleep Walking", correct: false},
            {text: "Available on The NHS", correct: false},
            {text: "Repeating Back Sounds or Phrases", correct: true},
            {text: "A 1990s Girl Band", correct: false}
                ]
    },
    {
        question: "Stimming is used to ",
        answers: [
            {text: "Annoy Others", correct: false},
            {text: "Self-Calm", correct: true},
            {text: "Stir Your Tea", correct: false},
            {text: "Froth Milk in a Latte", correct: false}
                ]
    },
    {
        question: "Stimming is restricted to Autism",
        answers: [
            {text: "Yes, It's Unique", correct: false},
            {text: "It's Only seen in Autism", correct: false},
            {text: "Clearly", correct: false},
            {text: "No, We All Do it to a Lesser Extent", correct: true}
                ]
    },
    {
        question: "What are Essential for a Diagnosis",
        answers: [
            {text: "OCD and Insomnia", correct: false},
            {text: "Social Communication & Interaction Difficulties", correct: true},
            {text: "Low IQ and Behavioural Problems", correct: false},
            {text: "Restlessness and Poor Attention Span", correct: false}
                ]
    },
    {
        question: "A Meltdown is",
        answers: [
            {text: "Cheese on Toast", correct: false},
            {text: "A Temporary Loss of Control ", correct: true},
            {text: "Just Being Naughty", correct: false},
            {text: "The Parents' Fault", correct: false}
                ]
    },
    {
        question: "A Meltdown is",
        answers: [
            {text: "Brought on by Sensory Overload", correct: true},
            {text: "Caused by Bad Parenting", correct: false},
            {text: "Just Naughty Behaviour", correct: false},
            {text: "Wholly Avoidable", correct: false}
                ]
    },
    {
        question: "A Shutdown is",
        answers: [
            {text: "A Washing Machine Fault", correct: false},
            {text: "The Opposite of a Meltdown", correct: true},
            {text: "Not a Feature of Autism", correct: false},
            {text: "Sleeping Too Much", correct: false}
                ]
    },
    {
        question: "A Shutdown is",
        answers: [
            {text: "Withdrawal", correct: true},
            {text: "Nothing to be Worried About", correct: false},
            {text: "Just Being a Bit Quiet", correct: false},
            {text: "A Welcome Break", correct: false}
                ]
    },
    {
        question: "A Shutdown is",
        answers: [
            {text: "Scotland's Annual Holiday", correct: false},
            {text: "A Chance for a Cuppa", correct: false},
            {text: "Nothing to Worry About", correct: false},
            {text: "Caused by a Sensory Overload", correct: true}
                ]
    },
    {
        question: "Vaccines can cause Autism",
        answers: [
            {text: "Absolutely, A Doctor Proved it", correct: false},
            {text: "A Debunked, Potty Theory", correct: true},
            {text: "Probably That or 5G", correct: false},
            {text: "Could be The Mercury", correct: false}
                ]
    },
    {
        question: "Autism means a lack of Empathy",
        answers: [
            {text: "Its a Classic Sign", correct: false},
            {text: "Without Exception", correct: false},
            {text: "Sometimes, Everyone's Different", correct: true},
            {text: "It's One of the Defining Characteristics", correct: false}
                ]
    },
    {
        question: "Autism means a lack of Emotion",
        answers: [
            {text: "Always, Soulless", correct: false},
            {text: "Mostly Incorrect", correct: true},
            {text: "It's a Classic Sign", correct: false},
            {text: "It's a Defining Characteristic", correct: false}
                ]
    },
    {
        question: "Autism means no Desire for Friends",
        answers: [
            {text: "Correct, Complete Loners", correct: false},
            {text: "They All Prefer to Be Alone", correct: false},
            {text: "Correct, Happy on Their Own", correct: false},
            {text: "False, but Friendships are Hard to Develop", correct: true}
                ]
    },
    {
        question: "It's an Epidemic",
        answers: [
            {text: "Yup. Snowflakes Gone Mad", correct: false},
            {text: "It's Just Better Detected", correct: true},
            {text: "Another 'New' Disease", correct: false},
            {text: "Just Naughty Kids", correct: false}
                ]
    },
    {
        question: "It's just Bad Parents !",
        answers: [
            {text: "Need More Discipline at Home", correct: false},
            {text: "Too Much Screen Time", correct: false},
            {text: "Didn't Happen in My Day", correct: false},
            {text: "It Has Nothing to Do With Parenting", correct: true}
                ]
    },
    {
        question: "It's caused by too many E numbers",
        answers: [
            {text: "Too Many Sweets", correct: false},
            {text: "It's a Brain Disorder!", correct: true},
            {text: "Modern Processed Foods are to Blame", correct: false},
            {text: "Too Much Ice-Cream", correct: false}
                ]
    },
    {
        question: "Can be cured by a Special Diet",
        answers: [
            {text: "Incorrect, It's a Brain Wiring Issue", correct: true},
            {text: "Gluten Free Helps", correct: false},
            {text: "Cutting Out Processed Foods will Cure It", correct: false},
            {text: "True, But You Also Need a Tin-Foil Hat", correct: false}
                ]
    },
    {
        question: "You Can Grow Out of It",
        answers: [
            {text: "Usually by Age 21", correct: false},
            {text: "With Exercise by Age 25", correct: false},
            {text: "By The Late Teens", correct: false},
            {text: "No, But You Can Develop Coping Strategies", correct: true}
                ]
    },
    {
        question: "Masking is:",
        answers: [
            {text: "A Shark", correct: false},
            {text: "Hiding Symptoms to Appear Neurotypical", correct: true},
            {text: "A Technique for Painting", correct: false},
            {text: "What Batman and Robin Do", correct: false}
                ]
    },
    {
        question: "Everyone is a Bit on The Spectrum",
        answers: [
            {text: "No, It's a Brain Wiring Thing", correct: true},
            {text: "Sure, I Have Meltdowns", correct: false},
            {text: "yes, To an Extent", correct: false},
            {text: "yes, We All Get Obsessive Sometimes", correct: false}
                ]
    },
    {
        question: "Autism Develops After Age 3",
        answers: [
            {text: "Yes, Usually Before Age 5", correct: false},
            {text: "No, But That's About the Earliest You Can Detect/Diagnose", correct: true},
            {text: "Yes, Dependant Upon Food Choices", correct: false},
            {text: "Yes, Usually Before Age 10 Though", correct: false}
                ]
    },
    {
        question: "Autism Can be Diagnosed From Birth",
        answers: [
            {text: "Yes, With a Simple Blood Test", correct: false},
            {text: "Yes, But it Needs Two Doctors to Agree", correct: false},
            {text: "Yes, It's Obvious", correct: false},
            {text: "No, Speech Milestones Need to be Reached First", correct: true}
                ]
    },
    {
        question: "Autism is a Lifelong Condition",
        answers: [
            {text: "No, A simple Operation Can Cure It", correct: false},
            {text: "Yes, You Can Learn to Cope Though", correct: true},
            {text: "Only to About Age 40", correct: false},
            {text: "No, It Can be Teated With Drugs", correct: false}
                ]
    },
    {
        question: "Autism Can be Detected by A Simple Blood Test",
        answers: [
            {text: "Yes, Free on The NHS", correct: false},
            {text: "Yes, But You Have to Request It", correct: false},
            {text: "No, It's Not Detectable in The Blood", correct: true},
            {text: "Yes, But It Takes 10 Days For The Results", correct: false}
                ]
    },
    {
        question: "Pregnancy Problems Cause Autism....",
        answers: [
            {text: "Drinking Alcohol Will Trigger It.", correct: false},
            {text: "Not True", correct: true},
            {text: "A Lack of Folic Acid", correct: false},
            {text: "A Poor Diet Will Increase The Likelihood", correct: false}
                ]
    },
    {
        question: "Autistics Have Super Sensitive Hearing",
        answers: [
            {text: "Like a Bat", correct: false},
            {text: "No, But They Can't Filter Things Out", correct: true},
            {text: "About 25% Stronger Than Average", correct: false},
            {text: "Hearing Spectrum Range is Broader", correct: false}
                ]
    },
    {
        question: "Co-occurring Medical Conditions Like Allergies/Asthma are common",
        answers: [
            {text: "No, Rarely Happens", correct: false},
            {text: "No Discernible Link", correct: false},
            {text: "No, It's All in The Mind", correct: false},
            {text: "Yes, But No-one Know's Why", correct: true}
                ]
    },
    {
        question: "Those With ASD are More Likely to Have Seizures by:",
        answers: [
            {text: "No More Likely", correct: false},
            {text: "10 Times", correct: true},
            {text: "The Front Door", correct: false},
            {text: "The Time I Get To Phoenix", correct: false}
                ]
    },
    {
        question: "Hyperlexia is:",
        answers: [
            {text: "Fast Train Travel", correct: false},
            {text: "A Made Up Term", correct: false},
            {text: "The Ability To Read Above One's Age", correct: true},
            {text: "A Marvel Character", correct: false}
                ]
    },
    {
        question: "A Fascination With Words & Numbers is:",
        answers: [
            {text: "Vordermania", correct: false},
            {text: "Hyperlexia", correct: true},
            {text: "Countdown", correct: false},
            {text: "NumberWang", correct: false}
                ]
    },
    {
        question: "Children with Autism are 160 Times..",
        answers: [
            {text: "More likely to Leave School Early", correct: false},
            {text: "More Likely to Die by Drowning", correct: true},
            {text: "Less Likely to Be Employed", correct: false},
            {text: "More Likely to Be a Trainspotter", correct: false}
                ]
    },
    {
        question: "Earlier Diagnosis = Better Outcomes",
        answers: [
            {text: "Makes No Difference", correct: false},
            {text: "Lifetime Support Costs Can be Halved", correct: true},
            {text: "No Firm Data", correct: false},
            {text: "Makes Matters Worse", correct: false}
                ]
    },
    {
        question: "Autism World Awareness Week (AWAW) 2025 is:",
        answers: [
            {text: "10-17 May", correct: false},
            {text: "2-8th April", correct: true},
            {text: "1-8 December", correct: false},
            {text: "There Is No AWAW", correct: false}
                ]
    },
    {
        question: "The World Awareness Week Theme for 2024 Was:",
        answers: [
            {text: "No Pain:No Gain", correct: false},
            {text: "Out From The Shadows", correct: false},
            {text: "Moving From Surviving to Thriving", correct: true},
            {text: "Disney", correct: false}
                ]
    },
    {
        question: "Autism Must be Diagnosed Before Age 25",
        answers: [
            {text: "Yes, You can't be Autistic and Not Know", correct: false},
            {text: "No, There is No Age Limit", correct: true},
            {text: "No, 30 is the Cut Off Date", correct: false},
            {text: "No, It Must be Diagnosed in Childhood", correct: false}
                ]
    },
    {   
    question: "The Autism Spectrum is Linear",
    answers: [
        {text: "Yes, Abilities are Equal", correct: false},
        {text: "No, More of a Constellation", correct: true},
        {text: "Yes, Has to Be..", correct: false},
        {text: "Yes, It's a Spectrum !", correct: false}
            ]
    },
    {
    question: "There Are 3 Main Causes of Autism",
    answers: [
        {text: "We Still Don't Know The Main Cause(s)", correct: true},
        {text: "Yes, Diet, Exercise and Smoking", correct: false},
        {text: "Yes, Mostly Chemicals in The Environment", correct: false},
        {text: "No, There Are Only 2", correct: false}
            ]
    },
    {
    question: "They Line up Toys and Get Upset ..",
    answers: [
        {text: "If It's Lunchtime", correct: false},
        {text: "At Bedtime", correct: false},
        {text: "For No Reason", correct: false},
        {text: "If The Line is Broken or The Order is Changed", correct: true}
            ]
    },
    {
    question: "Their Sense of Danger is:",
    answers: [
        {text: "The Same as Everyone Else", correct: false},
        {text: "Lacking", correct: true},
        {text: "Heightened", correct: false},
        {text: "A New film by Tarrantino", correct: false}
            ]
    },
    {
    question: "Excessively Flapping Hands is a Type of:",
    answers: [
        {text: "Appreciation", correct: false},
        {text: "Stimming", correct: true},
        {text: "Waving", correct: false},
        {text: "Communication", correct: false}
            ]
    },
    {
    question: "Autistics can Self-Calm By:",
    answers: [
        {text: "Having a Shutdown", correct: false},
        {text: "Stimming", correct: true},
        {text: "Having a Meltdown", correct: false},
        {text: "Making a Cup of Tea", correct: false}
            ]
    },
    {
    question: "For Those on The Spectrum, Routine Changes...",
    answers: [
        {text: "Are Easily Handled", correct: false},
        {text: "Don't Happen", correct: false},
        {text: "Make Them Happy", correct: false},
        {text: "Can Trigger a Meltdown", correct: true}
            ]
    },
    {
    question: "Parallel Play is...",
    answers: [
        {text: "On Fantasy Football 2024", correct: false},
        {text: "Playing Side By Side But Independently", correct: true},
        {text: "Not Typical in Autistic Children", correct: false},
        {text: "A Gymnastic Event", correct: false}
            ]
    },
    {
    question: "A Famous Person With Autism",
    answers: [
        {text: "Daniel Craig", correct: false},
        {text: "Elon Musk", correct: true},
        {text: "Carol Vorderman", correct: false},
        {text: "Richard Branson", correct: false}
            ]
    },
    {
    question: "A Famous Person With Autism",
    answers: [
        {text: "Reece Witherspoon", correct: false},
        {text: "Daryl Hannah", correct: true},
        {text: "Julia Roberts", correct: false},
        {text: "Sanda Bullock", correct: false}
            ]
    },
    {
    question: "Which Famous Person Identifies as Autistic?",
    answers: [
        {text: "Tim Burton", correct: false},
        {text: "They All Do!", correct: true},
        {text: "Albert Einstein", correct: false},
        {text: "Dan Ackroyd", correct: false}
            ]
    },
    {
    question: "Which Famous Person Identifies as Autistic?",
    answers: [
        {text: "Anthony Hopkins", correct: false},
        {text: "They All Do!", correct: true},
        {text: "Charles Darwin", correct: false},
        {text: "Bill Gates", correct: false}
            ]
    },
    {
    question: "Which Famous Person Identifies as Autistic?",
    answers: [
        {text: "Michelangelo", correct: false},
        {text: "They All Do!", correct: true},
        {text: "Isaac Newton", correct: false},
        {text: "Alfred Hitchcock", correct: false}
            ]
    },
    {
    question: "Albert Einstein Didn't Talk Until...",
    answers: [
        {text: "He Had Something Worth Saying", correct: false},
        {text: "Aged 4", correct: true},
        {text: "Aged 1", correct: false},
        {text: "Asked To", correct: false}
            ]
    },
    {
    question: "Winston Churchill Didn't Talk Until...",
    answers: [
        {text: "He Became Prime Minister", correct: false},
        {text: "After Lunch", correct: false},
        {text: "5 Years Old", correct: true},
        {text: "He Lit His First Cigar of The Day", correct: false}
            ]
    },
    {
    question: "Causes of Autism are Believed to Be...",
    answers: [
        {text: "Excess Alcohol", correct: false},
        {text: "Genetic & Environmental Influences", correct: true},
        {text: "Too Much Violence on TV", correct: false},
        {text: "Dave From Number 44", correct: false}
            ]
    },
    {
    question: "An Environmental Risk Factor is...",
    answers: [
        {text: "Smoking, Active or Passive", correct: false},
        {text: "Excess Weight", correct: false},
        {text: "Air Pollution", correct: false},
        {text: "Advanced Parental Age", correct: true}
            ]
    },
    {
    question: "Which is a Genetic Risk Factor?",
    answers: [
        {text: "Family History", correct: true},
        {text: "Low Birth Weight", correct: false},
        {text: "Physical Deformity", correct: false},
        {text: "A Parent Under 5Ft Tall", correct: false}
            ]
    },
    {
    question: "Those with Autism are Generally...",
    answers: [
        {text: "Of Below Average Intelligence", correct: false},
        {text: "Strong Visual & Auditory Learners", correct: true},
        {text: "Unable to Learn", correct: false},
        {text: "Unwilling Students", correct: false}
            ]
    },
    {
    question: "Applied Behavioural Analysis (ABA) Therapy...",
    answers: [
        {text: "Rewires The Brain", correct: false},
        {text: "Is a Controversial American Technique", correct: true},
        {text: "Is Proven to Work", correct: false},
        {text: "Is Harmless", correct: false}
            ]
    },
    {
    question: "Between 1998 and 2018 Autism Diagnosis in the UK incresed",
    answers: [
        {text: "Marginally", correct: false},
        {text: "By 787%", correct: true},
        {text: "By 200%", correct: false},
        {text: "It Actually Fell by 10%", correct: false}
            ]
    },
    {
    question: "In 1944, Autism was Diagnosed as...",
    answers: [
        {text: "Still Under Rationing", correct: false},
        {text: "A Vitamin Deficiency", correct: false},
        {text: "Nazi Propaganda", correct: false},
        {text: "1 in 2,500 Children", correct: true}
            ]
    },
    {
    question: "Some Diagnosed Autistics Require Little Support",
    answers: [
        {text: "No, Everyone Needs a Lot of Support", correct: false},
        {text: "True, Some Do Have Low Support Needs", correct: true},
        {text: "Everyone is Deemed to Need Significant Intervention", correct: false},
        {text: "False, It's Gonna Cost Billions", correct: false}
            ]
    },
    {
    question: "It is Estimated That What % of Autistic Adults Over 50 Remain Undiagnosed?",
    answers: [
        {text: "Studies Cite 10%", correct: false},
        {text: "The University of Exter Puts This at Over 90%", correct: true},
        {text: "There Are No Undiagnosed Cases in The Over 50s", correct: false},
        {text: "Who Cares, 50 is Old", correct: false}
            ]
    },
    {
    question: "Why Isn't everyone as Blunt as Me?",
    answers: [
        {text: "Is an Unnecessary Question", correct: false},
        {text: "Isn't an Autistic Trait", correct: false},
        {text: "Says a 'Late Diagnosed Adult' Often", correct: true},
        {text: "Born in The South of The UK", correct: false}
            ]
    },
    {
    question: "Kids on The Spectrum Love Animals",
    answers: [
        {text: "Some Do, Some Freak Out", correct: true},
        {text: "A Family Pet Always Helps", correct: false},
        {text: "True, They Relate Better Than People", correct: false},
        {text: "Dogs Are The Best Pet For an Autistic Chiild", correct: false}
            ]
    },
    {
    question: "The Number of Children Awaiting an Autism Diagnosis Since Covid...",
    answers: [
        {text: "Has Remained Constant", correct: false},
        {text: "Has Increased by 350%", correct: true},
        {text: "Has Doubled", correct: false},
        {text: "Is Unknown", correct: false}
            ]
    },
    {
    question: "UK Studies Estimate What % of Those on The Spectrum Have Poor Mental/Physical Health?",
    answers: [
        {text: "No More Than Those Without The Condition", correct: false},
        {text: "Around 10%", correct: false},
        {text: "70-80%", correct: true},
        {text: "50%", correct: false}
            ]
    },
    {
    question: "What % of UK Child Mental Health Service Referrals are Autism Related?",
    answers: [
        {text: "10%", correct: false},
        {text: "80% in Some Areas", correct: true},
        {text: "20%", correct: false},
        {text: "Too Small to Count", correct: false}
            ]
    },
    {
    question: "Boys Are How Many Times More Likely Than Grls to Be Diagnosed",
    answers: [
        {text: "No More Likely, It's 50:50", correct: false},
        {text: "Almost 4 times", correct: true},
        {text: "Double The Rate", correct: false},
        {text: "Girls Aren't Autistic", correct: false}
            ]
    },
    {
        question: "Which is NOT a sign of Stimming?",
        answers: [
            {text: "Rocking Backwards and Forwards", correct: false},
            {text: "Sleeping", correct: true},
            {text: "Echolalia", correct: false},
            {text: "Hand Flapping", correct: false}
                ]
        }
];