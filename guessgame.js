function guessGame(){
    let randomNr = Math.floor(Math.random()*11);
    let guess = prompt('Guess a number between 1 and 10');
    console.log(randomNr, guess);
    do{
        if (guess > randomNr){
            guess = prompt('Too high, try again');
        }
        else if (guess < randomNr){
            guess = prompt('Too low, try again');
        }
    } while(guess!=randomNr);
    alert('You guessed the number!');
}
guessGame();