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
        clearDots()
        restartInterval()
    })
}

leftButton = document.querySelector('#left')
leftButton.addEventListener('click', () => {
    if (licznik == 0) {
        position = -3000
        licznik = 5
    } else {
        position += 600
        licznik--
    }
    slides.style.transform = `translate(${position}px)`
    const dotBtn = document.querySelector(`#dot${licznik+1}`)
    dotBtn.style.backgroundColor = 'black'
    restartInterval()
    clearDots()
})
rightButton = document.querySelector('#right')
rightButton.addEventListener('click', () => {
    if (licznik == 5) {
        position = 0
        licznik = 0
    } else {
        position -= 600
        licznik++
    }
    slides.style.transform = `translate(${position}px)`
    const dotBtn = document.querySelector(`#dot${licznik+1}`)
    dotBtn.style.backgroundColor = 'black'
    restartInterval()
    clearDots()
})

run = true
slides.addEventListener("click", () => {
    if (run) {
        clearInterval(intervalRef)
        run = false
    } else {
        intervalRef = setInterval(() => {
            slide()
        },5000)
        run = true
    }
})

function slide() {
    if (licznik == 5) {
        position = 0
        licznik = 0
        slides.style.transform = `translate(${position}px)`
    } else {
        slides.style.transform = `translate(${position - 600}px)`
        position -= 600
        licznik++
    }
    const dotBtn = document.querySelector(`#dot${licznik+1}`)
    dotBtn.style.backgroundColor = 'black'
    clearDots()
}

function clearDots() {
    for (let i = 1; i <= 6; i++) {
        if (i != licznik+1) {
            const otherDotBtn = document.querySelector(`#dot${i}`)
            otherDotBtn.style.backgroundColor = 'gray'
        }
    }
}

function restartInterval() {
    clearInterval(intervalRef)
    intervalRef = setInterval(() => {
        slide()
    },5000)
}
