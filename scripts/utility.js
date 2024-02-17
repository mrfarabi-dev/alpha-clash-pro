function hideElementById (elementId){
    const element = document.getElementById(elementId);
    element.classList.add('hidden');
}


function showElementById (elementId){
    const element = document.getElementById(elementId);
    element.classList.remove('hidden')
}


function setBackgroundColorById(elementId){
    const element = document.getElementById(elementId);
    element.classList.add('bg-orange-400');
}


function removeBackgroundColorById(elementId){
    const element = document.getElementById(elementId);
    element.classList.remove('bg-orange-400')
}


function getTextElementValuById (elementId){
    const element = document.getElementById(elementId);
    const elementValuText = element.innerText;
    const value = parseInt(elementValuText);
    return value;
}



function setTextElementValuById  (elementId,value){
const element = document.getElementById(elementId);
element.innerText = value;
}


function getElementTextById(elementId){
    const element = document.getElementById(elementId);
    const text = element.innerText;
    return text;
}



function getARandomAlphabet (){
    const alphabetstring = 'abcdefghijklmnopqrstuvwxyz';
    const alphabets = alphabetstring.split('');
    
    

    const randomNumber = Math.random()*25;
    const index = Math.round(randomNumber);


    const alphabet = alphabets[index];
    return alphabet;
}





// function getARandomAlphabet (){
//     // get or create an alphabet array
//     const alphabetstring = 'abcdefghijklmnopqrstuvwxyz';
//     const alphabets = alphabetstring.split('');
//     console.log(alphabets);

//     // get a random index between 0 -25
//     const randomNumber = Math.random() * 25;
//     const index = Math.round(randomNumber);
//     console.log(index);


//     const alphabet = alphabets[index];
//     // console.log(index,alphabet);
//     return alphabet;
// }