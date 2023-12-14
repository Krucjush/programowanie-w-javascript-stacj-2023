const ball = document.getElementById('ball');
let hole = document.getElementById('hole');
let startTime;
let recordList = [];

window.addEventListener('deviceorientation', onDeviceMove);

function onDeviceMove(event) {
    if (!startTime) {
        startTime = Date.now();
    }

    const accelerationX = event.accelerationIncludingGravity.x;
    const accelerationY = event.accelerationIncludingGravity.y;

    moveBall(accelerationX, accelerationY);
    checkCollision();

    const elapsedTime = (Date.now() - startTime) / 1000;

    if (elapsedTime >= 60) {
        alert(`Game over! Your score: ${recordList.length}`);
        resetGame();
    }
}

function moveBall(accelerationX, accelerationY) {
    const speed = 2;
    const currentTop = ball.offsetTop;
    const currentLeft = ball.offsetLeft;

    const newTop = currentTop + accelerationY * speed;
    const newLeft = currentLeft - accelerationX * speed;

    ball.style.top = `${clamp(newTop, 0, window.innerHeight - ball.offsetHeight)}px`;
    ball.style.left = `${clamp(newLeft, 0, window.innerWidth - ball.offsetWidth)}px`;
}

function checkCollision() {
    const ballRect = ball.getBoundingClientRect();
    const holeRect = hole.getBoundingClientRect();

    if (isOverlap(ballRect, holeRect)) {
        recordList.push(Date.now());
        resetBallPosition();
        resetHolePosition();
    }
}

function isOverlap(rect1, rect2) {
    return (
        rect1.left < rect2.right &&
        rect1.right > rect2.left &&
        rect1.top < rect2.bottom &&
        rect1.bottom > rect2.top
    );
}

function resetBallPosition() {
    ball.style.top = '50vh';
    ball.style.left = '50vw';
}

function resetHolePosition() {
    const randomTop = Math.floor(Math.random() * (window.innerHeight - hole.offsetHeight));
    const randomLeft = Math.floor(Math.random() * (window.innerWidth - hole.offsetWidth));

    hole.style.top = `${randomTop}px`;
    hole.style.left = `${randomLeft}px`;
}

function resetGame() {
    startTime = null;
    recordList = [];
    resetBallPosition();
    resetHolePosition();
}

function clamp(value, min, max) {
    return Math.min(Math.max(value, min), max);
}

resetHolePosition();