let lives;
let points;
let gameDuration;


window.addEventListener("load", start);

 

function start(){
    console.log("start");
    lives = 10;
    points = 0;
    gameDuration = 5;
    document.querySelector("#score_board").textContent = points;
    document.querySelector("#life_board").textContent = lives;
    
     showTitle();
}

function showTitle(){
    console.log("showTitle");
    hideAllScreens();
    document.querySelector("#title_screen").classList.remove("hidden");
    //TODO stop music
    //TODO sound control button
    //TODO play sound
   
    document.querySelector("#play_button").addEventListener("click",startGame);
    //user clicks instructions button
  
}

function showInstructions(){
    console.log('showInstructions');
    // Show instruction screen
    // Show start button
    // Show title button
    // Play sound
    // --> user clicks start button

    // --> user clicks title button
}

function startGame() {
    console.log(`startGame`);
    hideAllScreens();
   
    document.querySelector("#title_screen").classList.add("hidden");
    
    document.querySelector("#lemon_container").classList.add("fade_out", "pos1");
   
    document.querySelector("#watermellon_container").classList.add("pulse", "pos4");
    document.querySelector("#apple_container").classList.add("pattern", "pos3");
    document.querySelector("#orange_container").classList.add("pattern", "pos6");
    
    startTimer();

    document.querySelector("#lemon_container").addEventListener("click", LemonHit);
   
    document.querySelector("#watermellon_container").addEventListener("click", watermellonHit);
    document.querySelector("#apple_container").addEventListener("click", appleHit);
    document.querySelector("#orange_container").addEventListener("click", orangeHit);
    
    
    document.querySelector("#lemon_container").addEventListener("animationiteration", lemonAgain );
   
    document.querySelector("#watermellon_container").addEventListener("animationiteration", watermellonAgain);
    document.querySelector("#apple_container").addEventListener("animationiteration", appleAgain);
    document.querySelector("#orange_container").addEventListener("animationiteration", orangeAgain);
  
   
   
}

function gainPoint(){
    points = points + 1;
  
    console.log("gainPoint");


} 
function LemonHit(){
    document.querySelector("#lemon_container").classList.add("stop");
    document.querySelector("#lemon").classList.add("glow", "rotation");
    document.querySelector("#lemon").addEventListener("animetionend", lemonAgain);
    gainPoint();
if(points===1){
        document.querySelector("#score_board").classList.value="";
        document.querySelector("#score_board").classList.add("point1");
    }
    if(points===2){
        document.querySelector("#score_board").classList.value="";
        document.querySelector("#score_board").classList.add("point2");
    }

    if(points===3){
        document.querySelector("#score_board").classList.value="";
        document.querySelector("#score_board").classList.add("point3");
    }
    if(points===4){
        document.querySelector("#score_board").classList.value="";
        document.querySelector("#score_board").classList.add("point4");
    }
    if(points===5){
        document.querySelector("#score_board").classList.value="";
        document.querySelector("#score_board").classList.add("point5");
    }
    if(points===6){
        document.querySelector("#score_board").classList.value="";
        document.querySelector("#score_board").classList.add("point6");
    }
    if(points===7){
        document.querySelector("#score_board").classList.value="";
        document.querySelector("#score_board").classList.add("point7");
        youWon();

    }
 
}

function lemonAgain() {
    document.querySelector("#lemon_container").classList.value="";
    document.querySelector("#lemon").classList.value="";
    document.querySelector("#lemon").addEventListener("animationend", lemonAgain);

    let randomPosition = generateRandomNumber(8);
    document.querySelector("#lemon_container").classList.add("zoom_out", "pos" +randomPosition);
   
}
function generateRandomNumber(num) {
    return Math.floor(Math.random() * num) +1;
}


//------------ watermellon------------------


function loseLife(){
    console.log("loseLife");
    lives = lives - 1;
}

function watermellonHit(){
    document.querySelector("#watermellon_container").classList.add("stop");
    document.querySelector("#watermellon").classList.add("pulse2");
    document.querySelector("#watermellon").addEventListener("animetionend", watermellonAgain);
    loseLife();

    if(lives===2){
        document.querySelector("#life_board").classList.value="";
        document.querySelector("#life_board").classList.add("live2");

    }
    if(lives===1){
        document.querySelector("#life_board").classList.value="";
        document.querySelector("#life_board").classList.add("live1");

    }
    if(lives===0){
        document.querySelector("#life_board").classList.value="";
        document.querySelector("#life_board").classList.add("live0");
        gameOver();

    }
}

