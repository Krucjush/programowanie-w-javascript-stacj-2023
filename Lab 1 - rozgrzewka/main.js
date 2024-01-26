const wynik = document.querySelector('#wyniki')
let numbersCount = document.querySelector('#numbers').childElementCount

const node = document.querySelector('#numbers')

const dodajBtn = document.querySelector('#dodaj')
dodajBtn.addEventListener('click', () => {
    const index = numbersCount + 1
    const numberGroup = document.createElement('div')
    numberGroup.setAttribute('class', 'numberGroup')
    let input = document.createElement('input')
    input.setAttribute('type', 'text')
    input.setAttribute('id', `number${index}`)
    input.addEventListener('change', () => {
        calculate()
    })
    numberGroup.append(input)
    let removeBtn = document.createElement('button')
    removeBtn.setAttribute('type', 'button')
    removeBtn.setAttribute('class', 'removeButton')
    removeBtn.textContent = 'x'
    removeBtn.addEventListener('click', () => {
        input.value = ''
        calculate()
        numbersCount--
        numberGroup.remove()
        updateIndexes()
    })
    numberGroup.append(removeBtn)
    node.append(numberGroup)
    numbersCount = document.querySelector('#numbers').childElementCount
})

function calculate() {
    let valuesDictionary = new Object()
    let filledNumbers = 0

    for (let j = 1; j <= numbersCount; j++) {
        const input = document.querySelector(`#number${j}`)
        const inputValue = parseInt(input.value)

        if (!isNaN(inputValue)) {
            valuesDictionary[`l${j}v`] = inputValue
        } else {
            delete valuesDictionary[`l${j}v`]
        }
    }
    if (Object.keys(valuesDictionary).length > 0) {
        const sum = Object.values(valuesDictionary).reduce((a, b) => a + b, 0)
        avg = sum / Object.keys(valuesDictionary).length
        let max = -Infinity
        let min = Infinity
        for (key in valuesDictionary) {
            if (valuesDictionary.hasOwnProperty(key)) {
                filledNumbers++
                const value = valuesDictionary[key]
                if (value > max) {
                    max = value
                }
                if (value < min) {
                    min = value
                }
            }
        }
        wynik.innerHTML = `Sum: ${sum}<br>Average: ${avg}<br>Max: ${max}<br>Min: ${min}<br>Count: ${filledNumbers}`
    } else {
        wynik.innerHTML = ''
    }
}

function updateIndexes() {
    const inputs = document.getElementsByTagName('input')
    for (let i = 0; i < inputs.length; i++) {
        inputs[i].id = `number${i+1}`
    }
}