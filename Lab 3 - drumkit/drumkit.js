document.addEventListener('keypress', onKeyPress)

const KeyToSound = {
    'a': document.querySelector('#s1'),
    's': document.querySelector('#s2'),
    'd': document.querySelector('#s3'),
    'f': document.querySelector('#s4'),
    'g': document.querySelector('#s5'),
    'h': document.querySelector('#s6'),
    'j': document.querySelector('#s7'),
    'k': document.querySelector('#s8'),
    'l': document.querySelector('#s9'),
}

const channels = {
    1: [],
    2: [],
    3: [],
    4: []
}

let currentChannel = 1

const savedChannels = JSON.parse(sessionStorage.getItem('channels'))
if (savedChannels) {
    Object.keys(savedChannels).forEach(channel => {
        channels[channel] = savedChannels[channel]
    })
}

function onKeyPress(event) {
    const key = event.key.toLowerCase()
    const sound = KeyToSound[key]
    if (sound) {
        playSound(sound)
        recordSound(key, sound.src)
    } else if (key === 'r') {
        currentChannel = (currentChannel % 4) + 1
        console.log(`Aktualny kanał: ${currentChannel}`)
    } else if (key === 'p') {
        playRecordedSounds(currentChannel)
    } else if (key === 'o') {
        playRecordedSoundsAll()
    }
}

function playSound(sound) {
    sound.currentTime = 0
    sound.play()
}

function recordSound(key, soundSrc) {
    channels[currentChannel].push({ key, soundSrc })
    saveChannelsToSessionStorage()
}

function saveChannelsToSessionStorage() {
    sessionStorage.setItem(channels, JSON.stringify(channels))
}

function playRecordedSounds(channel) {
    channels[channel].forEach(({ soundSrc }, index) => {
        setTimeout(() => {
            const sound = new Audio(soundSrc)
            playSound(sound)
        }, 100 * index)
    })
}

function playRecordedSoundsAll() {
    Object.keys(channels).forEach(channel => {
        playRecordedSounds(parseInt(channel))
    })
}