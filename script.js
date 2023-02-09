const canvas = document.getElementById('canvas')
const ctx = canvas.getContext('2d')
const colorPicker = document.getElementById('color')
const increase = document.getElementById('increase')
const decrease = document.getElementById('decrease')
const clear = document.getElementById('clear')
const sizeEl = document.getElementById('size')

const eraser = document.getElementById('eraser')
const pencil = document.getElementById('pencil')

let size = 20
let isPressed = false
let color = 'black'
sizeEl.value = 20

let x
let y

eraser.addEventListener('click', () => {
    color = 'white'
})

pencil.addEventListener('click', () => {
    color = colorPicker.value
})

canvas.addEventListener('mousedown', (e) => {

    isPressed = true

    x = e.offsetX
    y = e.offsetY

})

canvas.addEventListener('mouseout', () => {
    reset()
})

canvas.addEventListener('mouseup', () => {
    reset()

})

function reset() {
    isPressed = false

    x = undefined
    y = undefined
}

canvas.addEventListener('mousemove', (e) => {
    if (isPressed) {
        const x2 = e.offsetX
        const y2 = e.offsetY
        drawCircle(x2, y2);
        drawLine(x, y, x2, y2)
        x = x2
        y = y2
    }
})

canvas.addEventListener('click', (e) => {
    const x2 = e.offsetX
    const y2 = e.offsetY
    drawCircle(x2, y2)
})

increase.addEventListener('click', () => {
    if (size >= 100) {
        size = 100
    }
    else {
        size += 5
    }
    sizeEl.value = size
})

decrease.addEventListener('click', () => {
    if (size <= 5) {
        size = 5
    }
    else {
        size -= 5
    }
    sizeEl.value = size
})

sizeEl.addEventListener('change', () => {
    if (sizeEl.value <= 100 && sizeEl.value >= 5)
        size = sizeEl.value;
    else sizeEl.value = size

})

clear.addEventListener('click', () => {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
})


colorPicker.addEventListener('change', () => {
    color = colorPicker.value;
})



function drawCircle(x, y) {
    ctx.beginPath()
    ctx.arc(x, y, size, 0, Math.PI * 2)
    ctx.fillStyle = color
    ctx.fill()
}

function drawLine(x1, y1, x2, y2) {
    ctx.beginPath()
    ctx.moveTo(x1, y1)
    ctx.lineTo(x2, y2)
    ctx.strokeStyle = color
    ctx.lineWidth = size * 2
    ctx.stroke()
}



