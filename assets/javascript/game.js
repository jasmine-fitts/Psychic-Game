var userGuess = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]; 

var computerChoice = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]; 
var wins = 0;
var losses = 0;
var ties = 0;


document.onkeyup = function(event) {

    userGuess.push(event);

    console.log(event)

    for (var i = 0 ; i < computerChoice; i++);

    var computerChoice = userGuess[Math.floor(Math.random() * userGuess.length)];
        console.log(computerChoice)
   

    if(userGuess == 'a' || userGuess == 'b' || userGuess =='c' || userGuess =='d' || userGuess =='e' || userGuess =='f' || userGuess =='g' || userGuess =='h' || userGuess =='i' || userGuess =='j' || userGuess =='k' || userGuess =='l' || userGuess =='m' || userGuess =='n' || userGuess=='o' || userGuess=='p' || userGuess =='q' || userGuess =='r' || userGuess =='s' || userGuess =='t' || userGuess =='u' || userGuess=='v' || userGuess =='w' || userGuess =='x' || userGuess =='y' || userGuess =='z'){
        
        if (userGuess == computerChoice) {
            wins++;
            console.log(event)
}}
}
