"use strict";


let playGame = confirm("Would you like to play a game?");


if (playGame === true) {
    let userName = prompt("Name your character.");

    let userHealth = 40;
    let grantHealth = 10;
    let wins = 0;

    console.log(`It's time to play. ${userName}'s starting health is ${userHealth}. Almighty Grant's starting health is ${grantHealth}`);
   
    while (grantHealth > 0) {
        
        console.log(`${userName}'s Health: ${userHealth -= Math.floor((Math.random()* 2) + 1)}`);
        console.log(`Almighty Grant's Health: ${grantHealth -= Math.floor((Math.random() * 2) + 1)}`);

        if (userHealth <= 0) {
            console.log(`Oh no... The Almighty Grant Won!`);
            document.getElementById("result").innerHTML = `Oh no... The Almighty Grant Won!`;
            break;
        }
        if (grantHealth <= 0 && wins <= 2) {
            wins++;
            console.log(`${userName} WON ${wins} of 3 rounds.`);
            grantHealth = 10;
        }
        if (wins === 3) {
            console.log(`GAME OVER! Congratulations ${userName}! You won!`);
            break;
        }
        
        
    }

}
else if (playGame === false) {
   console.log(`If you say so...`);
}
    
    

    


