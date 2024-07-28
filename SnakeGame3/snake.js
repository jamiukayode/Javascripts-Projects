const gameBoard = document.querySelector("#gameBoard");
const countText = gameBoard.getContext("2d");
const scoreText = document.querySelector("#scoreText");
const resetBtn = document.querySelector("#resetBtn");
const gameWidth = gameBoard.width;
const gamHeight = gameBoard.height;
const boardBg = "grey";
const snakeColor = 'lightgreen';
const snakeBorder = 'black';
const foodCOlor = "red";
let unitSize = 15;
let running = false;
let xVelocity = unitSize;
let yVelocity = 0;
let foodX;
let foodY;
let score = 0;

let snake = [
    { x: unitSize * 4, y: 0 },
    { x: unitSize * 3, y: 0 },
    { x: unitSize * 2, y: 0 },
    { x: unitSize, y: 0 },
    { x: 0, y: 0 },
];

window.addEventListener("keydown", changeDrection);
resetBtn.addEventListener("click", resetGame);

gameStart();

// Game starts function
function gameStart() {
    running = true;
    scoreText.textContent = "0";
    createFood();
    drawFood();
    nextTick();
};

//Next tick function
function nextTick() {
    if (running) {
        setTimeout(() => {
            clearBoard();
            drawFood();
            moveSnake();
            drawSnake();
            checkGameOver();
            nextTick();
        }, 200);
    }
    else {
        dispalyGameOver();
    }
};

//clear board
function clearBoard() {
    countText.fillStyle = boardBg;
    countText.fillRect(0, 0, gameWidth, gamHeight);
};
function createBoard() { };

//function for creating food
function createFood() {
    function randomFood(min, max) {
        const randNum = Math.round((Math.random() * (max - min) + min) / unitSize) * unitSize;
        return randNum;
    }
    foodX = randomFood(0, gameWidth - unitSize);
    foodY = randomFood(0, gamHeight - unitSize);
};

//function for drawing snake food
function drawFood() {
    countText.fillStyle = foodCOlor;
    countText.fillRect(foodX, foodY, unitSize, unitSize);
};
function moveSnake() {
    const head = {
        x: snake[0].x + xVelocity,
        y: snake[0].y + yVelocity
    };
    snake.unshift(head);
    // if food is eaten
    if (snake[0].x == foodX && snake[0].y == foodY) {
        score += 1;
        scoreText.textContent = score;
        createFood();
    }
    else {
        snake.pop();
    }

};

// function for drawing snake
function drawSnake() {
    countText.fillStyle = snakeColor;
    countText.strokeStyle = snakeBorder;
    snake.forEach(snakePart => {
        countText.fillRect(snakePart.x, snakePart.y, unitSize, unitSize);
        countText.strokeRect(snakePart.x, snakePart.y, unitSize, unitSize);
    });
};

// function for chaging game direction
function changeDrection() {
    const keypressed = event.keyCode;
    const left = 37;
    const up = 38;
    const right = 39;
    const down = 40;

    const goingUp = (yVelocity == -unitSize)
    const goingDown = (yVelocity == unitSize)
    const goingRight = (xVelocity == unitSize)
    const goingLeft = (xVelocity == -unitSize)

    switch (true) {
        case (keypressed == left && !goingRight):
            xVelocity = -unitSize;
            yVelocity = 0;
            break;
        case (keypressed == up && !goingDown):
            xVelocity = 0;
            yVelocity = -unitSize;
            break;
        case (keypressed == right && !goingLeft):
            xVelocity = unitSize;
            yVelocity = 0;
            break;
        case (keypressed == down && !goingUp):
            xVelocity = 0;
            yVelocity = unitSize;
            break;
    }
};

// function for game over
function checkGameOver() {
    switch (true) {
        case (snake[0].x < 0):
            running = false;
            break;
        case (snake[0].x >= gameWidth):
            running = false;
            break;
        case (snake[0].y < 0):
            running = false;
            break;
        case (snake[0].y >= gamHeight):
            running = false;
            break;
    }
    for (let i = 1; i < snake.length; i += 1) {
        if (snake[i].x == snake[0].x && snake[i].y == snake[0].y) {
            running = false;
        }
    }
};

// function for display game over
function dispalyGameOver() {
    countText.font = "50px MV Boli";
    countText.fillStyle = "black";
    countText.textAlign = "center";
    countText.fillText("GAME OVER!", gameWidth / 2, gamHeight / 2);
    running = false;
};

//funtion for reset game
function resetGame() {
    score = 0;
    xVelocity = unitSize;
    yVelocity = 0;
    snake = [
        { x: unitSize * 4, y: 0 },
        { x: unitSize * 3, y: 0 },
        { x: unitSize * 2, y: 0 },
        { x: unitSize, y: 0 },
        { x: 0, y: 0 },
    ];
    gameStart();
 };

