const configContainer = document.querySelector(".config-container");
const quizContainer = document.querySelector(".quiz-container");
const answerOptions = document.querySelector(".answer-options");
const questionStatus = document.querySelector(".question-status");
const resultContainer = document.querySelector(".result-container");
const timerDisplay = document.querySelector(".time-duration");

let currentQuestion = null;
let quizCategory = 'geography';
const QUIZ_TIME_LIMIT = 15;
let currentTime = QUIZ_TIME_LIMIT;
let timer = null;
let quizQuestions = [];
let currentQuestionIndex = 0;
let numberOfQuestions = 5;
let correctAnswerCount = 0;

// Load questions from local `questions.js` file (matches category names in that file)
// This will shuffle the selected questions and also shuffle each question's options
// while keeping the `correctAnswer` index in sync.
const loadLocalQuestions = (category, amount) => {
    const catKey = category.toLowerCase();
    const catObj = questions.find(c => c.category === catKey);
    if (!catObj) return false;

    // Shuffle questions and pick requested amount
    const selected = [...catObj.questions].sort(() => Math.random() - 0.5).slice(0, amount);

    // Shuffle options for each question and update correctAnswer index
    quizQuestions = selected.map(q => {
        const paired = q.options.map((opt, idx) => ({ opt, idx }));
        const shuffled = paired.sort(() => Math.random() - 0.5);
        const newOptions = shuffled.map(p => p.opt);
        const newCorrect = shuffled.findIndex(p => p.idx === q.correctAnswer);
        return {
            question: q.question,
            options: newOptions,
            correctAnswer: newCorrect
        };
    });

    return true;
};

// display the quiz result and hide the quiz container

const showQuizResult = () => {
    quizContainer.style.display = "none";
    resultContainer.style.display = "block";

    const resultText = `You answered <b>${correctAnswerCount}</b> out of <b>${numberOfQuestions}</b> questions correctly. Great Effort!`;
    document.querySelector(".result-message").innerHTML = resultText;
}

// clear and reset the timer
const resetTimer =() => {
    clearInterval(timer);
    currentTime = QUIZ_TIME_LIMIT;
    timerDisplay.textContent = `${currentTime}`;
}

// initialize and start the timer for the current question
const startTimer = () => {
    timer = setInterval(()=> {
        currentTime--;
        timerDisplay.textContent = `${currentTime}s`;

        if(currentTime <=0) {
            clearInterval(timer);
            highlightCorrectAnswer();
            document.querySelector(".next-question-btn").style.visibility = "visible";
            quizContainer.querySelector(".quiz-timer").style.background = "#c31402";
            // disable all anser options after one option is selected
            answerOptions.querySelectorAll(".answer-option").forEach(option => option.style.pointerEvents = "none");
        }
    },1000)
}

// fetch a random question based on the selected category
const getRandomQuestion = () => {
    // Check if all questions have been used
    if(currentQuestionIndex >= quizQuestions.length){
        return showQuizResult();
    }
    
    const randomQuestion = quizQuestions[currentQuestionIndex];
    currentQuestionIndex++;
    return randomQuestion;
}

// handle the correct answer option and add icon
const highlightCorrectAnswer = () => {
    const correctOption = answerOptions.querySelectorAll(".answer-option")[currentQuestion.correctAnswer];
    correctOption.classList.add("correct");
    const iconHTML = `<span class = "material-symbols-outlined">check_circle</span>`;
    correctOption.insertAdjacentHTML("beforeend", iconHTML);
}

// handle the user answer selection
const handleAnswer = (option, answerIndex) => {
    const isCorrect = currentQuestion.correctAnswer === answerIndex;
    option.classList.add(isCorrect? 'correct':'incorrect');

    !isCorrect ? highlightCorrectAnswer():correctAnswerCount++;

    // insert icon based on correctness
    const iconHTML = `<span class = "material-symbols-outlined">${isCorrect? 'check_circle' : 'cancel'}</span>`;
    option.insertAdjacentHTML("beforeend", iconHTML);

    // disable all answer options after one option is selected
    answerOptions.querySelectorAll(".answer-option").forEach(option => option.style.pointerEvents = "none");

    document.querySelector(".next-question-btn").style.visibility = "visible";

}

const renderQuestion = () => {
    currentQuestion = getRandomQuestion();
    if(!currentQuestion) return;

    resetTimer();
    startTimer();

    //update the ui
    answerOptions.innerHTML = "";
    document.querySelector(".next-question-btn").style.visibility = "hidden";
    document.querySelector(".question-text").textContent = currentQuestion.question;
    questionStatus.innerHTML = `<b>${currentQuestionIndex}</b> of <b>${numberOfQuestions}</b> Questions`;

    // create option li elements and append them and add click event listeners;
    currentQuestion.options.forEach((option, index) => {
        const li = document.createElement("li");
        li.classList.add("answer-option");
        li.textContent = option;
        answerOptions.appendChild(li);
        li.addEventListener("click", ()=> handleAnswer(li, index));
    })

}

// start the quiz and render the question
const startQuiz = async () => {
    // Get selected category and number of questions
    quizCategory = configContainer.querySelector(".category-option.active").textContent;
    numberOfQuestions = parseInt(configContainer.querySelector(".question-option.active").textContent);

    // Show quiz container immediately
    configContainer.style.display = "none";
    quizContainer.style.display = "block";
    
    // Update quiz title to show selected category
    document.querySelector(".quiz-title").textContent = quizCategory;
    
    // Show loading state in question area
    document.querySelector(".question-text").textContent = "Loading questions...";
    document.querySelector(".answer-options").innerHTML = "";
    document.querySelector(".next-question-btn").style.visibility = "hidden";

    // Load questions from local `questions.js`
    const questionsLoaded = loadLocalQuestions(quizCategory, numberOfQuestions);

    if (questionsLoaded) {
        // Reset question index and render first question
        currentQuestionIndex = 0;
        renderQuestion();
    } else {
        alert("Failed to load questions. Please try again.");
        configContainer.style.display = "block";
        quizContainer.style.display = "none";
    }
}

// highlight the selected option on click category or no of questions
document.querySelectorAll(".category-option,.question-option").forEach(option => {
    option.addEventListener("click", ()=> {
        option.parentNode.querySelector(".active").classList.remove("active");
        option.classList.add("active");
    })
})

// reset the quiz and return to the configuration container
const resetQuiz = () => {
    correctAnswerCount = 0;
    currentQuestionIndex = 0;
    quizQuestions = [];
    resultContainer.style.display = "none";
    configContainer.style.display = "block";
}

document.querySelector(".start-quiz-button").addEventListener("click", startQuiz);
document.querySelector(".try-again-btn").addEventListener("click", resetQuiz);
document.querySelector(".next-question-btn").addEventListener("click", renderQuestion);