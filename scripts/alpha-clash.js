// function play (){
//     //step:-1 hide the home screen, to hide the screen add the class hidden to the home section
//     const homeScreen = document.getElementById('home-screen');
//     homeScreen.classList.add('hidden')

//     // console.log(homeScreen.classList);

//     // show the playground
//     const playGroundSection =document.getElementById('play-ground')
//     playGroundSection.classList.remove('hidden')
//     // console.log(playGroundSection.classList);
// }

function handleKeyBoradKeyUpEvent(event){
    const playerPress = event.key;
    console.log('player pressed',playerPress);

    // stop the game if pressed 'Esc'
    if(playerPress === 'Escape'){
        gameOver();
    }

    // key palyer is expected to press
    const currentAlphabetElement = document.getElementById('current-alphabet');
    const currentAlphabetInnerText = currentAlphabetElement.innerText;
    const expactedAlphabet = currentAlphabetInnerText.toLowerCase();   

    // check right or worng key pressed
    if(playerPress === expactedAlphabet){
        console.log('you get a point');



    const currentScore = getTextElementValuById('current-score');
    const updatedScore = currentScore + 1;
    setTextElementValuById('current-score',updatedScore);


    

    






        // ..........................................................................
        // update score
    //     //1. get the current score
    //     const currentScoreElement = document.getElementById('current-score');
    //     const currentScoreText = currentScoreElement.innerText;
    //     const currentScore = parseInt(currentScoreText);
    //     console.log(currentScore)
    // const currentScore  = getTextElementValuById('current-score');

    //    // 2.incress the score by 1
        const newScore = currentScore + 1;

    // //    3.show the updated score
    //      currentScoreElement.innerText = newScore; 



        // start a new round
        removeBackgroundColorById(expactedAlphabet);
        continueGame();
}
    else{
        console.log('durmia right key press koro');


        const currentLife = getTextElementValuById('current-life');
        const updatedLife = currentLife - 1;
        setTextElementValuById('current-life',updatedLife);

        if(updatedLife === 0){
           gameOver();
        }

        // ...................................................
        // step:-1 get the current life number
        // const currentLifeElement = document.getElementById('current-life');
        // const currentLifeText = currentLifeElement.innerText;
        // const currentLife = parseInt(currentLifeText);
        // // step:-2 rediuse the life count
        // const newLife = currentLife - 1;

        // // step:-3 displa the  updated life count
        // currentLifeElement.innerText = newLife;
    }
}


document.addEventListener('keyup',handleKeyBoradKeyUpEvent);




function continueGame (){
// step:-1 genaret a rendom alphabet
       const alphabet = getARandomAlphabet();
    //    console.log('your random alphabet',alphabet);


    //    display show random alphabet
    const currentAlphabet = document.getElementById('current-alphabet');
    currentAlphabet.innerText = alphabet;


    // set background color
    setBackgroundColorById(alphabet);

}


function play (){
    // hide everything show only playground
    hideElementById('home-screen');
    hideElementById('final-score');
    showElementById('play-ground');
    // rest scrore and life
    setTextElementValuById('current-life',5);
    setTextElementValuById('current-score',0);

    continueGame();
}

function gameOver (){
    hideElementById('play-ground');
    showElementById('final-score');

    // update final score
    // 1.get the last score
    const lastScore = getTextElementValuById('current-score');
    console.log(lastScore);
    setTextElementValuById('last-score',lastScore);

    // clear the last selected alphabet
    const currentAlphabet = getElementTextById('current-alphabet');
    removeBackgroundColorById(currentAlphabet);
}