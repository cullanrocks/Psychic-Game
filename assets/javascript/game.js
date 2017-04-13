
    var choices = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z']
    var maxGuesses = 8;
    var wins = 0;
    var losses = 0;
    var userInputs = [];
    var ran = parseInt(Math.random() * 100) % 26;
    var randomLetter = choices[ran];
    var keysPressed; 
    var divvy;

   
   
    document.onkeyup = function(event) {
        keysPressed = event.key;
        userInputs.push(keysPressed);
         
        if (userInputs.indexOf(randomLetter) === -1) {
            maxGuesses--;
           
        }   
        else if (userInputs.indexOf(randomLetter) > -1) {
            maxGuesses--;

            if (keysPressed===randomLetter)
                wins++;
                maxGuesses=8;
                userInputs = [];
                ran = parseInt(Math.random() * 100) % 26;
                randomLetter = choices[ran];
            }
            
        if (maxGuesses === 0) {
            losses++;
            maxGuesses = 8;
            userInputs = [];
    }
        var html =  "<p>Your guesses: " + userInputs + "</p>" +
                    "<p>Guesses Left: " + maxGuesses + "</p>" +
                    "<p>Wins: " + wins + "</p>" +
                    "<p>Losses: " + losses + "</p>" ;

        divvy = document.getElementById("game");

        divvy.innerHTML = html;
        if (wins >= 3){
            alert("Close that console, you cheater!")
    }
    }
        

  