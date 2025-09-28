let score = JSON.parse(localStorage.getItem('score')) || {
  wins: 0,
  lose: 0,
  tie: 0,
};
updateScoreElement();

function updateScoreElement(){
  document.querySelector('.js-score')
    .innerHTML =`Wins: ${score.wins}, Losses: ${score.lose}, Ties: ${score.tie}`
}

function pickComputerMove() {
  const moves = ['rock', 'paper', 'scissors'];
  return moves[Math.floor(Math.random() * moves.length)];
}

function playGame(playerMove) {
  const computerMove = pickComputerMove();
  let result = '';

  if (playerMove === 'reset') {
    score.wins = 0;
    score.lose = 0;
    score.tie = 0;
    localStorage.setItem('score', JSON.stringify(score));
    updateScoreElement();
    alert("Score reset!");
    return;
  }

  if (playerMove === computerMove) {
    result = 'Game Tie';
  } else if (
    (playerMove === 'rock' && computerMove === 'scissors') ||
    (playerMove === 'paper' && computerMove === 'rock') ||
    (playerMove === 'scissors' && computerMove === 'paper')
  ) {
    result = 'You Win';
  } else {
    result = 'You Lose';
  }

  if (result === 'You Win') {
    score.wins++;
  } else if (result === 'You Lose') {
    score.lose++;
  } else {
    score.tie++;
  }

  localStorage.setItem('score', JSON.stringify(score));
  updateScoreElement();
  document.querySelector('.js-result')
    .innerHTML=result;
  document.querySelector('.js-moves')
   .innerHTML=`You picked ${playerMove}. Computer picked ${computerMove}.`;

}
