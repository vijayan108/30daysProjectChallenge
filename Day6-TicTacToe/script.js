const cells = document.querySelectorAll('.cell');
let currentPlayer = 'X';
let gameStatus = '';
const message = document.getElementById('message');
const popupMessage = document.getElementById('popup-message');
const closeIcon = document.querySelector('.close-icon');

closeIcon.addEventListener('click', () => {
  popupMessage.style.display = 'none';
  window.location.reload();
});

const checkWin = () => {
  const winningCombinations = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
  ];

  for (let i = 0; i < winningCombinations.length; i++) {
    const [a, b, c] = winningCombinations[i];
    if (cells[a].textContent === currentPlayer && cells[b].textContent === currentPlayer && cells[c].textContent === currentPlayer) {
        gameStatus = `Congraulations👍 ${currentPlayer} wins!`;
        message.textContent = gameStatus;
        popupMessage.style.display = 'flex';
      gameStatus = `Congraulations👍 ${currentPlayer} wins!`;
      break;
    }
  }

  if (!gameStatus && [...cells].every(cell => cell.textContent)) {
    gameStatus = 'Oh🫡 Tie game!';
    message.textContent = gameStatus;
        popupMessage.style.display = 'flex';;
  }

 
};

const handleCellClick = (event) => {
  const cell = event.target;
  if (!cell.textContent && !gameStatus) {
    cell.textContent = currentPlayer;
    checkWin();
    currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
  }
};

cells.forEach(cell => cell.addEventListener('click', handleCellClick));

