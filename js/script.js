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
let squares = []


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
    squares = []

    //Reset toggles
    kingToggle = false
    queenToggle = false

    // update array
    squaresArray = [...allSquares]

    if(playerToggle){
        playerToggle = !playerToggle
        return p2Turn()
    } else {
        playerToggle = !playerToggle
        return p1Turn()
    }
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

const changeBackground = (element, color) => {
    element.style.background = `radial-gradient(${window.getComputedStyle(element, null).getPropertyValue('background-color')}, ${window.getComputedStyle(element, null).getPropertyValue('background-color')}, ${color})`
}



/////////////////////////////////////////////////////////////////////////   KING MOVEMENT   //////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

const kingMovementRules = (idx) => {
    console.log('King Movement Rules function')
    squares = []
    //if there is a box to the right, left, above or below the piece, then chance bacground color
    if(allSquares[idx + 1]){
        let i = idx + 1
        //Player 1 turn
        if(playerToggle){
            // player 2 pieces
            if(allSquares[i].children[0].classList.contains('player2')){
                squares.push(allSquares[i])
                allSquares[i].style.background = `radial-gradient(${window.getComputedStyle(allSquares[i], null).getPropertyValue('background-color')}, ${window.getComputedStyle(allSquares[i], null).getPropertyValue('background-color')}, green)`
            } else if(!allSquares[i].classList.contains('occupied')){
                squares.push(allSquares[i])
                allSquares[i].style.background = `radial-gradient(${window.getComputedStyle(allSquares[i], null).getPropertyValue('background-color')}, ${window.getComputedStyle(allSquares[i], null).getPropertyValue('background-color')}, #0010ff99)`
            }
        // Player 2 turn
        } else {
            // player 1 pieces
            if(allSquares[i].children[0].classList.contains('player1')){
                squares.push(allSquares[i])
                allSquares[i].style.background = `radial-gradient(${window.getComputedStyle(allSquares[i], null).getPropertyValue('background-color')}, ${window.getComputedStyle(allSquares[i], null).getPropertyValue('background-color')}, green)`
            } else if(!allSquares[i].classList.contains('occupied')){
                squares.push(allSquares[i])
                allSquares[i].style.background = `radial-gradient(${window.getComputedStyle(allSquares[i], null).getPropertyValue('background-color')}, ${window.getComputedStyle(allSquares[i], null).getPropertyValue('background-color')}, #0010ff99)`
            }
        }
    }
    if(allSquares[idx - 1]){
        let i = idx - 1
        if(!allSquares[i].classList.contains('occupied')){
            squares.push(allSquares[i])
            //background color
            if(allSquares[i].classList.contains('enemy')){
                allSquares[i].style.background = `radial-gradient(${window.getComputedStyle(allSquares[i], null).getPropertyValue('background-color')}, ${window.getComputedStyle(allSquares[i], null).getPropertyValue('background-color')}, green)`
            } else {
                allSquares[i].style.background = `radial-gradient(${window.getComputedStyle(allSquares[i], null).getPropertyValue('background-color')}, ${window.getComputedStyle(allSquares[i], null).getPropertyValue('background-color')}, #0010ff99)`
            }
        }
    }
    if(allSquares[idx + 7]){
        let i = idx + 7
        if(!allSquares[i].classList.contains('occupied')){
            squares.push(allSquares[i])
            //background color
            if(allSquares[i].classList.contains('enemy')){
                allSquares[i].style.background = `radial-gradient(${window.getComputedStyle(allSquares[i], null).getPropertyValue('background-color')}, ${window.getComputedStyle(allSquares[i], null).getPropertyValue('background-color')}, green)`
            } else {
                allSquares[i].style.background = `radial-gradient(${window.getComputedStyle(allSquares[i], null).getPropertyValue('background-color')}, ${window.getComputedStyle(allSquares[i], null).getPropertyValue('background-color')}, #0010ff99)`
            }
        }
    }
    if(allSquares[idx - 7]){
        let i = idx - 7
        if(!allSquares[i].classList.contains('occupied')){
            squares.push(allSquares[i])
            //background color
            if(allSquares[i].classList.contains('enemy')){
                allSquares[i].style.background = `radial-gradient(${window.getComputedStyle(allSquares[i], null).getPropertyValue('background-color')}, ${window.getComputedStyle(allSquares[i], null).getPropertyValue('background-color')}, green)`
            } else {
                allSquares[i].style.background = `radial-gradient(${window.getComputedStyle(allSquares[i], null).getPropertyValue('background-color')}, ${window.getComputedStyle(allSquares[i], null).getPropertyValue('background-color')}, #0010ff99)`
            }
        }
    } 
    if(allSquares[idx + 8]){
        let i = idx + 8
        if(!allSquares[i].classList.contains('occupied')){
            squares.push(allSquares[i])
            //background color
            if(allSquares[i].classList.contains('enemy')){
                allSquares[i].style.background = `radial-gradient(${window.getComputedStyle(allSquares[i], null).getPropertyValue('background-color')}, ${window.getComputedStyle(allSquares[i], null).getPropertyValue('background-color')}, green)`
            } else {
                allSquares[i].style.background = `radial-gradient(${window.getComputedStyle(allSquares[i], null).getPropertyValue('background-color')}, ${window.getComputedStyle(allSquares[i], null).getPropertyValue('background-color')}, #0010ff99)`
            }
        }
    }
    if(allSquares[idx - 8]){
        let i = idx - 8
        if(!allSquares[i].classList.contains('occupied')){
            squares.push(allSquares[i])
            //background color
            if(allSquares[i].classList.contains('enemy')){
                allSquares[i].style.background = `radial-gradient(${window.getComputedStyle(allSquares[i], null).getPropertyValue('background-color')}, ${window.getComputedStyle(allSquares[i], null).getPropertyValue('background-color')}, green)`
            } else {
                allSquares[i].style.background = `radial-gradient(${window.getComputedStyle(allSquares[i], null).getPropertyValue('background-color')}, ${window.getComputedStyle(allSquares[i], null).getPropertyValue('background-color')}, #0010ff99)`
            }
        }
    }
    if(allSquares[idx + 9]){
        let i = idx + 9
        if(!allSquares[i].classList.contains('occupied')){
            squares.push(allSquares[i])
            //background color
            if(allSquares[i].classList.contains('enemy')){
                allSquares[i].style.background = `radial-gradient(${window.getComputedStyle(allSquares[i], null).getPropertyValue('background-color')}, ${window.getComputedStyle(allSquares[i], null).getPropertyValue('background-color')}, green)`
            } else {
                allSquares[i].style.background = `radial-gradient(${window.getComputedStyle(allSquares[i], null).getPropertyValue('background-color')}, ${window.getComputedStyle(allSquares[i], null).getPropertyValue('background-color')}, #0010ff99)`
            }
        }
    }
    if(allSquares[idx - 9]){
        let i = idx - 9
        if(!allSquares[i].classList.contains('occupied')){
            squares.push(allSquares[i])
            //background color
            if(allSquares[i].classList.contains('enemy')){
                allSquares[i].style.background = `radial-gradient(${window.getComputedStyle(allSquares[i], null).getPropertyValue('background-color')}, ${window.getComputedStyle(allSquares[i], null).getPropertyValue('background-color')}, green)`
            } else {
                allSquares[i].style.background = `radial-gradient(${window.getComputedStyle(allSquares[i], null).getPropertyValue('background-color')}, ${window.getComputedStyle(allSquares[i], null).getPropertyValue('background-color')}, #0010ff99)`
            }
        }
    } 
    return squares
}

