const board = document.querySelector('.container')

const SQUARES_NUMBER = 400
const COLORS = ['red','blue','green','yellow','perpole']

for (i = 0; i < SQUARES_NUMBER; i++) {
    const square = document.createElement('div')
    square.classList.add('square')
    board.append(square)
    
    square.addEventListener('mousemove', () => {
      setColor(square)  
    })
    square.addEventListener('mouseleave', () => {
        removeColor(square)  
      })

}

function setColor (squ) {
    const color = getRandomColor()
    squ.style.backgroundColor = color
    squ.style.boxShadow =  `0 0 2px ${color}, 0 0 10px ${color}`
}


function removeColor (squ) {
    squ.style.backgroundColor = '#1d1d1d'
    squ.style.boxShadow = `0 0 2px #000`
}

function getRandomColor () {
    const index = Math.floor(Math.random() * COLORS.length)
    return COLORS[index]
}