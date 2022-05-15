var numbersFibonacci;
var result = [];
var start = 0;

function fibonacci(numbersToCount){
      
    for(i=1; i < numbersToCount.length; i++){
      if(isNaN(numbersToCount[i-1])){
      return NaN
      } else if(i <= 1) {
      start = numbersToCount[i] + numbersToCount[i - 1];
      result.push(start);
        
      } else {
        start +=  numbersToCount[i];
        result.push(start);
      }
  }
  
  return result
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

result = [];
var numbersFibonacci = [5,6,7,8];
logTest(fibonacci, numbersFibonacci, [3,6,10,15,21,28,36], 'The operation Fibonacci is correct', 'The result of function of fibonacci is incorrect');

result = [];
var numbersFibonacci = [1,2,3,4];
logTest(fibonacci, numbersFibonacci, [3,6,10], 'The operation Fibonacci is correct', 'The result of function of fibonacci is incorrect');

result = [];
var numbersFibonacci = [9,8,7,10,77];
logTest(fibonacci, numbersFibonacci, [17,24,34,111], 'The operation Fibonacci is correct', 'The result of function of fibonacci is incorrect');

result = [];
var numbersFibonacci = ['a',2,3];
logTest(fibonacci, numbersFibonacci, NaN, 'The operation Fibonacci have NaN value, the test is correct', 'The result of function of fibonacci is incorrect because no return NaN');

result = [];
var numbersFibonacci = [2,3,4,'s'];
logTest(fibonacci, numbersFibonacci, NaN, 'The operation Fibonacci have NaN value, the test is correct', 'The result of function of fibonacci is incorrect because no return NaN');

result = [];
var numbersFibonacci = 'aa';
logTest(fibonacci, numbersFibonacci, NaN, 'The operation Fibonacci have NaN value, the test is correct', 'The result of function of fibonacci is incorrect because no return NaN');