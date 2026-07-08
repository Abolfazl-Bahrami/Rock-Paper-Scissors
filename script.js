let score = JSON.parse(localStorage.getItem('score')) || {win : 0 , lose : 0 , tie : 0};


function playGame(chose){
    let computerMoveGame = computeMove();

    //game
    let result;
    if(chose === 'Rock'){
    result = computerMoveGame === 'Rock' ? 'Tie' : (computerMoveGame === 'Paper' ? 'Lose' : 'Win');
    }else if(chose === 'Paper'){
    result = computerMoveGame === 'Paper' ? 'Tie' : (computerMoveGame === 'Scissors' ? 'Lose' : 'Win');
    }else {
        result = computerMoveGame === 'Scissors' ? 'Tie' : (computerMoveGame === 'Rock' ? 'Lose' : 'Win');
    }

    //print result
    document.querySelector('.js-result').innerHTML = `You ${result}`;

    //print why
    document.querySelector('.js-why').innerHTML = `You ${chose} - Computer ${computerMoveGame}`;

    //score
    if(result === 'Win'){
        score.win++;
    }else if(result === 'Lose'){
        score.lose++;
    }else score.tie++;

    //save score
    localStorage.setItem('score' ,  JSON.stringify(score) );

    updateScore();
}

function updateScore(){
    document.querySelector('.js-score').innerHTML = `Win : ${score.win} , Lose : ${score.lose} , Tie : ${score.tie}`;
}
function computeMove(){
    let num = Math.random() , move;
    if(num < 1/3){
        move = 'Rock';
    }else if(num >1/3 && num <2/3){
        move = 'Paper';
    }else move = 'Scissors';

    return move;
}

function restScore(){
    score.win = 0;
    score.lose = 0 ;
    score.tie =  0 ;
    updateScore();
    localStorage.removeItem('score');
}