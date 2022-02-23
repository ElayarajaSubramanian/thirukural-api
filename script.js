const section = document.querySelector(".details__sec");
const chapterGroup = document.querySelector(".details__chapgroup");
const chapter = document.querySelector(".details__chap");
const kural = document.querySelector(".kural__lyrics");
const kuralExplanation = document.querySelector(".kural__exp");
const nextBtn = document.querySelector(".next-btn");
const prevBtn = document.querySelector(".prev-btn");

let kuralNum = 1;

nextBtn.addEventListener("click", incrementer);
prevBtn.addEventListener("click", decrementer);

function incrementer() {
  kuralNum++;
  if (kuralNum > 1) {
    prevBtn.classList.add("show");
  }
  getContent();
}

function decrementer() {
  kuralNum--;
  if (kuralNum < 2) {
    prevBtn.classList.remove("show");
  }
  getContent();
}

function getContent() {
  fetch(`https://api-thirukkural.vercel.app/api?num=${kuralNum}`)
    .then((response) => response.json())
    .then((data) => {
      section.innerHTML = data.sect_tam;
      chapterGroup.innerHTML = data.chapgrp_tam;
      chapter.innerHTML = data.chap_tam;
      let html = `
    <p>${data.line1}</p>
    <p>${data.line2}</p>
    `;
      kural.innerHTML = html;
      kuralExplanation.innerHTML = data.tam_exp;
    });
}
getContent();
