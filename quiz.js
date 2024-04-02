// Sample quiz questions and choices
var quizData = [
    {
        question: "How do you typically feel in cold weather?",
        choices: ["Very Cold: I often feel excessively cold and require layers to keep warm.", "Moderate: I feel somewhat cold, but it's manageable with appropriate clothing.", "Comfortable: I generally feel comfortable in cold weather."]
    },
    {
        question: "How do you typically feel in hot weather?",
        choices: ["Overheated: I easily feel overheated and prefer cooler environments.", "Moderate: I can tolerate heat fairly well but may feel uncomfortable in extreme heat.", "Comfortable: I generally feel comfortable in hot weather."]
    },
    {
        question: "How consistent is your appetite throughout the day?",
        choices: ["Variable: My appetite fluctuates throughout the day.", "Moderate: My appetite remains relatively stable.", "Consistent: I have a strong, steady appetite."]
    },
    {
        question: "How would you describe your digestion?",
        choices: ["Irregular/Variable: My digestion tends to be irregular, with occasional issues.", "Moderate: My digestion is generally stable, with occasional minor issues.", "Strong: I have a robust digestion with minimal issues."]
    },
    {
        question: "How would you describe your level of physical activity?",
        choices: ["Low: I prefer a more sedentary lifestyle with minimal physical activity.", "Moderate: I engage in regular, moderate exercise.", "High: I'm generally very active and enjoy vigorous exercise."]
    },
    {
        question: "How do you usually sleep?",
        choices: ["Light/Interrupted: I tend to have light sleep and may wake up frequently during the night.", "Moderate: I have relatively sound sleep but may wake up occasionally.", "Deep/Heavy: I usually sleep deeply and wake up feeling refreshed."]
    },
    {
        question: "How would you describe your energy levels throughout the day?",
        choices: ["Variable: My energy levels fluctuate throughout the day.", "Moderate: I have consistent energy levels with occasional fluctuations.", "Stable: I generally have stable and sustained energy throughout the day."]
    },
    {
        question: "How would you describe your skin texture?",
        choices: ["Dry/Rough: My skin tends to be dry and rough.", "Sensitive/Red: My skin is sensitive and prone to redness or irritation.", "Oily/Smooth: My skin tends to be oily and smooth."]
    },
    {
        question: "How would you describe your hair texture?",
        choices: ["Dry/Frizzy: My hair is dry and prone to frizziness.", "Fine/Thin: My hair is fine and tends to be thin.", "Thick/Lustrous: My hair is thick and lustrous."]
    },
    {
        question: "How stable are your moods?",
        choices: ["Variable: My moods tend to fluctuate frequently.", "Intense: I have strong and intense emotions.", "Stable: I'm generally emotionally stable."]
    },
    {
        question: "How do you typically respond to stress?",
        choices: ["Anxious/Worried: I tend to feel anxious or worried when stressed.", "Irritated/Angry: I become easily irritated or angry when stressed.", "Withdrawn/Calm: I tend to withdraw or remain calm when stressed."]
    },
    {
        question: "How would you rate your memory and concentration?",
        choices: ["Variable/Poor: My memory and concentration tend to be variable or poor.", "Moderate: My memory and concentration are average.", "Sharp: I have a sharp memory and good concentration."]
    },
    {
        question: "How often do you feel thirsty?",
        choices: ["Frequent: I often feel thirsty and drink large amounts of water.", "Moderate: I feel thirsty occasionally and drink moderate amounts of water.", "Rare: I rarely feel thirsty and drink small amounts of water."]
    },
    {
        question: "What is the color of your hair?",
        choices: ["Dark: My hair color is predominantly dark (black or dark brown).", "Moderate: My hair color is moderate (medium brown or chestnut).", "Light: My hair color is light (blonde or light brown)."]
    },
    {
        question: "How would you describe the texture of your nails?",
        choices: ["Brittle: My nails are brittle and prone to breakage.", "Soft/Thin: My nails are soft and thin.", "Strong/Thick: My nails are strong and thick."]
    },
    {
        question: "How would you describe your joint flexibility?",
        choices: ["Stiff/Tight: My joints tend to be stiff or tight.", "Average: My joint flexibility is average.", "Flexible: I have good joint flexibility."]
    }
    
];

var currentQuestion = 0;
var userSelections = [];

// Function to load question and choices
function loadQuestion() {
    var question = quizData[currentQuestion];
    var html = "<div class='question-container'>";
    html += "<div class='question'>" + question.question + "</div>";
    html += "<div class='choice-container'>";
    for (var i = 0; i < question.choices.length; i++) {
        html += "<div class='choice' onclick='selectChoice(this)' data-index='" + i + "'>" + question.choices[i] + "</div>";
    }
    html += "</div>";
    html += "</div>";
    document.getElementById("questionContainer").innerHTML = html;
}

function selectChoice(choice) {
    var choices = document.querySelectorAll('.choice');
    choices.forEach(function(ch) {
        if (ch.parentNode === choice.parentNode) {
            ch.classList.remove('selected');
        }
    });

    // Add 'selected' class to the clicked choice
    choice.classList.add('selected');

    // Update user selections
    var selectedIndex = parseInt(choice.getAttribute('data-index'));
    userSelections[currentQuestion] = selectedIndex;
}


// Function to move to the next question
function nextQuestion() {
    currentQuestion++;
    if (currentQuestion < quizData.length) {
        loadQuestion();
    } else {
        // If all questions answered, store user selections and redirect to results page
        localStorage.setItem('quizSelections', JSON.stringify(userSelections));
        window.location.href = "results.html";
    }
}

// Function to move to the previous question
function prevQuestion() {
    if (currentQuestion > 0) {
        currentQuestion--;
        loadQuestion();
    }
}

// Load the first question when the page loads
loadQuestion();
