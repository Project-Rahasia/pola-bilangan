document.addEventListener("DOMContentLoaded", () => {
  const check = document.getElementById("check");
  const message = document.getElementById("message");
  let answerUser = document.querySelectorAll(".answer");
  const answer = ["genap", "ganjil", "54", "191", "68"];

  check.addEventListener("click", () => {
    wrong = 0;

    answer.forEach((item, index) => {
      if (answerUser[index].value.toLowerCase() !== item) {
        answerUser[index].style.border = "2px solid red";
        wrong++;
      } else {
        answerUser[index].style.border = "2px solid green";
      }
    });

    if (wrong === 5) {
      message.innerHTML = `
      <div class="card my-3">
        <div class="card-body">
          <span class="text-danger">Semua jawaban salah</span>
        </div>
      </div>
      `;
    } else if (wrong > 0) {
      message.innerHTML = `
      <div class="card my-3">
        <div class="card-body">
          <span class="text-danger">Masih ada jawaban yang salah</span>
        </div>
      </div>`;
    } else {
      message.innerHTML = `
      <div class="card my-3">
        <div class="card-body">
          <span class="text-success">Jawaban benar semua</span>
        </div>
      </div>`;
    }
  });
});
