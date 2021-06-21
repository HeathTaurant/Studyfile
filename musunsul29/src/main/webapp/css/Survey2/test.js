// 기본 변수 및 초기값
const container = document.querySelector(".container");
const yes = document.querySelectorAll(".yes");
const no = document.querySelectorAll(".no");
const initialWidthPostion = -7000;
const initialHeightPostion = 200;
const containerWidth = 20000;
const containerHeight = 5000;
const widthCount = 31;
const heightCount = 20;
const boxWidth = containerWidth / widthCount;
const boxHeight = containerHeight / heightCount;
let currentX = initialWidthPostion;
let currentY = initialHeightPostion;

// 라디오버튼 name를 담는 변수
// var like1 = document.form1.like1.value;
// var like2 = document.form2.like2.value;
// const like3 = document.form3.like3.value;
// const like4 = document.form4.like4.value;
// const like5 = document.form5.like6.value;
// const like6 = document.form7.like7.value;
// const like7 = document.form8.like8.value;
// const like8 = document.form9.like9.value;
// const like9 = document.form10.like10.value;
// const like10 = document.form11.like11.value;
// const like11 = document.form12.like12.value;
// const like12 = document.form13.like13.value;
// const like13 = document.form14.like14.value;
// const like14 = document.form15.like15.value;
// const like15 = document.form16.like16.value;

// Yes라인 변수 선언
const innerBoxleft = document.querySelectorAll(".inner_box_left");
const innerBoxlineLeft = document.querySelectorAll(".inner_box_line_left");
const innerBoxlineLeftwidth = document.querySelectorAll(
  ".inner_box_line_left_width"
);

// No라인 변수 선언
const innerBoxright = document.querySelectorAll(".inner_box_right");
const innerBoxlineRight = document.querySelectorAll(".inner_box_line_right");
const innerBoxlineRightwidth = document.querySelectorAll(
  ".inner_box_line_right_width"
);

// 버튼 변수 선언
const next1 = document.querySelector(".next.one");
const next2 = document.querySelector(".next.two");
const next3 = document.querySelector(".next.three");
const next4 = document.querySelector(".next.four");
const next5 = document.querySelector(".next.five");
const next6 = document.querySelector(".next.six");
const next7 = document.querySelector(".next.seven");
const next8 = document.querySelector(".next.eight");
const next9 = document.querySelector(".next.nine");
const next10 = document.querySelector(".next.ten");
const next11 = document.querySelector(".next.eleven");
const next12 = document.querySelector(".next.twelve");
const next13 = document.querySelector(".next.thirteen");
const next14 = document.querySelector(".next.fourteen");
const next15 = document.querySelector(".next.fifteen");
const next16 = document.querySelector(".next.sixteen");
const next17 = document.querySelector(".next.seventeen");
const next18 = document.querySelector(".next.eighteen");

// 화면 초기화
// container.style.transform = `translate(${initialWidthPostion}px, ${initialHeightPostion}px)`;

// 1번 next 버튼 클릭 이벤트 처리
next1.addEventListener("click", function () {
  const like1 = document.form1.like1.value;
  if (like1 === "yes") {
    setTimeout(function () {
      moveContainer(0, 16);
    }, 1700);
    moveContainer(-13, 0);
  } else if (like1 === "no") {
    moveContainer(0, 2);
  } else {
    alert("질문에 대한 답변을 먼저 선택해주세요");
  }
});

// 2번 next 버튼 클릭 이벤트 처리
next2.addEventListener("click", function () {
  const like2 = document.form2.like2.value;
  if (like2 === "yes") {
    moveContainer(-7, 2);
  } else if (like2 === "no") {
    moveContainer(8, 2);
  } else {
    alert("질문에 대한 답변을 먼저 선택해주세요");
  }
});

// 3번 next 버튼 클릭 이벤트 처리
next3.addEventListener("click", function () {
  const like3 = document.form3.like3.value;
  if (like3 === "yes") {
    moveContainer(-3, 2);
  } else if (like3 === "no") {
    moveContainer(3, 2);
  } else {
    alert("질문에 대한 답변을 먼저 선택해주세요");
  }
});

