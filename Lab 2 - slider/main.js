let position = 0
const main = document.querySelector('main')
const slides = document.querySelector('.slides')

const firstBtn = document.querySelector('#dot1')
firstBtn.style.backgroundColor = 'black'

let licznik = 0
let type = "right"
let intervalRef = setInterval(() => {
    slide(type)
},5000)

for (let i = 1; i <= 6; i++) {
    const dotBtn = document.querySelector(`#dot${i}`)
    dotBtn.addEventListener('click', () => {
        slides.style.transform = `translate(${(i - 1) * -600}px)`
        position = (i - 1) * -600
        licznik = i - 1
        dotBtn.style.backgroundColor = 'black'
        clearDots()
        restartInterval(type)
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
    restartInterval(type)
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
    restartInterval(type)
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

slideRightButton = document.querySelector("#slide-right")
slideRightButton.addEventListener("click", () => {
    type = "right"
    restartInterval(type)
})
slideLeftButton = document.querySelector("#slide-left")
slideLeftButton.addEventListener("click", () => {
    type = "left"
    restartInterval(type)
})

function slide(type) {
    if (type == "right") {
        if (licznik == 5) {
            position = 0
            licznik = 0
            slides.style.transform = `translate(${position}px)`
        } else {
            slides.style.transform = `translate(${position - 600}px)`
            position -= 600
            licznik++
        }
    } else if (type == "left") {
        if (licznik == 0) {
            position = -3000
            licznik = 5
            slides.style.transform = `translate(${position}px)`
        } else {
            slides.style.transform = `translate(${position + 600}px)`
            position += 600
            licznik--
        }
    } else {
        if (licznik == 5) {
            position = 0
            licznik = 0
                slides.style.opacity = setInterval(fadeOut, 100)
            slides.style.position = position
        } else {
            slides.style.opacity = 0.0
            position -= 600
            licznik++
                slides.style.opacity = setInterval(fadeOut, 100)
            slides.style.position = position
        }
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

function restartInterval(type) {
    clearInterval(intervalRef)
    intervalRef = setInterval(() => {
        slide(type)
    },5000)
}

function fadeOut() {
    console.log('out')
    slides.style.opacity -= 0.1
    if (slides.style.opacity <= 0.0) {
        clearInterval(slides.style.opacity)
        slides.style.opacity = 0.0
        fadeIn()
    }
}

function fadeIn() {
    console.log('in')
    opacityInterval = setInterval(() => {
        slides.style.opacity += 0.1

        if (slides.style.opacity >= 1.0) {
            clearInterval(opacityInterval)
            slides.style.opacity = 1.0
        }
    }, 100);
    slides.style.opacity += 0.1
    if (slides.style.opacity >= 1.0) {
        clearInterval(slides.style.opacity)
    }
}