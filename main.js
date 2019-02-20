"use strict";

(function (){


function startGame() {
    let playGame = confirm("Would you like to play a game?");
    let userName;

    if (playGame === true) {
        userName = prompt("Name your character.");
        startCombat();
    } else if (play === false){
        console.log(`If you say so...`); 
    }

function startCombat() {
    let userHealth = 40;
    let grantHealth = 10;
    let wins = 0;
    console.log(`${userName} is starting with ${userHealth} points. Almighty Grant is starting with ${grantHealth} health points. Let's go!`);

    function getDamage() {
        userHealth -= Math.floor((Math.random() *5) +1);
        grantHealth -= Math.floor((Math.random() *5) +1);
    }

    while (userHealth > 0 && wins <= 2) {
        getDamage();



        if (userHealth > 0) {
            console.log(`${userName} has ${userHealth} health points left.`);
            console.log(`Almighty Grant has ${grantHealth} health points left.`);
        }

        if (grantHealth <= 0) {
            wins +=1;
        }

        if (wins < 3 && grantHealth <= 0) {
        } else if (wins === 3) {
            console.log(`${userName} won!`);
        }

        if (grantHealth <= 0) {
            grantHealth = 10;
        }

        if (userHealth <= 0) {
            console.log("Almighty Grant has defeated you!");
        }

        let attackQuit = confirm("Press 'OK' to ATTACK! or press 'CANCEL' to quit");

          if (attackQuit === false) {
            console.log(`Quitter! Refresh the page and try again.`);
            break;
          }

}

}
}
startGame();
})();