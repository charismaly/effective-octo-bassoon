const container = document.getElementById('container')
const colors = ['#a8e6cf', '#dcedc1', '#ffd3b6', '#ffaaa5', '#ff8b94']
const SQUARES = 500

for(let i = 0; i < SQUARES; i++) {
    const square = document.createElement('div')
    square.classList.add('square')
    container.appendChild('square')
    square.addEventListener('mouseover', () => setColor(square))
    square.addEventListener('mouseout', () => removecolor(square))
}

function removeColor(element {
    element.style.background = '#1d1d1d'
})

function setColor(element) {
    const color = getRandomColor()
    element.style.background = color
}

function getRandomColor() {
    return colors[Math.floor(Math.random()*colors.length)]
}
