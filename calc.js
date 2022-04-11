const clear = document.getElementById('clear')
const deleteBtn = document.getElementById('delete')
const display = document.getElementById('display')
const zero = document.getElementById('0')
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

function operate(num1, operator, num2) {
  if (operator === '+') {
    return add(num1, num2)
  } else if (operator === '-') {
    return subtract(num1, num2)
  } else if (operator === '×') {
    return multiply(num1, num2)
  } else if (operator === '/' || operator === '÷') {
    return divide(num1, num2)
  }
}

function getResult(input) {
  console.log(input)
  let nums = input.split(" ")
  if (nums.filter(e => e).length < 3) {
    display.textContent = 'ERROR'
    return
  }
  while (nums.length > 1) {
    let num1 = nums.shift()
    let operator = nums.shift()
    let num2 = nums.shift()
    if (operator === '÷' && num2 === '0') {
      alert('Error: Cannot divide by zero!')
      clearDisplay();
      return
    }
    let result = operate(parseInt(num1), operator, parseInt(num2))
    nums.unshift(result)
  }
  display.textContent = parseFloat(nums[0].toFixed(5));
  return parseFloat(nums.shift().toFixed(5));
}

let input = ''

function clearDisplay() {
  display.textContent = ''
  input = ''
}

function updateDisplay(char) {
  if (display.textContent === 'ERROR') {
    clearDisplay();
  }
  if (input.length >= 15) {
    alert('You cannot make any more inputs')
    return
  }
  display.textContent += char
  input += char
}

clear.addEventListener('click', () => clearDisplay())
zero.addEventListener('click', () => updateDisplay('0'))
one.addEventListener('click', () => updateDisplay('1'))
two.addEventListener('click', () => updateDisplay('2'))
three.addEventListener('click', () => updateDisplay('3'))
four.addEventListener('click', () => updateDisplay('4'))
five.addEventListener('click', () => updateDisplay('5'))
six.addEventListener('click', () => updateDisplay('6'))
seven.addEventListener('click', () => updateDisplay('7'))
eight.addEventListener('click', () => updateDisplay('8'))
nine.addEventListener('click', () => updateDisplay('9'))
plus.addEventListener('click', () => updateDisplay(' + '))
minus.addEventListener('click', () => updateDisplay(' - '))
multip.addEventListener('click', () => updateDisplay(' × '))
divid.addEventListener('click', () => updateDisplay(' ÷ '))
equal.addEventListener('click', () => getResult(input))
