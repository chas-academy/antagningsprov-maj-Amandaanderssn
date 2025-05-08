
function sumNumbers(a, b) {
    const sum = a + b
    return sum
}

function uppg7() {

    // skapa en funktion som tar in två tal som argument
    // funktionen ska returnera summan av talen
    // kalla på funktionen i en return statement och ge den parametrarna 5 och 10
    return sumNumbers(5, 10)
}

uppg7();

module.exports = { uppg7 };