"use strict";

let magicNumber = Math.trunc(Math.random()*20) + 1;
let sc = 5;
let highsc = document.querySelector(".highscore").textContent;

const displayMessage = function(message){
    document.querySelector(".message").textContent = message;
}

const disbleCheck = function(message){
    document.querySelector(".check").disabled = Boolean(message);
}

const displayNumber = function(message){
    document.querySelector(".number").textContent = message;
}

const displayHighScore = function(message){
    document.querySelector(".highscore").textContent = message;
}

const displayScore = function(message){
    document.querySelector(".score").textContent = message;
    document.querySelector(".chance").textContent = message;
}

const changeStyle = function(b, m, w){
    document.body.style.backgroundColor = b;
    document.querySelector(".number").style.marginLeft= m;
    document.querySelector(".number").style.width= w;
}

document.querySelector(".check").addEventListener(
    "click", function(){
        let guessedNumber = Number(document.querySelector(".guess").value);

        if(!guessedNumber){
            displayMessage("🚨 No Number");
        }

        else if(sc==0){
            displayMessage("🥴 You Lost the Game");
            disbleCheck(true);
            sc=0;
        }

        else if(guessedNumber!==magicNumber){
            displayMessage(guessedNumber>magicNumber ? "📈 Too High" : "📉 Too Low");
            sc--;
        }

        else{
            displayMessage("🎉 Correct number!!");
            displayNumber(magicNumber);
            disbleCheck(true);

            if(sc>highsc){
                displayHighScore(sc);
            }

            changeStyle("#60b347","30%","42rem");
        }

        displayScore(sc);
    }
);


document.querySelector(".again").addEventListener(
    "click", function(){
        highsc = document.querySelector(".highscore").textContent;
        magicNumber = Math.trunc(Math.random()*20) + 1;
        sc=5;

        changeStyle("#222", "43%", "21rem");
        displayMessage("🤔 Start guessing...");
        displayNumber("?");
        displayScore(sc);
        document.querySelector(".guess").value = "";
        displayHighScore(highsc);
        disbleCheck(false);
    }
);