// 4번 next 버튼 클릭 이벤트 처리
next4.addEventListener("click", function () {
  const like4 = document.form4.like4.value;
  if (like4 === "yes") {
    moveContainer(-2, 2);
  } else if (like4 === "no") {
    moveContainer(3, 2);
  } else {
    alert("질문에 대한 답변을 먼저 선택해주세요");
  }
});

// 5번 next 버튼 클릭 이벤트 처리
next5.addEventListener("click", function () {
  const like5 = document.form5.like5.value;
  if (like5 === "yes") {
    moveContainer(-1, 2);
  } else if (like5 === "no") {
    moveContainer(1, 2);
  } else {
    alert("질문에 대한 답변을 먼저 선택해주세요");
  }
});

// 6번 next 버튼 클릭 이벤트 처리
next6.addEventListener("click", function () {
  const like6 = document.form6.like6.value;
  if (like6 === "yes") {
    moveContainer(-2, 2);
  } else if (like6 === "no") {
    moveContainer(4, 2);
  } else {
    alert("질문에 대한 답변을 먼저 선택해주세요");
  }
});

// 7번 next 버튼 클릭 이벤트 처리
next7.addEventListener("click", function () {
  const like7 = document.form7.like7.value;
  if (like7 === "yes") {
    moveContainer(-1, 2);
  } else if (like7 === "no") {
    moveContainer(1, 2);
  } else {
    alert("질문에 대한 답변을 먼저 선택해주세요");
  }
});

// 8번 next 버튼 클릭 이벤트 처리
next8.addEventListener("click", function () {
  const like8 = document.form8.like8.value;
  if (like8 === "yes") {
    moveContainer(-2, 2);
  } else if (like8 === "no") {
    moveContainer(2, 2);
  } else {
    alert("질문에 대한 답변을 먼저 선택해주세요");
  }
});

// 9번 next 버튼 클릭 이벤트 처리
next9.addEventListener("click", function () {
  const like9 = document.form9.like9.value;
  if (like9 === "yes") {
    moveContainer(-2, 2);
  } else if (like9 === "no") {
    moveContainer(2, 2);
  } else {
    alert("질문에 대한 답변을 먼저 선택해주세요");
  }
});

// 10번 next 버튼 클릭 이벤트 처리
next10.addEventListener("click", function () {
  const like10 = document.form10.like10.value;
  if (like10 === "yes") {
    moveContainer(-1, 2);
  } else if (like10 === "no") {
    moveContainer(1, 2);
  } else {
    alert("질문에 대한 답변을 먼저 선택해주세요");
  }
});

// 11번 next 버튼 클릭 이벤트 처리
next11.addEventListener("click", function () {
  const like11 = document.form11.like11.value;
  if (like11 === "yes") {
    moveContainer(-2, 2);
  } else if (like11 === "no") {
    moveContainer(2, 2);
  } else {
    alert("질문에 대한 답변을 먼저 선택해주세요");
  }
});

// 12번 next 버튼 클릭 이벤트 처리
next12.addEventListener("click", function () {
  const like12 = document.form12.like12.value;
  if (like12 === "yes") {
    moveContainer(-1, 2);
  } else if (like12 === "no") {
    moveContainer(1, 2);
  } else {
    alert("질문에 대한 답변을 먼저 선택해주세요");
  }
});

// 13번 next 버튼 클릭 이벤트 처리
next13.addEventListener("click", function () {
  const like13 = document.form13.like13.value;
  if (like13 === "yes") {
    moveContainer(-1, 2);
  } else if (like13 === "no") {
    moveContainer(1, 2);
  } else {
    alert("질문에 대한 답변을 먼저 선택해주세요");
  }
});

// 14번 next 버튼 클릭 이벤트 처리
next14.addEventListener("click", function () {
  const like14 = document.form14.like14.value;
  if (like14 === "yes") {
    moveContainer(-1, 2);
  } else if (like14 === "no") {
    moveContainer(1, 2);
  } else {
    alert("질문에 대한 답변을 먼저 선택해주세요");
  }
});

