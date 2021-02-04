const $screen = document.querySelector("#screen")

document.querySelectorAll("span").forEach(span => {
    console.log(span)
    span.addEventListener("click", buttonActions)
})

function buttonActions(event) {
    [appendOper(event), arithmetic(event)]
}

function appendOper(event) {
    const operandValue = event.target.innerText
    if ( operandValue === "C" ) {
        $screen.textContent = ""
    } else if ( operandValue === "=" ) {
        calculateValue()  
    } else {
        $screen.append( operandValue )
    }
}

function calculateValue() {
    equationString = $screen.innerText
    equation = equationString.split("+");
    const additionTotaler = (sum, element) => +sum + +element
    const substractionTotaler = (difference, element) => +difference - +element
    const multiplicationTotaler = (product, element) => +product * +element
    const divisionTotaler = (quotient, element) => +quotient / +element
    const solution = equation.reduce(additionTotaler)
    $screen.innerText = solution
}