const smallDisplay = document.querySelector('.display-small');
const largeDisplay = document.querySelector('.display-large')
const valueBtns = document.querySelectorAll('.val')

let finalResult = ''

const clearBtn = document.getElementById('option-clear')
clearBtn.addEventListener('click', () => {
    smallDisplay.textContent = smallDisplay.textContent.substring(0, smallDisplay.textContent.length-1)
})

const deleteBtn = document.getElementById('option-delete')
deleteBtn.addEventListener('click', () => {
    smallDisplay.textContent = ""
    largeDisplay.textContent = ""
})

const equalSign = document.getElementById('option-equal-sign')
equalSign.addEventListener('click', () => {
    // Some code to traverse the smallDisplay.textContent and
    // separate the operators and operands

    // Parsing the expression
    finalResult = parsingExpression(smallDisplay.textContent)
    largeDisplay.textContent = finalResult

})

valueBtns.forEach((btn) => {
    btn.addEventListener('click', () => {
        smallDisplay.textContent += btn.textContent
    })
})

function parsingExpression(expression) {
    let p1 = ''
    let p2 = ''
    let operator = ''
    let result = null

    for(let i=0; i < expression.length; i++) {
        let char = expression[i]

        if(char === '.' || !isNaN(char)) {
            if(p1 === '' || operator === '')
                p1 += char
            else
                p2 += char

        } else {
            if(operator === '')
                operator = char
            else {
                p1 = operate(operator, p1, p2)
                p2 = ''
                operator = char
            }
        }
    }

    result = operate(operator, p1, p2)
    return result  
}

function operate(operator, a, b) {
    a = +a;
    b = +b;
    switch(operator) {
        case '+':
            return a+b
        case '−':
            return a-b
            // 'x' and '/' is not same as displayed buttons
        case '×':
            return a*b
        case '÷':
            return a/b
    }
}