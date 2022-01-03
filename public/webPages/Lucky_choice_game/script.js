let description = document.getElementById("description");
let ballsList = document.querySelectorAll(".ball");
let balls = Array.from(ballsList);
let cup1 = document.querySelectorAll(".cup-image")[0];
let cup2 = document.querySelectorAll(".cup-image")[1];
let cup3 = document.querySelectorAll(".cup-image")[2];
let refresh_btn = document.querySelector(".refresh-btn");
let gameOver = false;

refresh_btn.addEventListener("click", () => window.location.reload());

let randomNum = getRandomNum(0, 3);

let ball = document.querySelectorAll(".ball")[randomNum];
let ballCup = getCup(randomNum);

selectBall(ball);

cup1.addEventListener("click", firstCupClicked);
cup2.addEventListener("click", secondCupClicked);
cup3.addEventListener("click", thirdCupClicked);

function getRandomNum(min, max) {
  return Math.floor(Math.random() * (max - min) + min);
}

function getCup(num) {
  switch (num) {
    case 0:
      return document.getElementById("cup1");
    case 1:
      return document.getElementById("cup2");
    case 2:
      return document.getElementById("cup3");
    default:
      console.error("I'm default!");
  }
}

function selectBall(ball) {
  balls = balls.map((b) =>
    b !== ball ? (b.style.visibility = "hidden") : null
  );
}

function firstCupClicked() {
  if (gameOver) return;

  let empty = getEmptyCups();

  //segundo click
  if (empty.length === 1) {
    cup1.style.bottom = "4rem";

    if (randomNum === 0) setTimeout(winnerMessage, 650);
    else setTimeout(loserMessage, 650);
  } else if (empty.length > 1) {
    if (!empty.includes(1)) {
      //bola en primer vaso
      let rand = getRandomNum(2, 4);

      if (rand === 2) {
        cup2.style.bottom = "4rem";
        firstClickMessage();
      } else {
        cup3.style.bottom = "4rem";
        firstClickMessage();
      }
    } else {
      for (let cup of empty) {
        if (cup === 2) {
          cup2.style.bottom = "4rem";
          firstClickMessage();
          break;
        } else if (cup === 3) {
          cup3.style.bottom = "4rem";
          firstClickMessage();
          break;
        }
      }
    }
  }
}

function secondCupClicked() {
  if (gameOver) return;

  let empty = getEmptyCups();

  //segundo click
  if (empty.length === 1) {
    cup2.style.bottom = "4rem";

    if (randomNum === 1) setTimeout(winnerMessage, 650);
    else setTimeout(loserMessage, 650);
  } else if (empty.length > 1) {
    if (!empty.includes(2)) {
      //bola en segundo vaso
      let rand = getRandomNum(1, 4);

      if (rand === 1 || rand === 2) {
        cup1.style.bottom = "4rem";
        firstClickMessage();
      } else {
        cup3.style.bottom = "4rem";
        firstClickMessage();
      }
    } else {
      for (let cup of empty) {
        if (cup === 1) {
          cup1.style.bottom = "4rem";
          firstClickMessage();
          break;
        } else if (cup === 3) {
          cup3.style.bottom = "4rem";
          firstClickMessage();
          break;
        }
      }
    }
  }
}

function thirdCupClicked() {
  if (gameOver) return;

  let empty = getEmptyCups();

  //segundo click
  if (empty.length === 1) {
    cup3.style.bottom = "4rem";

    if (randomNum === 2) setTimeout(winnerMessage, 650);
    else setTimeout(loserMessage, 650);
  } else if (empty.length > 1) {
    if (!empty.includes(3)) {
      //bola en tercer vaso
      let rand = getRandomNum(1, 3);

      if (rand === 1) {
        cup1.style.bottom = "4rem";
        firstClickMessage();
      } else {
        cup2.style.bottom = "4rem";
        firstClickMessage();
      }
    } else {
      for (let cup of empty) {
        if (cup === 1) {
          cup1.style.bottom = "4rem";
          firstClickMessage();
          break;
        } else if (cup === 2) {
          cup2.style.bottom = "4rem";
          firstClickMessage();
          break;
        }
      }
    }
  }
}

function getEmptyCups() {
  let arr = [];

  if (randomNum === 0) {
    //bola en primer vaso
    if (cup2.style.bottom !== "4rem") {
      arr.push(2);
    }

    if (cup3.style.bottom !== "4rem") {
      arr.push(3);
    }
  } else if (randomNum === 1) {
    //bola en segundo vaso
    if (cup1.style.bottom !== "4rem") {
      arr.push(1);
    }

    if (cup3.style.bottom !== "4rem") {
      arr.push(3);
    }
  } else {
    //bola en tercer vaso
    if (cup1.style.bottom !== "4rem") {
      arr.push(1);
    }

    if (cup2.style.bottom !== "4rem") {
      arr.push(2);
    }
  }

  return arr;
}

function firstClickMessage() {
  description.innerText =
    "One of the empty cups has been lifted. Choose a cup as your final answer";
}

function winnerMessage() {
  description.innerText = "You won!!!";
  description.style.textTransform = "uppercase";

  gameOver = true;
}

function loserMessage() {
  description.innerText = "You lost";

  gameOver = true;
}
