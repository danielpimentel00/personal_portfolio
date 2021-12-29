let description = document.getElementById('description');

let gameOver = false;

let randomNum = getRandomNum(0,3);

let ball = document.getElementById('ball');

let ballCup = getCup(randomNum);

ballPosition(randomNum, ball);

let cup1 = document.querySelectorAll('.cup-image')[0]
let cup2 = document.querySelectorAll('.cup-image')[1]
let cup3 = document.querySelectorAll('.cup-image')[2]

cup1.addEventListener('click', firstCupClicked)
cup2.addEventListener('click', secondCupClicked)
cup3.addEventListener('click', thirdCupClicked)

function getRandomNum(min, max) {
  return Math.floor(Math.random() * (max - min) + min);
}

function getCup(num) {
  switch(num){
    case 0:
      return document.getElementById('cup1');
    case 1:
      return document.getElementById('cup2');
    case 2:
      return document.getElementById('cup3');
    default:
      console.error("I'm default!");
  }
}

function ballPosition(num, ball) {
  switch(num){
    case 0:
      ball.style.right = '300px';
      break
    case 1:
      ball.style.right = '185px';
      break
    case 2:
      ball.style.right = '70px';
      break
    default:
      console.error("I'm default!");
  }
}

function getEmptyCups() { 
  let arr = [];

  if(ball.style.right === "300px") { //bola en primer vaso
    if(cup2.style.bottom !== '40px') {
      arr.push(2);
    }

    if(cup3.style.bottom !== '40px') { 
      arr.push(3);
    }
  }
  else if(ball.style.right === "185px") { //bola en segundo vaso
    if(cup1.style.bottom !== '40px') {
      arr.push(1);
    }

    if(cup3.style.bottom !== '40px') { 
      arr.push(3);
    }
  }
  else {  //bola en tercer vaso
    if(cup1.style.bottom !== '40px') {
      arr.push(1);
    }

    if(cup2.style.bottom !== '40px') { 
      arr.push(2);
    }
  }  

  return arr;
}

function firstCupClicked() {
  if(gameOver)
    return

  let empty = getEmptyCups()

  //segundo click 
  if(empty.length === 1) {
    cup1.style.bottom = '40px';

    if(ball.style.right === "300px")
      winnerMessage();
    else 
      loserMessage();
  }
  else if(empty.length > 1) {
    if(!empty.includes(1)) { //bola en primer vaso
      let rand = getRandomNum(2,4);

      if(rand === 2) {
        cup2.style.bottom = '40px'
        firstClickMessage()
      }
      else {
        cup3.style.bottom = '40px'
        firstClickMessage()
      }
    }
    else {
      for(let cup of empty) {
        if(cup === 2) {
          cup2.style.bottom = '40px'
          firstClickMessage();
          break;
        }
        else if(cup === 3) {
          cup3.style.bottom = '40px'
          firstClickMessage();
          break;
        }
      }
    }
  }
}

function secondCupClicked() {
  if(gameOver)
    return

  let empty = getEmptyCups()

  //segundo click 
  if(empty.length === 1) {
    cup2.style.bottom = '40px';

    if(ball.style.right === "185px")
      winnerMessage();
    else 
      loserMessage();
  }
  else if(empty.length > 1) {
    if(!empty.includes(2)) { //bola en segundo vaso
      let rand = getRandomNum(1,4);

      if(rand === 1 || rand === 2) {
        cup1.style.bottom = '40px'
        firstClickMessage()
      }
      else {
        cup3.style.bottom = '40px'
        firstClickMessage()
      }
    }
    else {
      for(let cup of empty) {
        if(cup === 1) {
          cup1.style.bottom = '40px'
          firstClickMessage();
          break;
        }
        else if(cup === 3) {
          cup3.style.bottom = '40px'
          firstClickMessage();
          break;
        }
      }
    }
  }
}

function thirdCupClicked() {
  if(gameOver)
    return

  let empty = getEmptyCups()

  //segundo click 
  if(empty.length === 1) {
    cup3.style.bottom = '40px';

    if(ball.style.right === "70px")
      winnerMessage();
    else 
      loserMessage();
  }
  else if(empty.length > 1) {
    if(!empty.includes(3)) { //bola en tercer vaso
      let rand = getRandomNum(1,3);

      if(rand === 1) {
        cup1.style.bottom = '40px'
        firstClickMessage()
      }
      else {
        cup2.style.bottom = '40px'
        firstClickMessage()
      }
    }
    else {
      for(let cup of empty) {
        if(cup === 1) {
          cup1.style.bottom = '40px'
          firstClickMessage();
          break;
        }
        else if(cup === 2) {
          cup2.style.bottom = '40px'
          firstClickMessage();
          break;
        }
      }
    }
  }
  
}

function firstClickMessage() {
  description.innerText = "Se ha levantado uno de los vasos vacíos. Elija un vaso como respuesta final";
}

function winnerMessage() {
  description.innerText = "En buena hora, has ganado!!!";
  description.style.textTransform = 'uppercase';

  gameOver = true;
}

function loserMessage() {
  description.innerText = "Has perdido";

  gameOver = true;
}

/*
-Evento
-funcion: obtener las copas vacias
-si se clickeó una copa vacia, levantar la otra
-sino, levantar una copa vacia al azar.
-sacar la copa levantada del array
-si el array tiene longitud < 2 y se clickeo
una copa vacia, mostrar en pantalla "Perdiste"
-si el array tiene longitud < 2 y se clickeo
la copa llena, mostrar en pantalla "Ganaste"
 */