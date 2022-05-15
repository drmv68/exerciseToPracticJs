const input = 'ánita lavä la tina';
var sentenceWithoutSpaces = '';

/* function palindrome
 * description find if a input less than 160 characters is a palindrome
 * parameter phrase: the phrase that we going to check if is a palindrome
 * Result { boolean } 
*/

function palindrome(phrase) {
    var initialSequencePosition = 0;
    var inputImprove = eraseDiacriticsEsAndSpaces(phrase).toString();
    var lastSequencePosition = inputImprove.length - 1;

    for (let index = 0; index < inputImprove.length; index++) {

        if (inputImprove[ initialSequencePosition ] === inputImprove[ lastSequencePosition ]) {
            initialSequencePosition++;
            lastSequencePosition--;
        } else {
            return false;
        }
    }

    return true;
}

/*
 * function eraseDiacriticsEsAndSpaces
 * description: This function delete the accents (diacritics) in a sentence and don´t remove the letter ñ
 * parameter phrase: is the sentence (string) that i want to remove the accents
 * result { string } The phrase without accents
*/

function eraseDiacriticsEsAndSpaces(phrase) {
    return phrase
        .normalize('NFD')
        .replace(/([^n\u0300-\u036f]|n(?!\u0303(?![\u0300-\u036f])))[\u0300-\u036f]+/gi, "$1")
        .normalize().split(' ').join('').toString();
}

console.log(palindrome(input));

//var inputWithoutSpace = input.replace(/ /g, '');
//console.log(inputWithoutSpace);

/*
 * function inputWithoutSpace
 * description: This function delete the spaces in a sentence
 * parameter phrase: is the sentence (string) that i want to remove the spaces
 * result { string } The phrase without spaces
*/

function inputWithoutSpace(phrase) {
    for (let index = 0; index < phrase.length; index++) {
        if (phrase[ index ] !== ' ') {
            sentenceWithoutSpaces += phrase[ index ];
        }
    }

    return sentenceWithoutSpaces;
}

/*
 * function removeAccentsAndSpaces
 * description: This function delete the accents (diacritics) in a sentence
 * parameter string: is the sentence (string) that i want to remove the accents
 * result { string } The phrase without accents
*/

function removeAccentsAndSpaces(string) {
    const accents = { 'á': 'a', 'é': 'e', 'í': 'i', 'ó': 'o', 'ú': 'u', 'Á': 'A', 'É': 'E', 'Í': 'I', 'Ó': 'O', 'Ú': 'U' };
    return string.split('').map(letter => accents[ letter ] || letter).join('').split(' ').join('').toString();
}