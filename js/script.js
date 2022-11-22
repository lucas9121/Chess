const allSquares = document.querySelectorAll('.square')
const p1King = document.querySelector('#p1King')
const p2King = document.querySelector('#p2King')
const p1Queen = document.querySelector('#p1Queen')
const p2Queen = document.querySelector('#p2Queen')
const p1Bishop1 = document.getElementById('p1Bishop1')
const p1Bishop2 = document.getElementById('p1Bishop2')
const p2Bishop1 = document.getElementById('p2Bishop1')
const p2Bishop2 = document.getElementById('p2Bishop2')
const p1Rook1 = document.getElementById('p1Rook1')
const p1Rook2 = document.getElementById('p1Rook2')
const p2Rook1 = document.getElementById('p2Rook1')
const p2Rook2 = document.getElementById('p2Rook2')
const p1Knight1 = document.getElementById('p1Knight1')
const p1Knight2 = document.getElementById('p1Knight2')
const p2Knight1 = document.getElementById('p2Knight1')
const p2Knight2 = document.getElementById('p2Knight2')
const p1Pawns = document.querySelectorAll('.p1Pawn')
const p2Pawns = document.querySelectorAll('.p2Pawn')
const victory = document.querySelector('p.playerVictory')
const p1Info = document.querySelector('p.player1')
const p2Info = document.querySelector('p.player2')
const choicesDiv = document.querySelector('.choices')


/////// ROWS and COLUMNS///////
const rows = ['1', '2', '3', '4', '5', '6', '7', '8']

const columns = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H']

// array functions availability
let squaresArray = [...allSquares]

//global variables
let movingPiece 
let oldSquare
let newSquare
let squares = []


//toggles
let playerToggle = true
let pieceToggle = ''
let aPawn = false

/////////////////////////////////////// Players info ///////////////////////////////////////
const playerOne = {
    name: 'Me',
    king: p1King,
    queen: [p1Queen],
    knights: [p1Knight1, p1Knight2],
    rooks: [p1Rook1, p1Rook2],
    bishops: [p1Bishop1, p1Bishop2],
    pawns: []
    
}

// adding Pawns
p1Pawns.forEach((pawn) => {
    playerOne.pawns.push({
        name: pawn,
        moves: 0
    })
})

const playerTwo = {
    name: 'Computer',
    king: p2King,
    queen: [p2Queen],
    knights: [p2Knight1, p2Knight2],
    rooks: [p2Rook1, p2Rook2],
    bishops: [p2Bishop1, p2Bishop2],
    pawns: []
    
}


// adding Pawns
p2Pawns.forEach((pawn) => {
    playerTwo.pawns.push({
        name: pawn,
        moves: 0
    })
})

// adds square name
for(let square of allSquares){
    let small = document.createElement('small')
    small.innerHTML = `${square.id}`
    square.appendChild(small)
}

// add HTML names
p1Info.innerHTML = `${playerOne.name} <img src="${playerOne.king.src}" style="height: 50px" alt="king">`
p2Info.innerHTML = `${playerTwo.name} <img src="${playerTwo.king.src}" style="height: 50px" alt="king">`

