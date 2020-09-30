function Calculate(num1, num2) {
  return num1 + num2 
}
let firstNum = parseInt(prompt("Enter the first number"))
let secondNum = parseInt(prompt("Enter the second number"))
let sumNumbers = Calculate(firstNum, secondNum)
alert(`The sum of ${firstNum} and ${secondNum} is ${sumNumbers}`) 
