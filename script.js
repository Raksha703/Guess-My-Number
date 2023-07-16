"use strict";

/*
console.log(document.querySelector(".message").textContent);
document.querySelector(".message").textContent="🎉 Correct number!!";

document.querySelector(".guess").value=36;

document.querySelector(".score").textContent=20;
*/

let magicNumber = Math.trunc(Math.random()*20) + 1;
let sc = 20;
let highsc = document.querySelector(".highscore").textContent;
let chance = 5;

document.querySelector(".check").addEventListener(
    "click", function(){
        let guessedNumber = Number(document.querySelector(".guess").value);

        if(!guessedNumber){
            document.querySelector(".message").textContent = "🚨 No Number";
        }

        else if(chance==0){
            document.querySelector(".message").textContent = "🥴 You Lost the Game";
            document.querySelector(".check").disabled = true;
            sc=0;
            chance=0;
        }

        else if(guessedNumber>magicNumber){
            document.querySelector(".message").textContent = "📈 Too High";
            sc--;
            chance--;
        }

        else if(guessedNumber<magicNumber){
            document.querySelector(".message").textContent = "📉 Too Low";
            sc--;
            chance--;
        }

        else{
            document.querySelector(".message").textContent = "🎉 Correct number!!";
            document.querySelector(".number").textContent = magicNumber;
            document.querySelector(".check").disabled = true;
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
        highsc = document.querySelector(".highscore").textContent;
        magicNumber = Math.trunc(Math.random()*20) + 1;
        sc=20;
        chance=5;

        document.body.style.backgroundColor = "#222";
        document.querySelector(".message").textContent = "🤔 Start guessing...";
        document.querySelector(".number").textContent = "?";
        document.querySelector(".number").style.marginLeft= "43%";
        document.querySelector(".number").style.width="21rem";
        document.querySelector(".score").textContent = sc;
        document.querySelector(".guess").value = "";
        document.querySelector(".highscore").textContent = highsc;
        document.querySelector(".chance").textContent = chance;
        document.querySelector(".check").disabled = false;
    }
);
