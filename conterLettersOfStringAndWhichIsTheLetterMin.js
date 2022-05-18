var string;
//.match es inportante me sirve para ver que está cumpliendo mi regExp y lo imprime en un arr

function counterVowel(str){
var letters = /[aeiou]/ig,
    onlyLetters = str.toLowerCase().match(letters).length;

  return onlyLetters
}



function findMinLetter(str){
  var objWhitLettersAndNumber = new Object,
      regularExpression = /[aeiou]/g,
      acumulater = 0;
      onlyLetter = str.toLowerCase().match(regularExpression).sort();

  for(index = 1; index <= onlyLetter.length; index++){
    if(onlyLetter[index - 1] === onlyLetter[index]){
      acumulater++;
    } else{
      keepLetter = onlyLetter[index -1];
      objWhitLettersAndNumber[keepLetter] = acumulater++;
      acumulater = 0;
      
    }
  }

  var minValueOfVowel = Object.values(objWhitLettersAndNumber);
     minValueOfVowel = Math.min(...minValueOfVowel);

    //este espacio es vital entenderlo, aprender a usar mejor las keys(o values), y lo mas importante, la funcion .find, es super sencillo pero importante tenerlo bien claro

  var letterWhitNumberMin = Object.keys(objWhitLettersAndNumber).find(
    min => objWhitLettersAndNumber[min] === minValueOfVowel
  )

  console.log(letterWhitNumberMin);
  return letterWhitNumberMin;
}


function logTest(fn, data, expectOutput, messageTestOkay, messageTestBad){
  console.log(fn(data) === expectOutput ? messageTestOkay : messageTestBad);
}


var string = 'El veloz murcielago hindu comia feliz cardillo y kiwi. La ciguena tocaba el saxofon detras del palenque de paja';

logTest(counterVowel, string, 42, 'function counter letters is correct, return 42', 'function counter letters is incorrect');
logTest(findMinLetter, string, 'u', 'function find the min letter is correct, return "u".', 'function find the min letter is incorrect');
