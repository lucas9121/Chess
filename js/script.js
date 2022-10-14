const allSquares = document.querySelectorAll('.square')
const king = document.querySelector('#myKing')
let squaresArray = [...allSquares]

for(let square of allSquares){
    let small = document.createElement('small')
    small.innerHTML = `${square.id}`
    square.appendChild(small)
}

const kingMovement = (king, idx) => {
    //if there is a box to the right, left, above or below the piece, then chance bacground color
    if(allSquares[idx + 1]) {
        // allSquares[idx + 1].style.background  = `radial-gradient(${blue}, green)`
        allSquares[idx + 1].style.background = `radial-gradient(${window.getComputedStyle(allSquares[idx + 1], null).getPropertyValue('background-color')}, ${window.getComputedStyle(allSquares[idx + 1], null).getPropertyValue('background-color')}, #0010ff99)`
        allSquares[idx + 1].addEventListener('click', (evt) => {
            let square = evt.target
            allSquares[idx].removeChild(king)
            squaresArray[idx].removeChild(king)
            square.prepend(king)
            if(allSquares[idx + 1]) allSquares[idx + 1].style.background = ''
            if(allSquares[idx - 1]) allSquares[idx - 1].style.background = ''
            if(allSquares[idx + 7]) allSquares[idx + 7].style.background = ''
            if(allSquares[idx - 7]) allSquares[idx - 7].style.background = ''
            if(allSquares[idx + 8]) allSquares[idx + 8].style.background = ''
            if(allSquares[idx - 8]) allSquares[idx - 8].style.background = ''
            if(allSquares[idx + 9]) allSquares[idx + 9].style.background = ''
            if(allSquares[idx - 9]) allSquares[idx - 9].style.background = ''

        })
    } 
    if(allSquares[idx - 1]) {
        allSquares[idx - 1].style.background = `radial-gradient(${window.getComputedStyle(allSquares[idx - 1], null).getPropertyValue('background-color')}, ${window.getComputedStyle(allSquares[idx - 1], null).getPropertyValue('background-color')}, #0010ff99)`
        allSquares[idx - 1].addEventListener('click', (evt) => {
            let square = evt.target
            allSquares[idx].removeChild(king)
            square.prepend(king)
            if(allSquares[idx + 1]) allSquares[idx + 1].style.background = ''
            if(allSquares[idx - 1]) allSquares[idx - 1].style.background = ''
            if(allSquares[idx + 7]) allSquares[idx + 7].style.background = ''
            if(allSquares[idx - 7]) allSquares[idx - 7].style.background = ''
            if(allSquares[idx + 8]) allSquares[idx + 8].style.background = ''
            if(allSquares[idx - 8]) allSquares[idx - 8].style.background = ''
            if(allSquares[idx + 9]) allSquares[idx + 9].style.background = ''
            if(allSquares[idx - 9]) allSquares[idx - 9].style.background = ''
        })
    }
    if(allSquares[idx + 7]) {
        allSquares[idx + 7].style.background = `radial-gradient(${window.getComputedStyle(allSquares[idx + 7], null).getPropertyValue('background-color')}, ${window.getComputedStyle(allSquares[idx + 7], null).getPropertyValue('background-color')}, #0010ff99)`
        allSquares[idx + 7].addEventListener('click', (evt) => {
            let square = evt.target
            allSquares[idx].removeChild(king)
            square.prepend(king)
            if(allSquares[idx + 1]) allSquares[idx + 1].style.background = ''
            if(allSquares[idx - 1]) allSquares[idx - 1].style.background = ''
            if(allSquares[idx + 7]) allSquares[idx + 7].style.background = ''
            if(allSquares[idx - 7]) allSquares[idx - 7].style.background = ''
            if(allSquares[idx + 8]) allSquares[idx + 8].style.background = ''
            if(allSquares[idx - 8]) allSquares[idx - 8].style.background = ''
            if(allSquares[idx + 9]) allSquares[idx + 9].style.background = ''
            if(allSquares[idx - 9]) allSquares[idx - 9].style.background = ''
        })
    } 
    if(allSquares[idx - 7]) {
        allSquares[idx - 7].style.background = `radial-gradient(${window.getComputedStyle(allSquares[idx - 7], null).getPropertyValue('background-color')}, ${window.getComputedStyle(allSquares[idx - 7], null).getPropertyValue('background-color')}, #0010ff99)`
        allSquares[idx - 7].addEventListener('click', (evt) => {
            let square = evt.target
            allSquares[idx].removeChild(king)
            square.prepend(king)
            if(allSquares[idx + 1]) allSquares[idx + 1].style.background = ''
            if(allSquares[idx - 1]) allSquares[idx - 1].style.background = ''
            if(allSquares[idx + 7]) allSquares[idx + 7].style.background = ''
            if(allSquares[idx - 7]) allSquares[idx - 7].style.background = ''
            if(allSquares[idx + 8]) allSquares[idx + 8].style.background = ''
            if(allSquares[idx - 8]) allSquares[idx - 8].style.background = ''
            if(allSquares[idx + 9]) allSquares[idx + 9].style.background = ''
            if(allSquares[idx - 9]) allSquares[idx - 9].style.background = ''
        })
    }  
    if(allSquares[idx + 8]) {
        allSquares[idx + 8].style.background = `radial-gradient(${window.getComputedStyle(allSquares[idx + 8], null).getPropertyValue('background-color')}, ${window.getComputedStyle(allSquares[idx + 8], null).getPropertyValue('background-color')}, #0010ff99)`
        allSquares[idx + 8].addEventListener('click', (evt) => {
            let square = evt.target
            allSquares[idx].removeChild(king)
            square.prepend(king)
            if(allSquares[idx + 1]) allSquares[idx + 1].style.background = ''
            if(allSquares[idx - 1]) allSquares[idx - 1].style.background = ''
            if(allSquares[idx + 7]) allSquares[idx + 7].style.background = ''
            if(allSquares[idx - 7]) allSquares[idx - 7].style.background = ''
            if(allSquares[idx + 8]) allSquares[idx + 8].style.background = ''
            if(allSquares[idx - 8]) allSquares[idx - 8].style.background = ''
            if(allSquares[idx + 9]) allSquares[idx + 9].style.background = ''
            if(allSquares[idx - 9]) allSquares[idx - 9].style.background = ''
        })
    } 
    if(allSquares[idx - 8]) {
        allSquares[idx - 8].style.background = `radial-gradient(${window.getComputedStyle(allSquares[idx - 8], null).getPropertyValue('background-color')}, ${window.getComputedStyle(allSquares[idx - 8], null).getPropertyValue('background-color')}, #0010ff99)`
        allSquares[idx - 8].addEventListener('click', (evt) => {
            let square = evt.target
            allSquares[idx].removeChild(king)
            square.prepend(king)
            if(allSquares[idx + 1]) allSquares[idx + 1].style.background = ''
            if(allSquares[idx - 1]) allSquares[idx - 1].style.background = ''
            if(allSquares[idx + 7]) allSquares[idx + 7].style.background = ''
            if(allSquares[idx - 7]) allSquares[idx - 7].style.background = ''
            if(allSquares[idx + 8]) allSquares[idx + 8].style.background = ''
            if(allSquares[idx - 8]) allSquares[idx - 8].style.background = ''
            if(allSquares[idx + 9]) allSquares[idx + 9].style.background = ''
            if(allSquares[idx - 9]) allSquares[idx - 9].style.background = ''
        })
    }
    if(allSquares[idx + 9]) {
        allSquares[idx + 9].style.background = `radial-gradient(${window.getComputedStyle(allSquares[idx + 9], null).getPropertyValue('background-color')}, ${window.getComputedStyle(allSquares[idx + 9], null).getPropertyValue('background-color')}, #0010ff99)`
        allSquares[idx + 9].addEventListener('click', (evt) => {
            let square = evt.target
            allSquares[idx].removeChild(king)
            square.prepend(king)
            if(allSquares[idx + 1]) allSquares[idx + 1].style.background = ''
            if(allSquares[idx - 1]) allSquares[idx - 1].style.background = ''
            if(allSquares[idx + 7]) allSquares[idx + 7].style.background = ''
            if(allSquares[idx - 7]) allSquares[idx - 7].style.background = ''
            if(allSquares[idx + 8]) allSquares[idx + 8].style.background = ''
            if(allSquares[idx - 8]) allSquares[idx - 8].style.background = ''
            if(allSquares[idx + 9]) allSquares[idx + 9].style.background = ''
            if(allSquares[idx - 9]) allSquares[idx - 9].style.background = ''
        })
    } 
    if(allSquares[idx - 9]) {
        allSquares[idx - 9].style.background = `radial-gradient(${window.getComputedStyle(allSquares[idx - 9], null).getPropertyValue('background-color')}, ${window.getComputedStyle(allSquares[idx - 9], null).getPropertyValue('background-color')}, #0010ff99)`
        allSquares[idx - 9].addEventListener('click', (evt) => {
            let square = evt.target
            allSquares[idx].removeChild(king)
            square.prepend(king)
            if(allSquares[idx + 1]) allSquares[idx + 1].style.background = ''
            if(allSquares[idx - 1]) allSquares[idx - 1].style.background = ''
            if(allSquares[idx + 7]) allSquares[idx + 7].style.background = ''
            if(allSquares[idx - 7]) allSquares[idx - 7].style.background = ''
            if(allSquares[idx + 8]) allSquares[idx + 8].style.background = ''
            if(allSquares[idx - 8]) allSquares[idx - 8].style.background = ''
            if(allSquares[idx + 9]) allSquares[idx + 9].style.background = ''
            if(allSquares[idx - 9]) allSquares[idx - 9].style.background = ''
        })
    }  

    //if box has a piece already
    if(allSquares[idx - 1] && allSquares[idx - 1].classList.contains('occupied')) allSquares[idx - 1].style.background = `radial-gradient(${window.getComputedStyle(allSquares[idx - 1], null).getPropertyValue('background-color')}, ${window.getComputedStyle(allSquares[idx - 1], null).getPropertyValue('background-color')}, #0010ff99)`
    return squaresArray = [...allSquares]
}

king.addEventListener('click', (evt) => {
    console.log(squaresArray[60].children[0])
    console.log(squaresArray[51].children[1])
    let kingSquare = squaresArray.filter((square) => square.children[0] === evt.target)
    console.log(kingSquare)
    let idx = squaresArray.indexOf(kingSquare[0])
    console.log(idx)
    kingMovement(evt.target, idx)
})