/////////////////////////////// Reusable Functions //////////////////////////////////////
function movePiece(evt){
    console.log('Move Piece function')
    let clickedEl = evt.target
    //if clicked on opponent piece instead of square
    if(clickedEl.nodeName === 'IMG') clickedEl = clickedEl.parentElement

    //adding global variable
    newSquare = clickedEl

    //removes piece from original square
    oldSquare.removeChild(movingPiece)
    
    //If there's an opponent's piece in the square
    if(clickedEl.children.length > 1){
        let removePiece = clickedEl.children[0]
        removePiece.remove()

        //Player 1 turn and piece is opponent's king
        if(playerToggle && playerTwo.king === removePiece) return checkMate(playerOne.name)

        //Player 2 turn and piece is opponent's king
        if(!playerToggle && playerOne.king === removePiece) return checkMate(playerTwo.name)
    }

    //if piece is a pawn
    if(aPawn){
        //if pawn made it to the end of the board
        if(clickedEl.classList.contains('8') || clickedEl.classList.contains('1')) return pieceChange()

        //find piece in player array and increase moves by 1
        let pawnPiece = findPawn(movingPiece)
        pawnPiece.moves++
    }

    //places it piece on clicked square
    clickedEl.prepend(movingPiece)


    //erase global variables
    movingPiece = null
    oldSquare = null
    newSquare = null
    squares = []

    //Reset toggles
    pieceToggle = ''
    aPawn = false

    removeBackground()

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

function checkMate(name){
    newSquare.prepend(movingPiece)
    console.log(`Checkmate! ${name} won!`)
    victory.style.visibility = 'visible'
    victory.innerHTML = `Checkmate! ${name} won!`
    const board = document.querySelector('.board')
    board.classList.add('checkmate')
    
    // Remove Event Listeners
    removeBackground()
    if(playerToggle) p1King.removeEventListener('click', kingMovement)
    playerOne.queen.forEach((queen) => {
        queen.removeEventListener('click', queenMovement)
    })
    playerOne.bishops.forEach((bishop) => {
        bishop.removeEventListener('click', bishopMovement)
    })
    playerOne.knights.forEach((knight) => {
        knight.removeEventListener('click', knightMovement)
    })
    playerOne.rooks.forEach((rook) => {
        rook.removeEventListener('click', rookMovement)
    })
    playerOne.pawns.forEach((pawn) => {
        pawn.name.removeEventListener('click', pawnMovement)
    })
    if(!playerToggle) p2King.removeEventListener('click', kingMovement)
    playerTwo.queen.forEach((queen) => {
        queen.removeEventListener('click', queenMovement)
    })
    playerTwo.bishops.forEach((bishop) => {
        bishop.removeEventListener('click', bishopMovement)
    })
    playerTwo.knights.forEach((knight) => {
        knight.removeEventListener('click', knightMovement)
    })
    playerTwo.rooks.forEach((rook) => {
        rook.removeEventListener('click', rookMovement)
    })
    playerTwo.pawns.forEach((pawn) => {
        pawn.name.removeEventListener('click', pawnMovement)
    })
}

// removes background color and event listeners
const removeBackground = () => {
    for(let box of allSquares){
        box.removeEventListener('click', movePiece)
        box.style.background = ''
    }
}

const changeBackground = (element, color) => {
    element.style.background = `radial-gradient(${window.getComputedStyle(element, null).getPropertyValue('background-color')}, ${window.getComputedStyle(element, null).getPropertyValue('background-color')}, ${color})`
}

const findSquare = (r, c) => {
    let row = rows[r]
    let column = columns[c]
    return squaresArray.find((square) => square.className === `square ${column} ${row}`)
}

const direction = (r, c) => { 
    let newSquare = findSquare(r, c)
    if(newSquare) {
        //Player 1 turn
        if(playerToggle){
            // player 2 pieces
            if(newSquare.children[0].classList.contains('player2')){
                // squares.push(newSquare)
                changeBackground(newSquare, 'green')
                return newSquare
            // player 1 pieces
            } else if(newSquare.children[0].classList.contains('player1')){
                changeBackground(newSquare, 'red')
            // no pieces
            } else {
                // squares.push(newSquare)
                changeBackground(newSquare, '#0010ff99')
                return newSquare
            }
        // Player 2
        } else {
            // player 1 pieces
            if(newSquare.children[0].classList.contains('player1')){
                // squares.push(newSquare)
                changeBackground(newSquare, 'green')
                return newSquare
            // player 2 pieces
            } else if(newSquare.children[0].classList.contains('player2')){
                changeBackground(newSquare, 'red')
            // no pieces
            } else {
                // squares.push(newSquare)
                changeBackground(newSquare, '#0010ff99')
                return newSquare
            }
        }
    }
}

function findPawn(pawn){
    if(playerToggle){
        return playerOne.pawns.find((piece) => piece.name === pawn)
    } else {
        return playerTwo.pawns.find((piece) => piece.name === pawn)
    }
}


function pieceChange(){
    console.log('pieceChange function')
    let pawn = findPawn(movingPiece)
    pawn.name.removeEventListener('click', pawnMovement)
    // newChoice = evt.target.innerHTML
    choicesDiv.style.visibility = 'visible'
    let lis = choicesDiv.children[1].children
    for(const [key, value] of Object.entries(lis)){
        console.log(value)
        // value.addEventListener('click', (evt) => {
        //     return (pawnChoices(pawn, square, evt.target.innerHTML))
        // })
        value.addEventListener('click', pawnChoices)
    }
}

function pawnChoices(evt){
    console.log('pawnChoices function')
    let newChoice = evt.target.innerHTML
    choicesDiv.style.visibility = ''
    let lis = choicesDiv.children[1].children
    for(const [key, value] of Object.entries(lis)){
        value.removeEventListener('click', pawnChoices)
    }
    let pawn = findPawn(movingPiece)
    let idx
    let removedPawn
    let newPiece
    if(playerToggle){
        idx = playerOne.pawns.indexOf(pawn)
        removedPawn = playerOne.pawns.splice(idx, 1)
        newPiece = removedPawn[0].name
        if(newChoice === 'Queen'){
            newPiece.src = playerOne.queen[0].src
            newPiece.id = ''
            newPiece.alt = 'queen'
            newPiece.classList.remove('p1Pawn')
            playerOne.queen.push(newPiece)
        }
        if(newChoice === 'Bishop'){
            newPiece.src = playerOne.bishops[0].src
            newPiece.id = ''
            newPiece.alt = 'bishop'
            newPiece.classList.remove('p1Pawn')
            playerOne.bishops.push(newPiece)
        }
        if(newChoice === 'Knight'){
            newPiece.src = playerOne.knights[0].src
            newPiece.id = ''
            newPiece.alt = 'knight'
            newPiece.classList.remove('p1Pawn')
            playerOne.knights.push(newPiece)
        }
        if(newChoice === 'Rook') {
            newPiece.src = playerOne.rooks[0].src
            newPiece.id = ''
            newPiece.alt = 'rook'
            newPiece.classList.remove('p1Pawn')
            playerOne.rooks.push(newPiece)
        }
    } else {
        idx = playerTwo.pawns.indexOf(pawn)
        removedPawn = playerTwo.pawns.splice(idx, 1)
        newPiece = removedPawn[0].name
        if(newChoice === 'Queen'){
            newPiece.src = playerTwo.queen[0].src
            newPiece.id = ''
            newPiece.alt = 'queen'
            newPiece.classList.remove('p1Pawn')
            playerTwo.queen.push(newPiece)
        }
        if(newChoice === 'Bishop'){
            newPiece.src = playerTwo.bishops[0].src
            newPiece.id = ''
            newPiece.alt = 'bishop'
            newPiece.classList.remove('p1Pawn')
            playerTwo.bishops.push(newPiece)
        }
        if(newChoice === 'Knight'){
            newPiece.src = playerTwo.knights[0].src
            newPiece.id = ''
            newPiece.alt = 'knight'
            newPiece.classList.remove('p1Pawn')
            playerTwo.knights.push(newPiece)
        }
        if(newChoice === 'Rook') {
            newPiece.src = playerTwo.rooks[0].src
            newPiece.id = ''
            newPiece.alt = 'rook'
            newPiece.classList.remove('p1Pawn')
            playerTwo.rooks.push(newPiece)
        }
    }
    removeBackground()
    newSquare.prepend(newPiece)

    //erase global variables
    movingPiece = null
    oldSquare = null
    squares = []

    //Reset toggles
    pieceToggle = ''
    aPawn = false

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

/////////////////////////////////////////////////////////////////////////   DIRECTIONS   //////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


const upDown = (row, column) => {
    let possibleSq
    //up
    for(let i = 1; i < 8; i++){
        possibleSq = direction(row + i, column)
        if(possibleSq) squares.push(possibleSq)
        // if function didn't return anything
        if(!possibleSq) break
        // if square already has a piece
        if(possibleSq.children.length > 1) break
    }
    // down
    for(let i = 1; i < 8; i++){
        possibleSq = direction(row - i, column)
        if(possibleSq) squares.push(possibleSq)
        // if function didn't return anything
        if(!possibleSq) break
        if(possibleSq.children.length > 1) break
    }
    return squares
}

const leftRight = (row, column) => {
    let possibleSq
    //left
    for(let i = 1; i < 8; i++){
        possibleSq = direction(row, column - i)
        if(possibleSq) squares.push(possibleSq)
        // if function didn't return anything
        if(!possibleSq) break
        // if square already has a piece
        if(possibleSq.children.length > 1) break
    }
    // right
    for(let i = 1; i < 8; i++){
        possibleSq = direction(row, column + i)
        if(possibleSq) squares.push(possibleSq)
        // if function didn't return anything
        if(!possibleSq) break
        if(possibleSq.children.length > 1) break
    }
    return squares
}

const diagonal = (row, column) => {
    let possibleSq
    // left over
    for(let i = 1; i < 8; i++){
        possibleSq = direction(row + i, column - i)
        if(possibleSq) squares.push(possibleSq)
        // if function didn't return anything
        if(!possibleSq) break
        // if square already has a piece
        if(possibleSq.children.length > 1) break
    }

    // left under
    for(let i = 1; i < 8; i++){
        possibleSq = direction(row - i, column - i)
        if(possibleSq) squares.push(possibleSq)
        // if function didn't return anything
        if(!possibleSq) break
        if(possibleSq.children.length > 1) break
    }

    // right over
    for(let i = 1; i < 8; i++){
        possibleSq = direction(row + i, column + i)
        if(possibleSq) squares.push(possibleSq)
        // if function didn't return anything
        if(!possibleSq) break
        // if square already has a piece
        if(possibleSq.children.length > 1) break
    }

    // right under
    for(let i = 1; i < 8; i++){
        possibleSq = direction(row - i, column + i)
        if(possibleSq) squares.push(possibleSq)
        // if function didn't return anything
        if(!possibleSq) break
        if(possibleSq.children.length > 1) break
    }
    return squares
}

const up = (row, column) => {
    let possibleSq = direction(row + 1, column)
    if(possibleSq) squares.push(possibleSq)
    return squares
}

const down = (row, column) => {
    let possibleSq = direction(row - 1, column)
    if(possibleSq) squares.push(possibleSq)
    return squares
}

const left = (row, column) => {
    let possibleSq = direction(row, column - 1)
    if(possibleSq) squares.push(possibleSq)
    return squares
}

const leftOver = (row, column) => {
    let possibleSq = direction(row + 1, column - 1)
    if(possibleSq) squares.push(possibleSq)
    return squares
}

const leftUnder = (row, column) => {
    let possibleSq = direction(row - 1, column - 1)
    if(possibleSq) squares.push(possibleSq)
    return squares
}

const right = (row, column) => {
    let possibleSq = direction(row, column + 1)
    if(possibleSq) squares.push(possibleSq)
    return squares
}

const rightOver = (row, column) => {
    let possibleSq = direction(row + 1, column + 1)
    if(possibleSq) squares.push(possibleSq)
    return squares
}

const rightUnder = (row, column) => {
    let possibleSq = direction(row - 1, column + 1)
    if(possibleSq) squares.push(possibleSq)
    return squares
}

const allAround = (row, column) => {
    up(row, column)
    down(row, column)
    left(row, column)
    right(row, column)
    rightOver(row, column)
    rightUnder(row, column)
    leftOver(row, column)
    leftUnder(row, column)
}

const horse = (row, column) =>{
    let option1 = direction(row + 2, column + 1)
    let option2 = direction(row + 2, column - 1)
    let option3 = direction(row - 2, column + 1)
    let option4 = direction(row - 2, column - 1) 
    let option5 = direction(row + 1, column + 2)
    let option6 = direction(row + 1, column - 2)
    let option7 = direction(row - 1, column + 2)
    let option8 = direction(row - 1, column - 2)
    if(option1) squares.push(option1)
    if(option2) squares.push(option2)
    if(option3) squares.push(option3)
    if(option4) squares.push(option4)
    if(option5) squares.push(option5)
    if(option6) squares.push(option6)
    if(option7) squares.push(option7)
    if(option8) squares.push(option8)
    return squares
}

const pawnAtck = (row, column) => {
    if(playerToggle){
        let checkSq1 = findSquare(row + 1, column + 1)
        let checkSq2 = findSquare(row + 1, column - 1)
        if(checkSq1 && checkSq1.children[0].classList.contains('player2')){
            direction(row + 1, column + 1)
            squares.push(checkSq1)
        }
        if(checkSq2 && checkSq2.children[0].classList.contains('player2')){
            direction(row + 1, column - 1)
            squares.push(checkSq2)
        }

    } else {
        let checkSq1 = findSquare(row - 1, column + 1)
        let checkSq2 = findSquare(row - 1, column - 1)
        if(checkSq1 && checkSq1.children[0].classList.contains('player1')){
            direction(row - 1, column + 1)
            squares.push(checkSq1)
        }
        if(checkSq2 && checkSq2.children[0].classList.contains('player1')){
            direction(row - 1, column - 1)
            squares.push(checkSq2)
        }
    }
}

const pawnHalt = (r, c) => {
    let checkSq = findSquare(r, c)
    if(checkSq && checkSq.children.length > 1){
        changeBackground(checkSq, 'red')
        return false
    } 
    return true
}

const pawnUp = (r, c) => {
    let checkSq = pawnHalt(r + 1, c)
    if(checkSq) return up(r, c)
    if(!checkSq) return pawnHalt(r + 1, c)
}

const pawnDown = (r, c) => {
    let checkSq = pawnHalt(r - 1, c)
    if(checkSq) return down(r, c)
    if(!checkSq) return pawnHalt(r - 1, c)
}

/////////////////////////////////////////////////////////////////////////   PIECES MOVEMENT   //////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

const kingMovement = (evt) => {
    console.log('King Movement function')
    ///removes all other movement backgrounds
    squares = []
    removeBackground()

    // global variables
    movingPiece = evt.target
    oldSquare = squaresArray.find((square) => square.children[0] === movingPiece)

    // Toggle
    aPawn = false
    if(pieceToggle !== movingPiece){
        pieceToggle = movingPiece
    } else {
        pieceToggle = ''
    }

    // row and column of piece and its equivalent in the arrays
    let row = rows.indexOf(oldSquare.classList[2])
    let column = columns.indexOf(oldSquare.classList[1])

    if(pieceToggle === evt.target){
        // possible moves for piece
        allAround(row, column)

        for(let square of squares){
            square.addEventListener('click', movePiece)
        }
    } else{
        for(let square of squares){
            square.removeEventListener('click', movePiece)
            square.style.background = ''
        }
    }
}


const queenMovement = (evt) => {
    console.log('queen movement function')
    //removes all other movement backgrounds
    squares = []
    removeBackground()

    // global pieces
    movingPiece = evt.target
    oldSquare = squaresArray.find((square) => square.children[0] === movingPiece)

    // Toggle
    aPawn = false
    if(pieceToggle !== movingPiece){
        pieceToggle = movingPiece
    } else {
        pieceToggle = ''
    }

    // row and column of piece and its equivalent in the arrays
    let row = rows.indexOf(oldSquare.classList[2])
    let column = columns.indexOf(oldSquare.classList[1])

    if(pieceToggle === movingPiece){
        upDown(row, column)
        leftRight(row, column)
        diagonal(row, column)
        for(let square of squares){
            square.addEventListener('click', movePiece)
        }
    } else {
        for(let square of squares){
            square.removeEventListener('click', movePiece)
            square.style.background = ''
        }
    }

    return squaresArray = [...allSquares]
}

const bishopMovement = (evt) => {
    console.log('bishop movement function')
    //removes all other movement backgrounds
    squares = []
    removeBackground()
    
    //global pieces
    movingPiece = evt.target
    oldSquare = squaresArray.find((square) => square.children[0] === movingPiece)

    // Toggle
    aPawn = false
    if(pieceToggle !== movingPiece){
        pieceToggle = movingPiece
    } else {
        pieceToggle = ''
    }

    // row and column of piece and its equivalent in the arrays
    let row = rows.indexOf(oldSquare.classList[2])
    let column = columns.indexOf(oldSquare.classList[1])
    
    if(pieceToggle === evt.target){
        diagonal(row, column)
        for(let square of squares){
            square.addEventListener('click', movePiece)
        }
    } else {
        for(let square of squares){
            square.removeEventListener('click', movePiece)
            square.style.background = ''
        }
    }
    return squaresArray = [...allSquares]
}

const knightMovement = (evt) => {
    console.log('knight movement function')
    //removes all other movement backgrounds
    squares = []
    removeBackground()

    //global pieces
    movingPiece = evt.target
    oldSquare = squaresArray.find((square) => square.children[0] === movingPiece)

    // Toggle
    aPawn = false
    if(pieceToggle !== movingPiece){
        pieceToggle = movingPiece
    } else {
        pieceToggle = ''
    }

    console.log(pieceToggle)

    // row and column of piece and its equivalent in the arrays
    let row = rows.indexOf(oldSquare.classList[2])
    let column = columns.indexOf(oldSquare.classList[1])

    if(pieceToggle === evt.target){
        horse(row, column)
        for(let square of squares){
            square.addEventListener('click', movePiece)
        }
    } else {
        for(let square of squares){
            square.removeEventListener('click', movePiece)
            square.style.background = ''
        }
    }
    return squaresArray = [...allSquares]
}

const rookMovement = (evt) => {
    console.log('rook movement function')
    //removes all other backgrounds
    squares = []
    removeBackground()

    //global pieces
    movingPiece = evt.target
    oldSquare = squaresArray.find((square) => square.children[0] === movingPiece)

    // Toggle
    aPawn = false
    if(pieceToggle !== movingPiece){
        pieceToggle = movingPiece
    } else {
        pieceToggle = ''
    }

    // row and column of piece and its equivalent in the arrays
    let row = rows.indexOf(oldSquare.classList[2])
    let column = columns.indexOf(oldSquare.classList[1])

    if(pieceToggle === evt.target){
        upDown(row, column)
        leftRight(row, column)
        for(let square of squares){
            square.addEventListener('click', movePiece)
        }
    } else {
        for(let square of squares){
            square.removeEventListener('click', movePiece)
            square.style.background = ''
        }
    }
    return squaresArray = [...allSquares]
}

const pawnMovement = (evt) => {
    console.log('pawn movement function')
    //removes all other backgrounds
    squares = []
    removeBackground()

    //global pieces
    movingPiece = evt.target
    oldSquare = squaresArray.find((square) => square.children[0] === movingPiece)

    // Toggle
    if(pieceToggle !== movingPiece){
        pieceToggle = movingPiece
        aPawn = true
    } else {
        pieceToggle = ''
        aPawn = false
    }

    // row and column of piece and its equivalent in the arrays
    let row = rows.indexOf(oldSquare.classList[2])
    let column = columns.indexOf(oldSquare.classList[1])

    // player pawn in array
    let myPawn
    let pawnIdx
    if(playerToggle){
        // console.log(playerOne.pawns)
        myPawn = playerOne.pawns.find((piece) => piece.name === movingPiece)
        pawnIdx = playerOne.pawns.indexOf(myPawn)
    } else {
        // console.log(playerTwo.pawns)
        myPawn = playerTwo.pawns.find((piece) => piece.name === movingPiece)
        pawnIdx = playerTwo.pawns.indexOf(myPawn)
    }

    if(pieceToggle === evt.target){
        pawnAtck(row, column)
        //Player 1 turn
        if(playerToggle){
            //pawn first move
            if(playerOne.pawns[pawnIdx].moves === 0){
                console.log('no moves made')
                pawnUp(row, column)
                if(pawnUp(row, column)) pawnUp(row + 1, column)
            //not first move
            } else {
                console.log('a move was made')
                pawnUp(row, column)
            }
        //Player 2 turn
        } else {
            //pawn first move
            if(playerTwo.pawns[pawnIdx].moves === 0){
                pawnDown(row, column)
                if(pawnDown(row, column)) pawnDown(row - 1, column)
            //not first move
            } else {
                pawnDown(row, column)
            }
        }
        for(let square of squares){
            square.addEventListener('click', movePiece)
        }
    } else {
        for(let square of squares){
            square.removeEventListener('click', movePiece)
            square.style.background = ''
        }
    }
    return squaresArray = [...allSquares]
}

const p1Turn = () => {
    console.log('Player 1 move')
    //Add Event Listeners
    p1King.addEventListener('click', kingMovement)
    playerOne.queen.forEach((queen) => {
        queen.addEventListener('click', queenMovement)
    })
    playerOne.bishops.forEach((bishop) => {
        bishop.addEventListener('click', bishopMovement)
    })
    playerOne.knights.forEach((knight) => {
        knight.addEventListener('click', knightMovement)
    })
    playerOne.rooks.forEach((rook) => {
        rook.addEventListener('click', rookMovement)
    })
    playerOne.pawns.forEach((pawn) => {
        pawn.name.addEventListener('click', pawnMovement)
    })

    // Remove Event Listeners
    p2King.removeEventListener('click', kingMovement)
    playerTwo.queen.forEach((queen) => {
        queen.removeEventListener('click', queenMovement)
    })
    playerTwo.bishops.forEach((bishop) => {
        bishop.removeEventListener('click', bishopMovement)
    })
    playerTwo.knights.forEach((knight) => {
        knight.removeEventListener('click', knightMovement)
    })
    playerTwo.rooks.forEach((rook) => {
        rook.removeEventListener('click', rookMovement)
    })
    playerTwo.pawns.forEach((pawn) => {
        pawn.name.removeEventListener('click', pawnMovement)
    })
}

const p2Turn = () => {
    console.log('Player 2 move')
    //Add Event Listeners
    p2King.addEventListener('click', kingMovement)
    playerTwo.queen.forEach((queen) => {
        queen.addEventListener('click', queenMovement)
    })
    playerTwo.bishops.forEach((bishop) => {
        bishop.addEventListener('click', bishopMovement)
    })
    playerTwo.knights.forEach((knight) => {
        knight.addEventListener('click', knightMovement)
    })
    playerTwo.rooks.forEach((rook) => {
        rook.addEventListener('click', rookMovement)
    })
    playerTwo.pawns.forEach((pawn) => {
        pawn.name.addEventListener('click', pawnMovement)
    })

    // Remove Event Listeners
    p1King.removeEventListener('click', kingMovement)
    playerOne.queen.forEach((queen) => {
        queen.removeEventListener('click', queenMovement)
    })
    playerOne.bishops.forEach((bishop) => {
        bishop.removeEventListener('click', bishopMovement)
    })
    playerOne.knights.forEach((knight) => {
        knight.removeEventListener('click', knightMovement)
    })
    playerOne.rooks.forEach((rook) => {
        rook.removeEventListener('click', rookMovement)
    })
    playerOne.pawns.forEach((pawn) => {
        pawn.name.removeEventListener('click', pawnMovement)
    })
}

p1Turn()