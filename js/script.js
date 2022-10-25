const allSquares = document.querySelectorAll('.square')
const p1King = document.querySelector('#p1King')
const p2King = document.querySelector('#p2King')
let squaresArray = [...allSquares]
let kingToggle = false
let playerToggle = true

const playerOne = {
    name: '',
    king: p1King,
    queen: '',
    knights: [],
    rooks: [],
    bishops: [],
    pawns: []
    
}

const playerTwo = {
    name: '',
    king: p2King,
    queen: '',
    knights: [],
    rooks: [],
    bishops: [],
    pawns: []
    
}

for(let square of allSquares){
    let small = document.createElement('small')
    small.innerHTML = `${square.id}`
    square.appendChild(small)
}

const kingMovement = (king, idx) => {
    //if there is a box to the right, left, above or below the piece, then chance bacground color
    if(allSquares[idx + 1] && !allSquares[idx + 1].classList.contains('occupied')) {
        // changes the background of the square king can move too 
        // if there is an enemy piece, background is different than no pieces
        allSquares[idx + 1].style.background = `radial-gradient(${window.getComputedStyle(allSquares[idx + 1], null).getPropertyValue('background-color')}, ${window.getComputedStyle(allSquares[idx + 1], null).getPropertyValue('background-color')}, #0010ff99)`
        // squares piece can move to
        allSquares[idx + 1].addEventListener('click', (evt) => {
            let square = evt.target
            
            //removes piece from original square
            allSquares[idx].removeChild(king)
            
            //places it piece on clicked square
            square.prepend(king)
            
            //removes background
            for(let square of allSquares){
                square.style.background = ''
            }
            kingToggle = false
            playerToggle = !playerToggle

        })
    } 
    if(allSquares[idx - 1] && !allSquares[idx - 1].classList.contains('occupied')) {
        // changes the background of the square king can move too 
        // if there is an enemy piece, background is different than no pieces
        allSquares[idx - 1].style.background = `radial-gradient(${window.getComputedStyle(allSquares[idx - 1], null).getPropertyValue('background-color')}, ${window.getComputedStyle(allSquares[idx - 1], null).getPropertyValue('background-color')}, #0010ff99)`
        // squares piece can move to
        allSquares[idx - 1].addEventListener('click', (evt) => {
            let square = evt.target
            
            //removes piece from original square
            allSquares[idx].removeChild(king)
            
            //places it piece on clicked square
            square.prepend(king)
            
            //removes background
            for(let square of allSquares){
                square.style.background = ''
            }
            kingToggle = false
            playerToggle = !playerToggle
        })
    }
    if(allSquares[idx + 7] && !allSquares[idx + 7].classList.contains('occupied')) {
        // changes the background of the square king can move too 
        // if there is an enemy piece, background is different than no pieces
        allSquares[idx + 7].style.background = `radial-gradient(${window.getComputedStyle(allSquares[idx + 7], null).getPropertyValue('background-color')}, ${window.getComputedStyle(allSquares[idx + 7], null).getPropertyValue('background-color')}, #0010ff99)`
        // squares piece can move to
        allSquares[idx + 7].addEventListener('click', (evt) => {
            let square = evt.target
            
            //removes piece from original square
            allSquares[idx].removeChild(king)
            
            //places it piece on clicked square
            square.prepend(king)
            
            //removes background
            for(let square of allSquares){
                square.style.background = ''
            }
            kingToggle = false
            playerToggle = !playerToggle
        })
    } 
    if(allSquares[idx - 7] && !allSquares[idx - 7].classList.contains('occupied')) {
        // changes the background of the square king can move too 
        // if there is an enemy piece, background is different than no pieces
        allSquares[idx - 7].style.background = `radial-gradient(${window.getComputedStyle(allSquares[idx - 7], null).getPropertyValue('background-color')}, ${window.getComputedStyle(allSquares[idx - 7], null).getPropertyValue('background-color')}, #0010ff99)`
        // squares piece can move to
        allSquares[idx - 7].addEventListener('click', (evt) => {
            let square = evt.target
            
            //removes piece from original square
            allSquares[idx].removeChild(king)
            
            //places it piece on clicked square
            square.prepend(king)
            
            //removes background
            for(let square of allSquares){
                square.style.background = ''
            }
            kingToggle = false
            playerToggle = !playerToggle
        })
    }  
    if(allSquares[idx + 8] && !allSquares[idx + 8].classList.contains('occupied')) {
        // changes the background of the square king can move too 
        // if there is an enemy piece, background is different than no pieces
        if(allSquares[idx + 8].classList.contains('occupied')){

        } else {
            allSquares[idx + 8].style.background = `radial-gradient(${window.getComputedStyle(allSquares[idx + 8], null).getPropertyValue('background-color')}, ${window.getComputedStyle(allSquares[idx + 8], null).getPropertyValue('background-color')}, #0010ff99)`
        }
        // squares piece can move to
        allSquares[idx + 8].addEventListener('click', (evt) => {
            let square = evt.target
            
            //removes piece from original square
            allSquares[idx].removeChild(king)
            
            //places it piece on clicked square
            square.prepend(king)
            
            //removes background
            for(let square of allSquares){
                square.style.background = ''
            }
            kingToggle = false
            playerToggle = !playerToggle
        })
    } 
    if(allSquares[idx - 8] && !allSquares[idx - 8].classList.contains('occupied')) {
        // changes the background of the square king can move too 
        // if there is an enemy piece, background is different than no pieces
        if(allSquares[idx - 8].classList.contains('occupied')){

        } else {
            allSquares[idx - 8].style.background = `radial-gradient(${window.getComputedStyle(allSquares[idx - 8], null).getPropertyValue('background-color')}, ${window.getComputedStyle(allSquares[idx - 8], null).getPropertyValue('background-color')}, #0010ff99)`
        }
        // squares piece can move to
        allSquares[idx - 8].addEventListener('click', (evt) => {
            let square = evt.target
            
            //removes piece from original square
            allSquares[idx].removeChild(king)
            
            //places it piece on clicked square
            square.prepend(king)
            
            //removes background
            for(let square of allSquares){
                square.style.background = ''
            }
            kingToggle = false
            playerToggle = !playerToggle
        })
    }
    if(allSquares[idx + 9] && !allSquares[idx + 9].classList.contains('occupied')) {
        // changes the background of the square king can move too 
        // if there is an enemy piece, background is different than no pieces
        if(allSquares[idx + 9].classList.contains('occupied')){

        } else {
            allSquares[idx + 9].style.background = `radial-gradient(${window.getComputedStyle(allSquares[idx + 9], null).getPropertyValue('background-color')}, ${window.getComputedStyle(allSquares[idx + 9], null).getPropertyValue('background-color')}, #0010ff99)`
        }
        // squares piece can move to
        allSquares[idx + 9].addEventListener('click', (evt) => {
            let square = evt.target
            
            //removes piece from original square
            allSquares[idx].removeChild(king)
            
            //places it piece on clicked square
            square.prepend(king)
            
            //removes background
            for(let square of allSquares){
                square.style.background = ''
            }
            kingToggle = false
            playerToggle = !playerToggle
        })
    } 
    if(allSquares[idx - 9] && !allSquares[idx - 9].classList.contains('occupied')) {
        // changes the background of the square king can move too 
        // if there is an enemy piece, background is different than no pieces
        if(allSquares[idx - 9].classList.contains('occupied')) {
            allSquares[idx - 9].style.background = `radial-gradient(${window.getComputedStyle(allSquares[idx - 9], null).getPropertyValue('background-color')}, ${window.getComputedStyle(allSquares[idx - 9], null).getPropertyValue('background-color')}, green)`
        } else {
            allSquares[idx - 9].style.background = `radial-gradient(${window.getComputedStyle(allSquares[idx - 9], null).getPropertyValue('background-color')}, ${window.getComputedStyle(allSquares[idx - 9], null).getPropertyValue('background-color')}, #0010ff99)`
        }
        // squares piece can move to
        allSquares[idx - 9].addEventListener('click', (evt) => {
            let square = evt.target
            
            //removes piece from original square
            allSquares[idx].removeChild(king)
            
            //places it piece on clicked square
            square.prepend(king)
            
            //removes background
            for(let square of allSquares){
                square.style.background = ''
            }
            kingToggle = false
            playerToggle = !playerToggle
        })
    }  
    return squaresArray = [...allSquares]
}

