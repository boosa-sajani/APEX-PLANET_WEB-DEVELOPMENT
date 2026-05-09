// ================= EASY COMPUTER QUIZ =================

const quizData = [{
        question: "What does CPU stand for?",
        answers: [
            "Central Processing Unit",
            "Computer Personal Unit",
            "Central Program Utility",
            "Control Processing User"
        ],
        correct: 0
    },

    {
        question: "Which device is used to type text?",
        answers: [
            "Monitor",
            "Keyboard",
            "Mouse",
            "Printer"
        ],
        correct: 1
    },

    {
        question: "Which language is used for web page structure?",
        answers: [
            "CSS",
            "Python",
            "HTML",
            "Java"
        ],
        correct: 2
    },

    {
        question: "Which part of computer shows output?",
        answers: [
            "Monitor",
            "Keyboard",
            "CPU",
            "Scanner"
        ],
        correct: 0
    },

    {
        question: "Which language is used for styling webpages?",
        answers: [
            "HTML",
            "CSS",
            "C++",
            "Python"
        ],
        correct: 1
    }
];

let currentQuestion = 0;
let score = 0;

// Load Question
function loadQuestion() {

    const questionData = quizData[currentQuestion];

    document.getElementById("question").textContent =
        questionData.question;

    const answersDiv =
        document.getElementById("answers");

    answersDiv.innerHTML = "";

    // Create Answer Buttons
    questionData.answers.forEach((answer, index) => {

        const button =
            document.createElement("button");

        button.textContent = answer;

        button.onclick = () => selectAnswer(index);

        answersDiv.appendChild(button);

    });
}

// Select Answer
function selectAnswer(selectedIndex) {

    const correctIndex =
        quizData[currentQuestion].correct;

    // Score update
    if (selectedIndex === correctIndex) {
        score++;
    }

    currentQuestion++;

    // Next Question OR Final Score
    if (currentQuestion < quizData.length) {

        loadQuestion();

    } else {

        document.getElementById("quiz-container")
            .innerHTML = `
    <h2>Quiz Completed 🎉</h2>

    <h3>Your Score: ${score}/${quizData.length}</h3>

    <button onclick="restartQuiz()">
        Play Again
    </button>
`;
    }
}
// Restart Quiz
function restartQuiz() {

    currentQuestion = 0;

    score = 0;

    document.getElementById("quiz-container").innerHTML = `
        <p id="question"></p>

        <div id="answers"></div>
    `;

    loadQuestion();
}
// Start Quiz
loadQuestion();
// ================= IMAGE CAROUSEL =================

const images = [
    "https://picsum.photos/500/300?1",
    "https://picsum.photos/500/300?2",
    "https://picsum.photos/500/300?3"
];

let index = 0;

function showImage() {
    document.getElementById("carouselImage").src = images[index];
}

function nextImage() {
    index = (index + 1) % images.length;
    showImage();
}

function prevImage() {
    index = (index - 1 + images.length) % images.length;
    showImage();
}

// Auto Slide
setInterval(nextImage, 3000);


// ================= JOKE API =================

async function getJoke() {

    const jokeEl = document.getElementById("joke");

    jokeEl.textContent = "Loading...";

    try {

        const res = await fetch(
            "https://official-joke-api.appspot.com/random_joke"
        );

        const data = await res.json();

        jokeEl.textContent =
            `${data.setup} 😂 ${data.punchline}`;

    } catch (error) {

        jokeEl.textContent =
            "Error fetching joke!";

    }
}