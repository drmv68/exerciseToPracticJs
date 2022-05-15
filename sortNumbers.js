var numbers;


function findMaxNumber(numbers){  
  return Math.max(...numbers);
}

function findMinNumber(numbers){  
  return Math.min(...numbers);
}

function findMaxAndMinNumber(numbers){
  var max = Math.max(...numbers);
  var min = Math.min(...numbers);

  var result = {
    max: max,
    min: min
  };
  return result;
}


function bubleOrganizationMinToMax(arrToSort){
var keepPositionValue;

  for(i=1; i <= arrToSort.length; i++){
    if(isNaN(arrToSort[i-1])){
      return NaN
    } else if (arrToSort[i - 1] > arrToSort[i]){
      
      keepPositionValue = arrToSort[i];
      arrToSort[i] = arrToSort[i - 1];
      arrToSort[i -1] = keepPositionValue;
      i = 0;
    }
  }
  
  return arrToSort
}

function bubleOrganizationMaxToMin(arrToSort){
var keepPositionValue;
  
  for(i = arrToSort.length; i >= 0;i--){
    if(arrToSort[i] > arrToSort[i - 1]){
      keepPositionValue = arrToSort[i - 1];
      arrToSort[i - 1] = arrToSort[i];
      arrToSort[i] = keepPositionValue;
      i = arrToSort.length;
    }
  }

  return arrToSort
}



function logTest(fn, input, expectedOutput, okMessage, failedMessage) {
  if(typeof(expectedOutput) === 'object'){
    result = fn(input);
  var objAreEqual = true;
  for (const property in result){
      if(result[property] !== expectedOutput[property]){
        objAreEqual = false;
        break;
      }
    }
  console.log(objAreEqual ? okMessage : failedMessage);
  } else if (isNaN(expectedOutput)){
    console.log(isNaN(fn(input)) ? okMessage : failedMessage);
  } else {
    console.log(fn(input) ===  expectedOutput ? okMessage : failedMessage);
  } 
}

numbers = [1,7,81];
logTest(findMaxNumber, numbers, 81, 'Number max is correct', 'Number mas is incorrect');

numbers = [2,5,-1,60];
logTest(findMaxNumber, numbers, 60, 'Number max is correct', 'Number mas is incorrect');

numbers = [2,5,'*',60];
logTest(findMaxNumber, numbers, NaN, 'Function max is NaN', 'NaN is incorrect');

numbers = [2,5,0,50,60];
logTest(findMinNumber, numbers, 0, 'Function MIN with 0 is correct', 'Function MIN 0 is incorrect');

numbers = [-15,5,60,20];
logTest(findMinNumber, numbers, -15, 'Function MIN with -15 is correct', 'Function -15 MIN is incorrect');

numbers = [2,5,-1,60];
logTest(findMaxNumber, numbers, 60, 'Number max is correct', 'Number mas is incorrect');

numbers = [9,34,3,10,40];
logTest(findMaxAndMinNumber, numbers, {max : 40, min : 3}, 'The function is correct', 'The function is incorrect');

numbers = [3,6,1,81];
logTest(bubleOrganizationMinToMax, numbers, [1,3,6,81], 'The organization buble Min to Max is correct', 'The organization buble is wrong');

numbers = [9,8,7,6,5,4,3,2,1];
logTest(bubleOrganizationMinToMax, numbers, [1,2,3,4,5,6,7,8,9], 'The organization buble Min to Max is correct', 'The organization buble is wrong');

numbers = [9,1,8,2,7,3,6,4,99,0];
logTest(bubleOrganizationMinToMax, numbers, [0,1,2,3,4,6,7,8,9,99], 'The organization buble Min to Max is correct', 'The organization buble is wrong');

numbers = ['a',2,5,7];
logTest(bubleOrganizationMinToMax, numbers, NaN, 'The organization buble have one value NaN and is correct the test', 'The test dont read the NaN');

numbers = [2,'b',5,7];
logTest(bubleOrganizationMinToMax, numbers, NaN, 'The organization buble have one value NaN and is correct the test', 'The test dont read the NaN');

numbers = [2,9,5,7,'x'];
logTest(bubleOrganizationMinToMax, numbers, NaN, 'The organization buble have one value NaN and is correct the test', 'The test dont read the NaN');

numbers = 'a';
logTest(bubleOrganizationMinToMax, numbers, NaN, 'The organization buble have one value NaN and is correct the test', 'The test dont read the NaN');

numbers = [3,6,1,81];
logTest(bubleOrganizationMaxToMin, numbers, [81,6,3,1], 'The organization buble Max to Min is correct', 'The organization buble Max to Min is wrong');

numbers = [0,3,2,1,4];
logTest(bubleOrganizationMaxToMin, numbers, [4,3,2,1,0], 'The organization buble Max to Min is correct', 'The organization buble Max to Min is wrong');

numbers = [1,2,3,4,5,99,0];
logTest(bubleOrganizationMaxToMin, numbers, [99,5,4,3,2,1,0], 'The organization buble Max to Min is correct', 'The organization buble Max to Min is wrong');