let randomQuestion = questions.sort((a, b) => {
  return 0.5 - Math.random();
});

function buildQuiz() {
  const output = [];
  let currentNumber = 1;

  randomQuestion.forEach((currentQuestion, questionNumber) => {
    const answers = [];

    output.push(
      `
        <div class="slide">
          <div class="question">${currentQuestion.question}</div>
          <div class="answers">
            <input type="text" name="question${questionNumber}-1" id="question${questionNumber}-1" placeholder="...." data="${currentNumber}" class="form-control text-center answer my-2">
            <input type="text" name="question${questionNumber}-2" id="question${questionNumber}-2" placeholder="...." data="${currentNumber}" class="form-control text-center answer my-2">
          </div>
          <div class="messages"><span class="message-${questionNumber}"></span></div>
        </div>
      `
    );

    currentNumber++;
  });
  questionContainer.innerHTML = output.join("");
}

function showSlide(n) {
  slides[currentSlide].classList.remove("active-slide");
  slides[n].classList.add("active-slide");
  currentSlide = n;

  if (currentSlide === slides.length - 1) {
    nextButton.style.display = "none";
  } else {
    nextButton.style.display = "inline-block";
  }
}

function nextSlide() {
  showSlide(currentSlide + 1);
  nextButton.style.display = "none";
}

const questionContainer = document.querySelector("#quiz");
const nextButton = document.querySelector("#next");
const checkAnswer = document.querySelector("#check");

buildQuiz();

const slides = document.querySelectorAll(".slide");
let currentSlide = 0;

showSlide(currentSlide);
nextButton.addEventListener("click", nextSlide);
nextButton.style.display = "none";

checkAnswer.addEventListener("click", () => {
  const answerContainers = questionContainer.querySelectorAll(".answers");
  const answerContainer = answerContainers[currentSlide];
  const selector1 = `input[id=question${currentSlide}-1]`;
  const selector2 = `input[id=question${currentSlide}-2]`;
  const userAnswer1 = (answerContainer.querySelector(selector1) || {}).value;
  const userAnswer2 = (answerContainer.querySelector(selector2) || {}).value;

  const messageContainers = questionContainer.querySelectorAll(".messages");
  const messageContainer = messageContainers[currentSlide];

  const correctAnswer = results(currentSlide);

  let correct = 0;
  if (parseInt(userAnswer1) === correctAnswer[0]) {
    answerContainer.querySelector(selector1).style.border = "2px solid green";
    correct++;
  } else {
    answerContainer.querySelector(selector1).style.border = "2px solid red";
  }

  if (parseInt(userAnswer2) === correctAnswer[1]) {
    answerContainer.querySelector(selector2).style.border = "2px solid green";
    correct++;
  } else {
    answerContainer.querySelector(selector2).style.border = "2px solid red";
  }

  if (correct === 2) {
    if (currentSlide === slides.length - 1) {
      nextButton.style.display = "none";
      messageContainer.innerHTML = `<h5 class="text-success">Jawaban Benar Semua, Silahkan lanjut materi berikutnya.</h5>`;
    } else {
      nextButton.style.display = "inline-block";
      messageContainer.innerHTML = `<h5 class="text-success">Jawaban Benar Semua</h5>`;
    }
  } else if (correct === 0) {
    messageContainer.innerHTML = `<h5 class="text-danger">Jawaban Salah Semua</h5>`;
  } else {
    messageContainer.innerHTML = `<h5 class="text-danger">Jawaban Masih Ada yang Salah</h5>`;
  }
});

function results(n) {
  return randomQuestion[n].answer;
}
