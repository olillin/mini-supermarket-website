const frameCount = 4
const delay = 500

let currentFrame = 0
/** @type {Array<HTMLElement>} */
const animationFrames = []

for (let i = 0; i < frameCount; i++) {
    /**@type {HTMLElement|null} */
    const element = document.getElementById(`frame${i}`)
    if (element == null) {
        throw new Error(`Could not find frame ${i}`)
    }
    animationFrames.push(element)
}

;(function nextFrame() {
    for (let i = 0; i < animationFrames.length; i++) {
        animationFrames[i].style.display = currentFrame == i ? 'block' : 'none'
    }

    currentFrame++
    currentFrame %= frameCount
    setTimeout(nextFrame, delay)
})()
