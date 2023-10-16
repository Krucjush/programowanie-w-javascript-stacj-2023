// notatnik z zajęć

let position = 0
const main = document.querySelector('main')
const slides = document.querySelector('.slides')

const firstBtn = document.querySelector('#dot1')
firstBtn.style.backgroundColor = 'black'

// wykonywanie kodu co określony czas
let licznik = 0
let intervalRef = setInterval(() => {
    slide()
},5000)

for (let i = 1; i <= 6; i++) {
    const dotBtn = document.querySelector(`#dot${i}`)
    dotBtn.addEventListener('click', () => {
        
        slides.style.transform = `translate(${(i - 1) * -600}px)`
        position = (i - 1) * -600
        licznik = i - 1
        dotBtn.style.backgroundColor = 'black'
        for (let j = 1; j <= 6; j++) {
            if (j != i) {
                const otherDotBtn = document.querySelector(`#dot${j}`)
                otherDotBtn.style.backgroundColor = 'gray'
            }
        }
        clearInterval(intervalRef)
        intervalRef = setInterval(() => {
            slide()
        },5000)
    })
}

function slide() {
    if (licznik == 5) {
        position = 0
        licznik = 0
        slides.style.transform = `translate(${position}px)`
    }
    else {
        slides.style.transform = `translate(${position - 600}px)`
        position -= 600
        licznik++
    }
    const dotBtn = document.querySelector(`#dot${licznik+1}`)
    dotBtn.style.backgroundColor = 'black'
    for (let i = 1; i <= 6; i++) {
        if (i != licznik+1) {
            const otherDotBtn = document.querySelector(`#dot${i}`)
            otherDotBtn.style.backgroundColor = 'gray'
        }
    }
}

// kasujemy setInterval
// clearInterval(intervalRef)

// kasujemy setTimeout
// clearTimeout(intervalRef)


// window.requestAnimationFrame