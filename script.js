// 1. Membuat aplikasi dapat menerima input dari tombol-tombol dan menampilkannya di layar display aplikasi kalkulator
// menampilkan angka saat menekan tombol
const calculatorScreen = document.querySelector('.calculator-screen') 

const updateScreen = (number) => {
    calculatorScreen.value = number
}

const numbers = document.querySelectorAll(".number")

numbers.forEach((number) => {
    number.addEventListener("click", (event) => {
        updateScreen(event.target.value)
    })
})

// 2. menyimpan angka-angka dan operator untuk melakukan kalkulasi
// mendefinisikan variabel untuk melakukan kalkulasi
let prevNumber = ''
let calculationOperator = ''
let currentNumber = '0'

// mengaktifkan peng-input-an lebih dari 2 digit angka
const inputNumber = (number)  => {
    if (currentNumber === '0') {
        currentNumber = number
    } else {
        currentNumber += number
    }
}

numbers.forEach((number) => {
    number.addEventListener("click", (event) => {
        inputNumber(event.target.value)
        updateScreen(currentNumber)
    })
})

// menjalankan function inputOperator saat Operator di klik
const operators = document.querySelectorAll(".operator")

operators.forEach((operator) => {
    operator.addEventListener("click", (event) => {
        inputOperator(event.target.value)
    })
})

// mendefiniskan function inputOperator
const inputOperator = (operator) => {
    if (calculationOperator === '') {
        prevNumber = currentNumber
    }
    calculationOperator = operator
    currentNumber = '0'
}

// 3. Mengaktifkan fungsi kalkulasi ke aplikasi calculatornya
// menjalankan function calculate saat tombol sama-dengan (=) di klik
const equalSign = document.querySelector('.equal-sign')

equalSign.addEventListener('click', () => {
    calculate()
    updateScreen(currentNumber)
})

// mendefinisikan dan menyimpan hasil function calculation
const calculate = () => {
    let result = ''
    switch(calculationOperator) {
        case "+":
            result = parseFloat(prevNumber) + parseFloat(currentNumber)
            break
        case "-":
            result = prevNumber - currentNumber
            break
        case "*":
            result = prevNumber * currentNumber
            break
        case "/":
            result = prevNumber / currentNumber
            break
        default:
            return
    }
    currentNumber = result
    calculationOperator = ''
}

// 4. Membuat tombol AC berjalan dengan lancar
// mendefinikan dan menjalankan function clearAll
const clearBtn = document.querySelector('.all-clear')

clearBtn.addEventListener('click', () => {
    clearAll()
    updateScreen(currentNumber)
})

const clearAll = () => {
    prevNumber = ''
    calculationOperator = ''
    currentNumber = '0'
}

// 5. Membuat aplikasi dapat mengkalkulasi angka desimal
// mendefinisikan dan menjalankan function inputDecimal
const decimal = document.querySelector('.decimal')

decimal.addEventListener('click', (event) => {
    inputDecimal(event.target.value)
    updateScreen(currentNumber)
})

// mencegah peng-inputan titik desimal berulang kali
inputDecimal = (dot) => {
    if (currentNumber.includes('.')) {
        return
    }
    currentNumber += dot
}