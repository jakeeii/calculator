const clear = document.getElementById('clear')
const deleteBtn = document.getElementById('delete')
const display = document.getElementById('display')
const one = document.getElementById('1')
const two = document.getElementById('2')
const three = document.getElementById('3')
const four = document.getElementById('4')
const five = document.getElementById('5')
const six = document.getElementById('6')
const seven = document.getElementById('7')
const eight = document.getElementById('8')
const nine = document.getElementById('9')
const equal = document.getElementById('=')
const minus = document.getElementById('-')
const plus = document.getElementById('+')
const divid = document.getElementById('÷')
const multip = document.getElementById('x')


function add(num1, num2) {
  return num1 + num2
}

function subtract(num1, num2) {
  return num1 - num2
}

function multiply(num1, num2) {
  return num1 * num2
}

function divide(num1, num2) {
  return num1 / num2
}

function operate(num1, num2, operator) {
  if (operator === '+') {
    return add(num1, num2)
  } else if (operator === '-') {
    return subtract(num1, num2)
  } else if (operator === '*') {
    return multiply(num1, num2)
  } else if (operator === '/' || operator === '÷') {
    return divide(num1, num2)
  }
}

clear.addEventListener('click', () => display.textContent = "")
one.addEventListener('click', () => display.textContent += '1')
two.addEventListener('click', () => display.textContent += '2')
three.addEventListener('click', () => display.textContent += '3')
four.addEventListener('click', () => display.textContent += '4')
five.addEventListener('click', () => display.textContent += '5')
six.addEventListener('click', () => display.textContent += '6')
seven.addEventListener('click', () => display.textContent += '7')
eight.addEventListener('click', () => display.textContent += '8')
nine.addEventListener('click', () => display.textContent += '9')
plus.addEventListener('click', () => display.textContent += ' + ')
minus.addEventListener('click', () => display.textContent += ' - ')
multip.addEventListener('click', () => display.textContent += ' x ')
divid.addEventListener('click', () => display.textContent += ' ÷ ')
