'use strict'

function BinarioADecimal(num) {
  // tu codigo aca
  var numArr = num.split("");
  var suma = 0;
  for(var i = 0; i < numArr.length; i++){
    suma = suma + Math.pow(2, numArr.length-i -1) * numArr[i];
  };
  return suma;
};

function DecimalABinario(num) {
  // tu codigo aca
  let number = num;
  let binary = (number % 2).toString();
  for (; number > 1; ) {
      number = parseInt(number / 2);
      binary =  (number % 2) + (binary);
  };
  return binary; 
};


module.exports = {
  BinarioADecimal,
  DecimalABinario,
}