function watermellonAgain() {
    document.querySelector("#watermellon_container").classList.value="";
    document.querySelector("#watermellon").classList.value="";
    document.querySelector("#watermellon").addEventListener("animationend", watermellonAgain);

    let randomPosition = generateRandomNumber(8);
    document.querySelector("#watermellon_container").classList.add("zoom_out", "pos" +randomPosition);
   
}




//------------ apple ------------------

function appleHit(){
    document.querySelector("#apple_container").classList.add("stop");
    document.querySelector("#apple").classList.add("pulse2");
    document.querySelector("#apple").addEventListener("animetionend", appleAgain);
    loseLife();

    if(lives===2){
        document.querySelector("#life_board").classList.value="";
        document.querySelector("#life_board").classList.add("live2");

    }
    if(lives===1){
        document.querySelector("#life_board").classList.value="";
        document.querySelector("#life_board").classList.add("live1");

    }
    if(lives===0){
        document.querySelector("#life_board").classList.value="";
        document.querySelector("#life_board").classList.add("live0");
        gameOver();

    }
}

function appleAgain() {
    document.querySelector("#apple_container").classList.value="";
    document.querySelector("#apple").classList.value="";
    document.querySelector("#apple").addEventListener("animationend", appleAgain);

    let randomPosition = generateRandomNumber(8);
    document.querySelector("#apple_container").classList.add("pattern", "pos" +randomPosition);
   
}

//------------ orange ------------------

function orangeHit(){
    document.querySelector("#orange_container").classList.add("stop");
    document.querySelector("#orange").classList.add("pulse2");
    document.querySelector("#orange").addEventListener("animetionend", orangeAgain);
    loseLife();

    if(lives===2){
        document.querySelector("#life_board").classList.value="";
        document.querySelector("#life_board").classList.add("live2");

    }
    if(lives===1){
        document.querySelector("#life_board").classList.value="";
        document.querySelector("#life_board").classList.add("live1");

    }
    if(lives===0){
        document.querySelector("#life_board").classList.value="";
        document.querySelector("#life_board").classList.add("live0");
        gameOver();

    }
}

function orangeAgain() {
    document.querySelector("#orange_container").classList.value="";
    document.querySelector("#orange").classList.value="";
    document.querySelector("#orange").addEventListener("animationend", orangeAgain);

    let randomPosition = generateRandomNumber(8);
    document.querySelector("#orange_container").classList.add("pattern", "pos" +randomPosition);
   
}


// --------timer------

window.addEventListener("load", startTimer);


let timeLeft = 4;

function startTimer() {
    console.log(`startTimer`);
    gameDuration = gameDuration - 1;

    document.querySelector("#time").classList.value = "timer" + timeLeft;
    setTimeout(changeImage, 9000);
}

function changeImage() {
    console.log(`changeImage`);
    timeLeft--;

  
    if (timeLeft > 1) {
        console.log("timeLeft: " + timeLeft);
        document.querySelector("#time").classList.value = "timer" + timeLeft;
        startTimer();
    } else {
        console.log("timeLeft: " + timeLeft);
        document.querySelector("#time").classList.value = "timer" + timeLeft;
        gameOver();
    }
}

// ----------other screens ------------


function gameOver() {
    console.log("gameOver");
    document.querySelector("#game_over").classList.remove("hidden");
   document.querySelector("#play_again_game_over").addEventListener("click", start);
   
    
    //remove all animations
    //show gameOver screen
}

function youWon() {
    console.log("youWon");
    document.querySelector("#you_won").classList.remove("hidden");
    document.querySelector("#play_again_you_won").addEventListener("click", start);
    //remove all animations
    //show youWon screen
}


function hideAllScreens() {
    document.querySelector("#title_screen").classList.add("hidden");
    document.querySelector("#instructions").classList.add("hidden");
    document.querySelector("#game_over").classList.add("hidden");
    document.querySelector("#you_won").classList.add("hidden");
}