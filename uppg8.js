const persons = [
    {
        name: "Amanda",
        age: 23
    },
    {
        name: "Oscar",
        age: 23
    },
    {
        name: "Freja",
        age: 35
    },
    {
        name: "Filippa",
        age: 50
    },
    {
        name: "Klara",
        age: 25
    }
]

function checkArray(array) {
    for (const personObj of array) {
        if (personObj.age > 30) {
            console.log("Persor över 30" + personObj.name)
        }
    }
}

function uppg8() {

    // skapa en array med fem person obkjet
    // varje person objekt ska ha två properties, name och age

    // skapa en fuktion som tar in en array som argument
    // skapa ett konditionsvillkor som gör att det bara är namnet på personerna som är
    //  över 30 år som skrivs ut i konsolen

    // anropa funktionen och skicka med arrayen som argument


    checkArray(persons)
}

uppg8()

module.exports = { uppg8 };