const p1Turn = () => {
    console.log('Player 1 move')
    p1King.addEventListener('click', (evt) => {
        ///removes all other movement backgrounds
        for(let square of allSquares){
            square.style.background = ''
        }
        kingToggle = !kingToggle
        if(kingToggle){
            let kingPiece = evt.target
            let kingSquare = squaresArray.filter((square) => square.children[0] === kingPiece)
            let idx = squaresArray.indexOf(kingSquare[0])
            kingMovement(kingPiece, idx)
        } else{
            for(let square of allSquares){
                square.style.background = ''
            }
        }
    })
}

const p2Turn = () => {
    console.log('Player 2 move')
    p2King.addEventListener('click', (evt) => {
        ///removes all other movement backgrounds
        for(let square of allSquares){
            square.style.background = ''
        }
        kingToggle = !kingToggle
        if(kingToggle){
            let kingPiece = evt.target
            let kingSquare = squaresArray.filter((square) => square.children[0] === kingPiece)
            let idx = squaresArray.indexOf(kingSquare[0])
            kingMovement(kingPiece, idx)
        } else {
            for(let square of allSquares){
                square.style.background = ''
            }
        }
    })
}

if(playerToggle){
    console.log('p1 function')
    p1Turn()
} else {
    console.log('p2 function')
    p2Turn()
}
console.log(playerToggle)