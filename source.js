// VARIABLES
const scoreBox = document.querySelector('.scoreboard__score-box');
const score = document.querySelector('.scoreboard__score-box--num');
const resetBtn = document.querySelector('.reset-btn');
const boxes = document.querySelectorAll('.play-area__box');

let turn = 0;

let choice = {
  0: null,
  1: null,
  2: null,
  3: null,
  4: null,
  5: null,
  6: null,
  7: null,
  8: null
}

// FUNCTIONS
const nextTurn = () => turn++;

const playerTurn = () => turn % 2 === 0 ? 'x-box' : 'o-box';

const recordClick = (boxNum) => turn % 2 === 0 ? choice[boxNum] = 'x': choice[boxNum] = 'o';

const addClicks = () => boxes.forEach(box => box.addEventListener('click', playerClick));

const clearImgs = () => {
  scoreBox.classList.remove('x-win', 'o-win');
  boxes.forEach(box => {
    box.classList.remove('x-box', 'o-box');
    innerHTML = '';
  });
}

function playerClick() {
  const boxNum = parseInt(this.dataset.box);

  this.classList.add(playerTurn());
  this.removeEventListener('click', playerClick);
  
  recordClick(boxNum);
  checkWinner(boxNum)
  nextTurn();
  score.innerText = `Turn: ${turn}`;
}

const checkWinner = (boxNum) => {
  if(
    (choice[0] == choice[boxNum] && choice[1] == choice[boxNum] && choice[2]) == choice[boxNum] ||
    (choice[3] == choice[boxNum] && choice[4] == choice[boxNum] && choice[5]) == choice[boxNum] ||
    (choice[6] == choice[boxNum] && choice[7] == choice[boxNum] && choice[8]) == choice[boxNum] ||
    (choice[0] == choice[boxNum] && choice[3] == choice[boxNum] && choice[6]) == choice[boxNum] ||
    (choice[1] == choice[boxNum] && choice[4] == choice[boxNum] && choice[7]) == choice[boxNum] ||
    (choice[2] == choice[boxNum] && choice[5] == choice[boxNum] && choice[8]) == choice[boxNum] ||
    (choice[0] == choice[boxNum] && choice[4] == choice[boxNum] && choice[8]) == choice[boxNum] ||
    (choice[2] == choice[boxNum] && choice[4] == choice[boxNum] && choice[6]) == choice[boxNum] 
  ) {
    boxes.forEach(box => box.removeEventListener('click', playerClick));
    score.innerText = `${choice[boxNum].toUpperCase()} Wins`;
    scoreBox.classList.add(`${choice[boxNum]}-win`);
  }
}

const resetGame = () => {
  turn = 0;
  choice = {
    0: null,
    1: null,
    2: null,
    3: null,
    4: null,
    5: null,
    6: null,
    7: null,
    8: null
  }
  score.innerText = `Turn: ${turn}`;
  addClicks();
  clearImgs();
}

// EVENT LISTENERS
resetBtn.addEventListener('click', resetGame)

addClicks();