const kingMovement = (evt) => {
    console.log('King Movement function')
    ///removes all other movement backgrounds
    for(let square of allSquares){
        square.style.background = ''
    }
    queenToggle = false
    kingToggle = !kingToggle
    movingPiece = evt.target
    let kingSquare = squaresArray.filter((square) => square.children[0] === movingPiece)
    oldSquare = kingSquare[0]
    let idx = squaresArray.indexOf(kingSquare[0])
    squares = kingMovementRules(idx)
    if(kingToggle){
        for(let square of squares){
            square.addEventListener('click', clicked)
        }
    } else{
        for(let square of squares){
            square.removeEventListener('click', clicked)
            square.style.background = ''
        }
    }
}

/////////////////////////////////////////////////////////////////////////   QUEEN MOVEMENT   //////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

const queenMovementOptions = (idx) => {
    console.log('Queen Movement Options function')
    squares = []
    /////////////////////////////// DOWN //////////////////////////////////////////
    for(let i = idx + 8; i <= allSquares.length; i += 8){
        if(allSquares[i] && !allSquares[i].classList.contains('occupied')){
            squares.push(allSquares[i])
            //background color
            if(allSquares[i].classList.contains('enemy')){
                allSquares[i].style.background = `radial-gradient(${window.getComputedStyle(allSquares[i], null).getPropertyValue('background-color')}, ${window.getComputedStyle(allSquares[i], null).getPropertyValue('background-color')}, green)`
                break
            } else if(allSquares[i].classList.contains('A') || allSquares[i].classList.contains('H')) {
                allSquares[i].style.background = `radial-gradient(${window.getComputedStyle(allSquares[i], null).getPropertyValue('background-color')}, ${window.getComputedStyle(allSquares[i], null).getPropertyValue('background-color')}, #0010ff99)`
                break
            } else {
                allSquares[i].style.background = `radial-gradient(${window.getComputedStyle(allSquares[i], null).getPropertyValue('background-color')}, ${window.getComputedStyle(allSquares[i], null).getPropertyValue('background-color')}, #0010ff99)`
            }
        } else {
            break
        }
    }
    /////////////////////////////// UP //////////////////////////////////////////
    for(let i = idx - 8; i > 0; i -= 8){
        if(allSquares[i] && !allSquares[i].classList.contains('occupied')){
            squares.push(allSquares[i])
            //background color
            if(allSquares[i].classList.contains('enemy')){
                allSquares[i].style.background = `radial-gradient(${window.getComputedStyle(allSquares[i], null).getPropertyValue('background-color')}, ${window.getComputedStyle(allSquares[i], null).getPropertyValue('background-color')}, green)`
                break
            } else if(allSquares[i].classList.contains('A') || allSquares[i].classList.contains('H')) {
                allSquares[i].style.background = `radial-gradient(${window.getComputedStyle(allSquares[i], null).getPropertyValue('background-color')}, ${window.getComputedStyle(allSquares[i], null).getPropertyValue('background-color')}, #0010ff99)`
                break
            } else {
                allSquares[i].style.background = `radial-gradient(${window.getComputedStyle(allSquares[i], null).getPropertyValue('background-color')}, ${window.getComputedStyle(allSquares[i], null).getPropertyValue('background-color')}, #0010ff99)`
            }
        } else {
            break
        }
    }
    /////////////////////////////// Right //////////////////////////////////////////
    for(let i = idx + 1; i <= allSquares.length; i++){
        if(allSquares[i] && !allSquares[i].classList.contains('occupied')){
            squares.push(allSquares[i])
            //background color
            if(allSquares[i].classList.contains('enemy')){
                allSquares[i].style.background = `radial-gradient(${window.getComputedStyle(allSquares[i], null).getPropertyValue('background-color')}, ${window.getComputedStyle(allSquares[i], null).getPropertyValue('background-color')}, green)`
                break
            } else if(allSquares[i].classList.contains('A') || allSquares[i].classList.contains('H')) {
                allSquares[i].style.background = `radial-gradient(${window.getComputedStyle(allSquares[i], null).getPropertyValue('background-color')}, ${window.getComputedStyle(allSquares[i], null).getPropertyValue('background-color')}, #0010ff99)`
                break
            } else {
                allSquares[i].style.background = `radial-gradient(${window.getComputedStyle(allSquares[i], null).getPropertyValue('background-color')}, ${window.getComputedStyle(allSquares[i], null).getPropertyValue('background-color')}, #0010ff99)`
            }
        } else {
            break
        }
    }
    /////////////////////////////// Left //////////////////////////////////////////
    for(let i = idx - 1; i > 0; i--){
        if(allSquares[i] && !allSquares[i].classList.contains('occupied')){
            squares.push(allSquares[i])
            //background color
            if(allSquares[i].classList.contains('enemy')){
                allSquares[i].style.background = `radial-gradient(${window.getComputedStyle(allSquares[i], null).getPropertyValue('background-color')}, ${window.getComputedStyle(allSquares[i], null).getPropertyValue('background-color')}, green)`
                break
            } else if(allSquares[i].classList.contains('A') || allSquares[i].classList.contains('H')) {
                allSquares[i].style.background = `radial-gradient(${window.getComputedStyle(allSquares[i], null).getPropertyValue('background-color')}, ${window.getComputedStyle(allSquares[i], null).getPropertyValue('background-color')}, #0010ff99)`
                break
            } else {
                allSquares[i].style.background = `radial-gradient(${window.getComputedStyle(allSquares[i], null).getPropertyValue('background-color')}, ${window.getComputedStyle(allSquares[i], null).getPropertyValue('background-color')}, #0010ff99)`
            }
        } else {
            break
        }
    }
    /////////////////////////////// Right Diagonal Down //////////////////////////////////////////
    for(let i = idx + 9; i <= allSquares.length; i += 9){
        if(allSquares[i] && !allSquares[i].classList.contains('occupied')){
            squares.push(allSquares[i])
            //background color
            if(allSquares[i].classList.contains('enemy')){
                allSquares[i].style.background = `radial-gradient(${window.getComputedStyle(allSquares[i], null).getPropertyValue('background-color')}, ${window.getComputedStyle(allSquares[i], null).getPropertyValue('background-color')}, green)`
                break
            } else if(allSquares[i].classList.contains('A') || allSquares[i].classList.contains('H')) {
                allSquares[i].style.background = `radial-gradient(${window.getComputedStyle(allSquares[i], null).getPropertyValue('background-color')}, ${window.getComputedStyle(allSquares[i], null).getPropertyValue('background-color')}, #0010ff99)`
                break
            } else {
                allSquares[i].style.background = `radial-gradient(${window.getComputedStyle(allSquares[i], null).getPropertyValue('background-color')}, ${window.getComputedStyle(allSquares[i], null).getPropertyValue('background-color')}, #0010ff99)`
            }
        } else {
            break
        }
    }
    /////////////////////////////// Left Diagonal Up //////////////////////////////////////////
    for(let i = idx - 9; i > 0; i -= 9){
        if(allSquares[i] && !allSquares[i].classList.contains('occupied')){
            squares.push(allSquares[i])
            //background color
            if(allSquares[i].classList.contains('enemy')){
                allSquares[i].style.background = `radial-gradient(${window.getComputedStyle(allSquares[i], null).getPropertyValue('background-color')}, ${window.getComputedStyle(allSquares[i], null).getPropertyValue('background-color')}, green)`
                break
            } else if(allSquares[i].classList.contains('A') || allSquares[i].classList.contains('H')) {
                allSquares[i].style.background = `radial-gradient(${window.getComputedStyle(allSquares[i], null).getPropertyValue('background-color')}, ${window.getComputedStyle(allSquares[i], null).getPropertyValue('background-color')}, #0010ff99)`
                break
            } else {
                allSquares[i].style.background = `radial-gradient(${window.getComputedStyle(allSquares[i], null).getPropertyValue('background-color')}, ${window.getComputedStyle(allSquares[i], null).getPropertyValue('background-color')}, #0010ff99)`
            }
        } else {
            break
        }
    }
    /////////////////////////////// Right Diagonal Up //////////////////////////////////////////
    for(let i = idx - 7; i > 0; i -= 7){
        if(allSquares[i] && !allSquares[i].classList.contains('occupied')){
            squares.push(allSquares[i])
            //background color
            if(allSquares[i].classList.contains('enemy')){
                allSquares[i].style.background = `radial-gradient(${window.getComputedStyle(allSquares[i], null).getPropertyValue('background-color')}, ${window.getComputedStyle(allSquares[i], null).getPropertyValue('background-color')}, green)`
                break
            } else if(allSquares[i].classList.contains('A') || allSquares[i].classList.contains('H')) {
                allSquares[i].style.background = `radial-gradient(${window.getComputedStyle(allSquares[i], null).getPropertyValue('background-color')}, ${window.getComputedStyle(allSquares[i], null).getPropertyValue('background-color')}, #0010ff99)`
                break
            } else {
                allSquares[i].style.background = `radial-gradient(${window.getComputedStyle(allSquares[i], null).getPropertyValue('background-color')}, ${window.getComputedStyle(allSquares[i], null).getPropertyValue('background-color')}, #0010ff99)`
            }
        } else {
            break
        }
    }
    /////////////////////////////// Left Diagonal Down //////////////////////////////////////////
    for(let i = idx + 7; i <= allSquares.length; i += 7){
        if(allSquares[i] && !allSquares[i].classList.contains('occupied')){
            squares.push(allSquares[i])
            //background color
            if(allSquares[i].classList.contains('enemy')){
                allSquares[i].style.background = `radial-gradient(${window.getComputedStyle(allSquares[i], null).getPropertyValue('background-color')}, ${window.getComputedStyle(allSquares[i], null).getPropertyValue('background-color')}, green)`
                break
            } else if(allSquares[i].classList.contains('A') || allSquares[i].classList.contains('H')) {
                allSquares[i].style.background = `radial-gradient(${window.getComputedStyle(allSquares[i], null).getPropertyValue('background-color')}, ${window.getComputedStyle(allSquares[i], null).getPropertyValue('background-color')}, #0010ff99)`
                break
            } else {
                allSquares[i].style.background = `radial-gradient(${window.getComputedStyle(allSquares[i], null).getPropertyValue('background-color')}, ${window.getComputedStyle(allSquares[i], null).getPropertyValue('background-color')}, #0010ff99)`
            }
        } else {
            break
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
    squares = queenMovementOptions(idx)
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
    //Add Event Listeners
    p1King.addEventListener('click', kingMovement)
    p1Queen.addEventListener('click', queenMovement)

    // Remove Event Listeners
    p2King.removeEventListener('click', kingMovement)
    p2Queen.removeEventListener('click', queenMovement)
}

const p2Turn = () => {
    console.log('Player 2 move')
    //Add Event Listeners
    p2King.addEventListener('click', kingMovement)
    p2Queen.addEventListener('click', queenMovement)

    // Remove Event Listeners
    p1King.removeEventListener('click', kingMovement)
    p1Queen.removeEventListener('click', queenMovement)
}

p1Turn()