// 15번 next 버튼 클릭 이벤트 처리
next15.addEventListener("click", function () {
  const like15 = document.form15.like15.value;
  if (like15 === "yes") {
    moveContainer(-2, 2);
  } else if (like15 === "no") {
    moveContainer(1, 2);
  } else {
    alert("질문에 대한 답변을 먼저 선택해주세요");
  }
});

// 16번 next 버튼 클릭 이벤트 처리
next16.addEventListener("click", function () {
  const like16 = document.form16.like16.value;
  if (like16 === "yes") {
    moveContainer(-1, 2);
  } else if (like16 === "no") {
    moveContainer(1, 2);
  } else {
    alert("질문에 대한 답변을 먼저 선택해주세요");
  }
});

// 17번 next 버튼 클릭 이벤트 처리
next17.addEventListener("click", function () {
  const like17 = document.form17.like17.value;
  if (like17 === "yes") {
    moveContainer(-1, 2);
  } else if (like17 === "no") {
    moveContainer(1, 2);
  } else {
    alert("질문에 대한 답변을 먼저 선택해주세요");
  }
});

// 18번 next 버튼 클릭 이벤트 처리
next18.addEventListener("click", function () {
  const like18 = document.form18.like18.value;
  if (like18 === "yes") {
    moveContainer(-1, 2);
  } else if (like18 === "no") {
    moveContainer(1, 2);
  } else {
    alert("질문에 대한 답변을 먼저 선택해주세요");
  }
});

// yes버튼 클릭에 대한 이벤트 처리
for (i = 0; i < yes.length; i++) {
  yes[i].addEventListener("click", function () {
    yesEvent();
  });
}

// no버튼 클릭에 대한 이벤트 처리
for (i = 0; i < yes.length; i++) {
  no[i].addEventListener("click", function () {
    noEvent();
  });
}

// nodeName을 받아서 class명에 effect를 추가해주는 함수
function addEffect(nodeName) {
  for (i = 0; i < nodeName.length; i++) {
    nodeName[i].classList.add("effect");
  }
}

// nodeName을 받아서 class명에 efect를 제거해주는 함수
function removeEffect(nodeName) {
  for (i = 0; i < nodeName.length; i++) {
    nodeName[i].classList.remove("effect");
  }
}

function yesEvent() {
  // left에 effect 추가
  addEffect(innerBoxleft);
  addEffect(innerBoxlineLeft);
  addEffect(innerBoxlineLeftwidth);
  // right에 effect 제거
  removeEffect(innerBoxright);
  removeEffect(innerBoxlineRight);
  removeEffect(innerBoxlineRightwidth);
}

function noEvent() {
  // right에 effect 추가
  addEffect(innerBoxright);
  addEffect(innerBoxlineRight);
  addEffect(innerBoxlineRightwidth);
  // left에 effect 제거
  removeEffect(innerBoxleft);
  removeEffect(innerBoxlineLeft);
  removeEffect(innerBoxlineLeftwidth);
}

function removeEvent() {
  removeEffect(innerBoxright);
  removeEffect(innerBoxlineRight);
  removeEffect(innerBoxlineRightwidth);
  removeEffect(innerBoxleft);
  removeEffect(innerBoxlineLeft);
  removeEffect(innerBoxlineLeftwidth);
}

// 이동 칸수만큼 x, y 값을 받아 컨테이너를 이동해주는 함수
function moveContainer(x, y) {
  let moveX = boxWidth * x;
  let meveY = boxHeight * y;
  currentX = currentX - moveX;
  currentY = currentY - meveY;
  console.log(currentX);
  console.log(currentY);
  container.style.transform = `translate(${currentX}px, ${currentY}px)`;
  // 2.0초 후 yes, no 이펙트 삭제
  setTimeout(function () {
    removeEvent();
  }, 2000);
}

// function nextBtnclickEvent(nextBtn, like, yesX, yesY, noX, noY) {
//   nextBtn.addEventListener("click", function () {
//     console.log(like);
//     if (like === "yes") {
//       moveContainer(yesX, yesY);
//     } else if (like === "no") {
//       moveContainer(noX, noY);
//     } else {
//       alert("질문에 대한 답변을 먼저 선택해주세요");
//     }
//   });
// }
