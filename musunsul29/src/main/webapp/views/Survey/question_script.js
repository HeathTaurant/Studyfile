// 전체 박스
const questionBox = document.querySelector(".question__box");

// 단일 박스
const boxSweet = document.querySelector(".box.sweet");
const boxSour = document.querySelector(".box.sour");
const boxRefresh = document.querySelector(".box.refresh");
const boxBody = document.querySelector(".box.body");
const boxScent = document.querySelector(".box.scent");

// 게이지바
const boxChoiceRefresh = document.querySelector(".box_choice.refresh");
const boxChoiceSour = document.querySelector(".box_choice.sour");
const boxChoiceBody = document.querySelector(".box_choice.body");
const boxChoiceScent = document.querySelector(".box_choice.scent");
const boxChoiceAlc = document.querySelector(".box_choice_alc");

// 각 요소 배열
const nextBtn = document.querySelectorAll(".next__btn");
const listImg = document.querySelectorAll(".list__img");
const boxNumber = document.querySelectorAll(".box_number");

let width1 = -700;
let width2 = -340;
let width3 = -1800;
let width4 = -3290;
let width5 = -1450;

questionBox.style.transform = `translateY(50%)`;

// 단맛 next 버튼
nextBtn[0].addEventListener("click", function () {
  boxSweet.style.transform = `translateY(${width1}%)`;
  listImg[1].style.transform = `translateY(${width2}%)`;
  boxChoiceSour.style.transform = `translateY(${width3}%)`;
  boxNumber[1].style.transform = `translateY(${width4}%)`;
  nextBtn[1].style.transform = `translateY(${width5}%)`;
});

// 신맛 next 버튼
nextBtn[1].addEventListener("click", function () {
  boxSour.style.transform = `translateY(${width1 * 2}%)`;
  listImg[2].style.transform = `translateY(${width2 * 2}%)`;
  boxChoiceRefresh.style.transform = `translateY(${width3 * 2}%)`;
  boxNumber[2].style.transform = `translateY(${width4 * 2}%)`;
  nextBtn[2].style.transform = `translateY(${width5 * 2}%)`;
});

// 청량감 next 버튼
nextBtn[2].addEventListener("click", function () {
  boxRefresh.style.transform = `translateY(${width1 * 3}%)`;
  listImg[3].style.transform = `translateY(${width2 * 3}%)`;
  boxChoiceBody.style.transform = `translateY(${width3 * 3}%)`;
  boxNumber[3].style.transform = `translateY(${width4 * 3}%)`;
  nextBtn[3].style.transform = `translateY(${width5 * 3}%)`;
});

// 바디감 next 버튼
nextBtn[3].addEventListener("click", function () {
  boxBody.style.transform = `translateY(${width1 * 4}%)`;
  listImg[4].style.transform = `translateY(${width2 * 4}%)`;
  boxChoiceScent.style.transform = `translateY(${width3 * 4}%)`;
  boxNumber[4].style.transform = `translateY(${width4 * 4}%)`;
  nextBtn[4].style.transform = `translateY(${width5 * 4}%)`;
});

// 향 next 버튼
nextBtn[4].addEventListener("click", function () {
  boxScent.style.transform = `translateY(${width1 * 5}%)`;
  listImg[5].style.transform = `translateY(${width2 * 5}%)`;
  boxChoiceAlc.style.transform = `translateY(${width3 * 5}%)`;
  boxNumber[5].style.transform = `translateY(${width4 * 5}%)`;
  nextBtn[5].style.transform = `translateY(${width5 * 5}%)`;
});
