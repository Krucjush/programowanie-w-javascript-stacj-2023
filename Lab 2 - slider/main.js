// notatnik z zajęć

let position = 0
const main = document.querySelector('main')
const slides = document.querySelector('.slides')

// jednorazowe wykonanie kodu po określonym czasie
// const timeoutRef = setTimeout(
//     () => {
//         main.innerHTML = 'Msg from setTimeout'
//     },
//     2000
// )

// wykonywanie kodu co określony czas
let licznik = 0
const intervalRef = setInterval(
    () => {
        slides.style.transform = `translate(${position - 600}px)`
        main.innerHTML = `Msg from setInterval: ${licznik++}`
        position -= 600
        if (licznik == 5) {
            position = 0
            licznik = 0
        }
    },
    5000
)

// function slide() {
//     // console.log('slides call')
//     for (let i = 0; i < slides.childElementCount - 1; i++) {
//         slides.style.transform = "translate(-600px) 2s"
//     }
//     index++
//     if (index > slides.childElementCount - 1) {index = 1}
//     slides.children[index - 1].style.display = "block"
//     setTimeout(slide(), 2000)
// }
// slide()

// function slide() {
//     for(let i = 0; i < slides.length)
// }

// kasujemy setInterval
// clearInterval(intervalRef)

// kasujemy setTimeout
// clearTimeout(intervalRef)


// window.requestAnimationFrame