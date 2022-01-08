document.addEventListener("DOMContentLoaded", () => {
  let content1 = document.querySelector("#content-5");
  let nextSoal = document.querySelectorAll(".next-soal");
  let tabContent = document.querySelectorAll(".tab-content");

  let currentTab = 1;

  content1.style.display = "block";

  function nextSlide() {
    tabContent[currentTab - 1].style.display = "none";
    currentTab++;
    let tab = document.querySelector("#content-" + currentTab);
    tab.style.display = "block";
  }

  nextSoal[0].addEventListener("click", nextSlide);
  nextSoal[1].addEventListener("click", nextSlide);
  nextSoal[2].addEventListener("click", nextSlide);
  nextSoal[3].addEventListener("click", nextSlide);

  // Soal 1
  const userAnswerSatu = document.querySelectorAll(".user-answer-1");
  const checkSatu = document.getElementById("check-1");
  const messageSatu = document.getElementById("message-1");
  const answerSatu = [13, 21, 34];

  checkSatu.addEventListener("click", () => {
    let wrong = 0;
    answerSatu.forEach((item, index) => {
      if (parseInt(userAnswerSatu[index].value) != item) {
        userAnswerSatu[index].style.border = "2px solid red";
        wrong++;
      } else {
        userAnswerSatu[index].style.border = "2px solid green";
      }
    });

    if (wrong === 2) {
      messageSatu.innerHTML = "<b>Semua jawaban salah</b>";
      messageSatu.style.color = "red";
    } else if (wrong > 0) {
      messageSatu.innerHTML = "<b>Masih ada jawaban yang salah</b>";
      messageSatu.style.color = "red";
    } else {
      messageSatu.innerHTML = "<b>Jawaban benar semua</b>";
      messageSatu.style.color = "green";
      nextSoal[0].classList.remove("disabled");
    }
  });

  // Soal 2
  const userAnswerDua = document.querySelectorAll(".user-answer-2");
  const checkDua = document.getElementById("check-2");
  const messageDua = document.getElementById("message-2");
  const answerDua = [55, 88, 143];

  checkDua.addEventListener("click", () => {
    let wrong = 0;
    answerDua.forEach((item, index) => {
      if (parseInt(userAnswerDua[index].value) != item) {
        userAnswerDua[index].style.border = "2px solid red";
        wrong++;
      } else {
        userAnswerDua[index].style.border = "2px solid green";
      }
    });

    if (wrong === 2) {
      messageDua.innerHTML = "<b>Semua jawaban salah</b>";
      messageDua.style.color = "red";
    } else if (wrong > 0) {
      messageDua.innerHTML = "<b>Masih ada jawaban yang salah</b>";
      messageDua.style.color = "red";
    } else {
      messageDua.innerHTML = "<b>Jawaban benar semua</b>";
      messageDua.style.color = "green";
      nextSoal[1].classList.remove("disabled");
    }
  });

  // Soal 3
  const userAnswerTiga = document.querySelectorAll(".user-answer-3");
  const checkTiga = document.getElementById("check-3");
  const messageTiga = document.getElementById("message-3");
  const answerTiga = [320, 530, 850];

  checkTiga.addEventListener("click", () => {
    let wrong = 0;
    answerTiga.forEach((item, index) => {
      if (parseInt(userAnswerTiga[index].value) != item) {
        userAnswerTiga[index].style.border = "2px solid red";
        wrong++;
      } else {
        userAnswerTiga[index].style.border = "2px solid green";
      }
    });

    if (wrong === 2) {
      messageTiga.innerHTML = "<b>Semua jawaban salah</b>";
      messageTiga.style.color = "red";
    } else if (wrong > 0) {
      messageTiga.innerHTML = "<b>Masih ada jawaban yang salah</b>";
      messageTiga.style.color = "red";
    } else {
      messageTiga.innerHTML = "<b>Jawaban benar semua</b>";
      messageTiga.style.color = "green";
      nextSoal[2].classList.remove("disabled");
    }
  });

  // Soal 4
  const userAnswerEmpat = document.querySelectorAll(".user-answer-4");
  const checkEmpat = document.getElementById("check-4");
  const messageEmpat = document.getElementById("message-4");
  const answerEmpat = [38, 62, 100];

  checkEmpat.addEventListener("click", () => {
    let wrong = 0;
    answerEmpat.forEach((item, index) => {
      if (parseInt(userAnswerEmpat[index].value) != item) {
        userAnswerEmpat[index].style.border = "2px solid red";
        wrong++;
      } else {
        userAnswerEmpat[index].style.border = "2px solid green";
      }
    });

    if (wrong === 2) {
      messageEmpat.innerHTML = "<b>Semua jawaban salah</b>";
      messageEmpat.style.color = "red";
    } else if (wrong > 0) {
      messageEmpat.innerHTML = "<b>Masih ada jawaban yang salah</b>";
      messageEmpat.style.color = "red";
    } else {
      messageEmpat.innerHTML = "<b>Jawaban benar semua</b>";
      messageEmpat.style.color = "green";
      nextSoal[3].classList.remove("disabled");
    }
  });
});
