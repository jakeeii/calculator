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
  let nums = input.split(" ")
  while (nums.length > 1) {
    let result = operate(parseInt(nums.shift()), nums.shift(), parseInt(nums.shift()))
    nums.unshift(result)
  }
  return nums.shift()
}

let input = ''

clear.addEventListener('click', () => display.textContent = '')
zero.addEventListener('click', () => display.textContent = '0')
one.addEventListener('click', () => {
  display.textContent += '1'
  input += '1'
})
two.addEventListener('click', () => {
  display.textContent += '2'
  input += '2'
})
three.addEventListener('click', () => {
  display.textContent += '3'
  input += '3'
})
four.addEventListener('click', () => {
  display.textContent += '4'
  input += '4'
})
five.addEventListener('click', () => {
  display.textContent += '5'
})
six.addEventListener('click', () => {
  display.textContent += '6'
  input += '6'
})
seven.addEventListener('click', () => {
  display.textContent += '7'
  input += '7'
})
eight.addEventListener('click', () => {
  display.textContent += '8'
  input += '8'
})
nine.addEventListener('click', () => {
  display.textContent += '9'
  input += '9'
})
plus.addEventListener('click', () => {
  display.textContent += ' + '
  input += ' + '
})
minus.addEventListener('click', () => {
  display.textContent += ' - '
  input += ' - '
})
multip.addEventListener('click', () => {
  display.textContent += ' × '
  input += ' × '
})
divid.addEventListener('click', () => {
  display.textContent += ' ÷ '
  input += ' ÷ '
})

