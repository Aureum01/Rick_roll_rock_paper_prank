let userScore = 0;
let computerScore = 0;
let countdown;
let timerValue = 10;

document.addEventListener('DOMContentLoaded', () => {
    let introModal = new bootstrap.Modal(document.getElementById('introModal'), {});
    introModal.show();

    const rockBtn = document.getElementById('rock');
    const paperBtn = document.getElementById('paper');
    const scissorsBtn = document.getElementById('scissors');
    const timer = document.getElementById('timer');
    const userScoreElem = document.getElementById('userScore');
    const computerScoreElem = document.getElementById('computerScore');

    const updateScore = () => {
        userScoreElem.textContent = userScore;
        computerScoreElem.textContent = computerScore;
    };

    const startTimer = () => {
        timer.textContent = timerValue;
        countdown = setInterval(() => {
            timerValue -= 1;
            timer.textContent = timerValue;

            if (timerValue === 0) {
                clearInterval(countdown);
                window.location.href = 'continue.html';
            }
        }, 1000);
    };

    const playRound = (userChoice) => {
        const choices = ['rock', 'paper', 'scissors'];
        const computerChoice = choices[Math.floor(Math.random() * choices.length)];

        if (userChoice === computerChoice) {
            // Tie, no points awarded
        } else if (
            (userChoice === 'rock' && computerChoice === 'scissors') ||
            (userChoice === 'paper' && computerChoice === 'rock') ||
            (userChoice === 'scissors' && computerChoice === 'paper')
        ) {
            userScore += 1;
        } else {
            computerScore += 1;
        }

        updateScore();
    };

    rockBtn.addEventListener('click', () => {
        if (!countdown) startTimer();
        playRound('rock');
    });

    paperBtn.addEventListener('click', () => {
        if (!countdown) startTimer();
        playRound('paper');
    });

    scissorsBtn.addEventListener('click', () => {
        if (!countdown) startTimer();
        playRound('scissors');
    });
});
