//Code for blastoff timer
function blastoffTimerV1() {
    console.log("blastoffTimerV1() started");
    var countdownTimer = 50;
    document.getElementById("countdownDisplay").innerHTML = countdownTimer;
    setTimeout(function () {
        countdownTimer = countdownTimer - 5;
        document.getElementById("countdownDisplay").innerHTML = countdownTimer;
    }, 5000)
    //Clock at 40
    setTimeout(function () {
        countdownTimer = countdownTimer - 5;
        document.getElementById("countdownDisplay").innerHTML = countdownTimer;
    }, 10000)
    //Clock at 35
    setTimeout(function () {
        countdownTimer = countdownTimer - 5;
        document.getElementById("countdownDisplay").innerHTML = countdownTimer;
    }, 15000)
    //Clock at 30
    setTimeout(function () {
        countdownTimer = countdownTimer - 5;
        document.getElementById("countdownDisplay").innerHTML = countdownTimer;
    }, 20000)
    //Clock at 25
    setTimeout(function () {
        countdownTimer = countdownTimer - 5;
        document.getElementById("countdownDisplay").innerHTML = countdownTimer;
    }, 25000)
    //Clock at 20
    setTimeout(function () {
        countdownTimer = countdownTimer - 5;
        document.getElementById("countdownDisplay").innerHTML = countdownTimer;
    }, 30000)
    //Clock at 15
    setTimeout(function () {
        countdownTimer = countdownTimer - 5;
        document.getElementById("countdownDisplay").innerHTML = countdownTimer;
    }, 35000)
    //Clock at 10
    setTimeout(function () {
        countdownTimer = countdownTimer - 5;
        document.getElementById("countdownDisplay").innerHTML = countdownTimer;
    }, 40000)
    //Clock at 5
    setTimeout(function () {
        countdownTimer = countdownTimer - 5;
        document.getElementById("countdownDisplay").innerHTML = countdownTimer;
    }, 45000)
    //Clock at 25 Blastoff!!!
    setTimeout(function () {
        countdownTimer = countdownTimer - 5;
        document.getElementById("countdownDisplay").innerHTML = "Blastoff!!";
    }, 50000)
}
//Code for playing craps!!!
function playCraps() {
    console.log("playCraps() started");
    //These are your dice
    var die1;
    var die2;
    //This is the code to the max number on your dice. This works for 20-sided die also!
    die1 = Math.ceil(Math.random() * 6);
    die2 = Math.ceil(Math.random() * 6);
    console.log("Die1 = +die1");
    document.getElementById("die1Res").innerHTML = die1;
    console.log("Die2 = +die2")
    document.getElementById("die2Res").innerHTML = die2;
    //create if sum from die1 and die2
    var sum = die1 + die2;
    //see if sum = 7 or 11, if so you will crap out!!
    if (sum == 7 || sum == 11) {
        document.getElementById("crapsRes").innerHTML = "<h2>Craps, You Lose!!</h2>"
        console.log("Craps, You Lose!!!");
        //This is the code for if you hit doubles on 2,4,or 6. You Win!!
    } else if (die1 == die2 && die1 % 2 == 0) {
        document.getElementById("crapsRes").innerHTML = "<h1>Huzzah, You Win!!</h1>";
        console.log("Huzzah, You Win!!!!!");
        //This is the code for if you don't crap out or win.
    } else {
        document.getElementById("crapsRes").innerHTML = "You Did Not Win or Lose. Please Try Again!!"

    }
}