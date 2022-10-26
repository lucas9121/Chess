const allSquares = document.querySelectorAll('.square')
const p1King = document.querySelector('#p1King')
const p2King = document.querySelector('#p2King')
const p1Queen = document.querySelector('#p1Queen')
const p2Queen = document.querySelector('#p2Queen')

// array funcitons availability
let squaresArray = [...allSquares]

//global variables
let movingPiece 
let oldSquare


//toggles
let playerToggle = true
let kingToggle = false
let queenToggle = false

/////////////////////////////////////// Players info ///////////////////////////////////////
const playerOne = {
    name: 'Me',
    king: p1King,
    queen: p1Queen,
    knights: [],
    rooks: [],
    bishops: [],
    pawns: []
    
}

const playerTwo = {
    name: 'Computer',
    king: p2King,
    queen: p2Queen,
    knights: [],
    rooks: [],
    bishops: [],
    pawns: []
    
}

// adds square name
for(let square of allSquares){
    let small = document.createElement('small')
    small.innerHTML = `${square.id}`
    square.appendChild(small)
}

/////////////////////////////// Reusable Functions //////////////////////////////////////
function movePiece(square){
    console.log('Move Piece function')

    //removes piece from original square
    oldSquare.removeChild(movingPiece)
    oldSquare.classList.remove('occupied')
    
    //places it piece on clicked square
    square.prepend(movingPiece)
    square.classList.add('occupied')

    //erase global variables
    movingPiece = null
    oldSquare = null

    // update array
    return squaresArray = [...allSquares]
}

const clicked = (evt) => {
    console.log('Clicked funciton')
    let square = evt.target

    // removes background and event listeners
    for(let box of allSquares){
        box.removeEventListener('click', clicked)
        box.style.background = ''
    }
    return movePiece(square)
}


/////////////////////////////////////////////////////////////////////////   KING MOVEMENT   //////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

const kingMovementRules = (king, idx) => {
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

const kingMovement = (evt) => {
    ///removes all other movement backgrounds
    for(let square of allSquares){
        square.style.background = ''
    }
    queenToggle = false
    kingToggle = !kingToggle
    if(kingToggle){
        let kingPiece = evt.target
        let kingSquare = squaresArray.filter((square) => square.children[0] === kingPiece)
        let idx = squaresArray.indexOf(kingSquare[0])
        kingMovementRules(kingPiece, idx)
    } else{
        for(let square of allSquares){
            square.style.background = ''
        }
    }
}

/////////////////////////////////////////////////////////////////////////   QUEEN MOVEMENT   //////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

const queenMovementOptions = (idx) => {
    const squares = []
    //boxes queen can move too if there are no pieces
    // for(let i = idx; i < allSquares.length; i += 8){
    //     console.log(i)
    //     // console.log(allSquares[i])
    //     // console.log(allSquares.length)
    //     if(allSquares[i] && !allSquares[i].classList.contains('occupied')){
    //         //background color
    //         if(allSquares[i].classList.contains('enemy')){
    //             allSquares[i].style.background = `radial-gradient(${window.getComputedStyle(allSquares[i], null).getPropertyValue('background-color')}, ${window.getComputedStyle(allSquares[i], null).getPropertyValue('background-color')}, green)`
    //         } else {
    //             allSquares[i].style.background = `radial-gradient(${window.getComputedStyle(allSquares[i], null).getPropertyValue('background-color')}, ${window.getComputedStyle(allSquares[i], null).getPropertyValue('background-color')}, #0010ff99)`
    //         }

    //         // square queen can move to
    //         allSquares[i].addEventListener('click', (evt) => {
    //             let square = evt.target
    //             console.log('Square for plus loop')
    //             console.log(square)
                
    //             //removes piece from original square
    //             allSquares[idx].removeChild(queen)
                
    //             //places it piece on clicked square
    //             square.prepend(queen)
                
    //             //removes background
    //             for(let square of allSquares){
    //                 square.style.background = ''
    //             }
    //             queenToggle = false
    //             return squaresArray = [...allSquares]
    //         })
    //     }
    // }

    //////////////// DOWN ///////////////////////////
    for(let i = idx - 8; i > 0; i -= 8){
        if(allSquares[i] && !allSquares[i].classList.contains('occupied')){
            squares.push(allSquares[i])
            //background color
            if(allSquares[i].classList.contains('enemy')){
                allSquares[i].style.background = `radial-gradient(${window.getComputedStyle(allSquares[i], null).getPropertyValue('background-color')}, ${window.getComputedStyle(allSquares[i], null).getPropertyValue('background-color')}, green)`
                break
            } else if(allSquares[i].classList.contains('occupied')) {
                break
            } else {
                allSquares[i].style.background = `radial-gradient(${window.getComputedStyle(allSquares[i], null).getPropertyValue('background-color')}, ${window.getComputedStyle(allSquares[i], null).getPropertyValue('background-color')}, #0010ff99)`
            }

        }
    }
    return squares
}

const queenMovement = (evt) => {
    console.log('queen movement function')
    //removes all other movement backgrounds
    for(let square of allSquares){
        square.style.background = ''
    }
    kingToggle = false
    queenToggle = !queenToggle
    movingPiece = evt.target
    let queenSquare = squaresArray.filter((square) => square.children[0] === movingPiece)
    oldSquare = queenSquare[0]
    let idx = squaresArray.indexOf(queenSquare[0])
    let squares = queenMovementOptions(idx)

    // function moveQueen (evt){
    //     let placement = evt.target
    //     // return movePiece(queenPiece, idx, placement, moveQueen)
    //     //removes piece from original square
    //     allSquares[idx].removeChild(queenPiece)
    //     allSquares[idx].classList.remove('occupied')
        
    //     //places it piece on clicked square
    //     placement.prepend(queenPiece)
    //     placement.classList.add('occupied')

    //     // removes event listener and background
    //     for(let square of allSquares){
    //         square.style.background = ''
    //         square.removeEventListener('click', moveQueen)
    //     }
    //     squaresArray = [...allSquares]
    //     return p2Turn()
    // }

    if(queenToggle){
        for(let square of squares){
            square.addEventListener('click', clicked)
        }
    } else {
        for(let square of squares){
            square.removeEventListener('click', clicked)
            square.style.background = ''
        }
    }

    return squaresArray = [...allSquares]
}

const p1Turn = () => {
    console.log('Player 1 move')
    p1King.addEventListener('click', kingMovement)

    //queen
    p1Queen.addEventListener('click', queenMovement)
}

const p2Turn = () => {
    console.log('Player 2 move')
    p1King.removeEventListener('click', kingMovement)
    p1Queen.removeEventListener('click', queenMovement)
    p2King.addEventListener('click', kingMovement)
}

if(playerToggle){
    console.log('p1 function')
    p1Turn()
} else {
    console.log('p2 function')
    p2Turn()
}
console.log(playerToggle)