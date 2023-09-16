"use strict"
/*
function solveEquation(a, b, c) {
  let arr = [];
  
  return arr;
}

function calculateTotalMortgage(percent, contribution, amount, countMonths) {
  
}
*/

function solveEquation(a, b, c) {
  let discriminant = b ** 2 - 4 * a * c;
  let arr = [];

  if (discriminant < 0) {
    console.log(arr);
  } else if (discriminant === 0) {
    let root = -b / (2 * a);
    arr.push(root);
    console.log(arr);
  } else {
    let root1 = (-b + Math.sqrt(discriminant)) / (2 * a);
    let root2 = (-b - Math.sqrt(discriminant)) / (2 * a);
    arr.push(root1, root2);
    console.log(arr);
  }
  return arr;
}

function calculateTotalMortgage(percent, contribution, amount, countMonths) {
  let monthlyInterestRate = percent / 100 / 12;
  let loanBody = amount - contribution;
  let monthlyPayment = loanBody * (monthlyInterestRate + (monthlyInterestRate / ((1 + monthlyInterestRate) ** countMonths - 1)));
  let totalPayment = monthlyPayment * countMonths;
  let roundedTotalPayment = parseFloat(totalPayment.toFixed(2));
  console.log(Number(roundedTotalPayment));
}