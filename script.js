console.log("Welcome to Dino Game!");
score = 0;
cross = true;

audiogo = new Audio('gameover.mp3');
audio = new Audio ('music.mp3');

setTimeout(() => {
    audio.play();
}, 1000)

document.onkeydown = function(e){
    console.log("key is: ",  e.key)
    console.log("key code is: ", e.keyCode);
    if(e.key == "ArrowUp"){
        dino = document.querySelector('.dino');
        dino.classList.add('animateDino');
        setTimeout(() => {
            dino.classList.remove('animateDino');
        }, 700);
    }
    if(e.key == "ArrowRight"){
        dino = document.querySelector('.dino');
        dinoX = parseInt(window.getComputedStyle(dino, null).getPropertyValue('left'));
        dino.style.left = (dinoX + 112) + "px";
    }

    if(e.key === "ArrowLeft"){
        dino = document.querySelector('.dino');
        dinoX = parseInt(window.getComputedStyle(dino, null).getPropertyValue('left'));
        dino.style.left = (dinoX - 112) + "px";
    }
}

//keeps checking whether dino has collided with obstacle or not
setInterval(() => {
    dino = document.querySelector(".dino");
    gameOver = document.querySelector(".gameOver");
    obstacle = document.querySelector(".obstacle");


    //gets current coordinates of dino and obstacle

    dx = parseInt(window.getComputedStyle(dino, null).getPropertyValue('left'));
    dy = parseInt(window.getComputedStyle(dino, null).getPropertyValue('top'));

    ox = parseInt(window.getComputedStyle(obstacle, null).getPropertyValue('left'));
    oy = parseInt(window.getComputedStyle(obstacle, null).getPropertyValue('top'));

    offsetX = Math.abs(dx-ox);
    offsetY = Math.abs(dy-oy);

    //console.log(offsetX, offsetY)
    if(offsetX < 73 && offsetY < 52){
        gameOver.innerHTML = "Game Over ! - Reload to play again"
        obstacle.classList.remove('animateObstacle');
        audiogo.play();
        setTimeout(() => {
            audiogo.pause();
            audio.pause();
        }, 1000)
    } else if(offsetX < 145 && cross && gameOver.style.visibility != 'visible') {
        score += 1;
        updateScore(score);
        cross = false;
        setTimeout(() => {
            cross = true;
        }, 1000);

        //increasing the speed of the obstacle

        setTimeout(()=> {
            animationDuration = parseFloat(window.getComputedStyle(obstacle, null).getPropertyValue('animation-duration'));
            newDuration = animationDuration - 0.05;
            obstacle.style.animationDuration = newDuration + 's';
        }, 500)
    }


}, 10)

function updateScore(score){
    scoreCont.innerHTML = "Your Score: " + score;
}





































/*
additional features you can add: 
Make a health bar for dino which will finish in certain number of hits from the dragon (depending upon dragon level);
Reduce the score on each hit
Record high score
Set dragon levels and add more obstacles
Change the background from day to night or weather from summer to snow
Increase the speed
Flip the dragon face when going left
put a start button or be like - Press any key to start
put a restart button
give a better game over animation for dragon like jumping and going down the screen like mario.

You can also make it multiplayer

 */