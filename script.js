"use strict";

/*
console.log(document.querySelector(".message").textContent);
document.querySelector(".message").textContent="🎉 Correct number!!";

document.querySelector(".guess").value=36;

document.querySelector(".score").textContent=20;
*/

let magicNumber = Math.trunc(Math.random()*20) + 1;
let sc = document.querySelector(".score").textContent;
let highsc = document.querySelector(".highscore").textContent;
let chance = document.querySelector(".chance").textContent;

document.querySelector(".check").addEventListener(
    "click", function(){
        let guessedNumber = Number(document.querySelector(".guess").value);

        if(!guessedNumber){
            document.querySelector(".message").textContent = "🚨 No Number";
        }
        else if(guessedNumber>magicNumber){
            document.querySelector(".message").textContent = "📈 Too High";
            sc--;
            chance--;
        }
        else if(guessedNumber<magicNumber){
            if(chance==0){
                document.querySelector(".message").textContent = "🥴 You Lost the Game";
                sc=0;
            }
            else{
                document.querySelector(".message").textContent = "📉 Too Low";
                sc--;
                chance--;
            }
        }
        else{
            document.querySelector(".message").textContent = "🎉 Correct number!!";
            document.querySelector(".number").textContent = magicNumber;
            sc++;

            if(sc>highsc){
                document.querySelector(".highscore").textContent = sc;
            }

            document.body.style.backgroundColor = "#60b347";
            document.querySelector(".number").style.marginLeft= "30%";
            document.querySelector(".number").style.width="42rem";
        }

        document.querySelector(".score").textContent = sc;
        document.querySelector(".chance").textContent = chance;
    }
);


document.querySelector(".again").addEventListener(
    "click", function(){
        let highsc = document.querySelector(".highscore").textContent;
        magicNumber = Math.trunc(Math.random()*20) + 1;

        document.body.style.backgroundColor = "#222";
        document.querySelector(".message").textContent = "🤔 Start guessing...";
        document.querySelector(".number").textContent = "?";
        document.querySelector(".number").style.marginLeft= "43%";
        document.querySelector(".number").style.width="21rem";
        document.querySelector(".score").textContent = "20";
        document.querySelector(".guess").textContent = "";
        document.querySelector(".highscore").textContent = highsc;
        document.querySelector(".chance").textContent = "5";
    }
);