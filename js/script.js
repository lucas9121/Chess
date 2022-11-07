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


/////// ROWS and COLUMNS///////
const rows = ['1', '2', '3', '4', '5', '6', '7', '8']

const columns = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H']

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
let bishop1Toggle = false
let bishop2Toggle = false
let knight1Toggle = false
let knight2Toggle = false
let rook1Toggle = false
let rook2Toggle = false

/////////////////////////////////////// Players info ///////////////////////////////////////
const playerOne = {
    name: 'Me',
    king: p1King,
    queen: p1Queen,
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

console.log(playerOne)

const playerTwo = {
    name: 'Computer',
    king: p2King,
    queen: p2Queen,
    knights: [p2Knight1, p2Knight2],
    rooks: [p2Rook1, p2Rook2],
    bishops: [p2Bishop1, p2Bishop1],
    pawns: []
    
}


// adding Pawns
p2Pawns.forEach((pawn) => {
    playerOne.pawns.push({
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

/////////////////////////////// Reusable Functions //////////////////////////////////////
function movePiece(clickedEl){
    console.log('Move Piece function')
    //if cliced on opponent piece instead of square
    if(clickedEl.nodeName === 'IMG') clickedEl = clickedEl.parentElement

    //removes piece from original square
    oldSquare.removeChild(movingPiece)
    oldSquare.classList.remove('occupied')
    
    //If there's an opponent's piece in the square
    if(clickedEl.classList.contains('occupied')){
        let removePiece = clickedEl.children[0]
        removePiece.remove()
        //Player 1 turn and piece is opponent's king
        if(playerToggle && playerTwo.king === removePiece){
            clickedEl.prepend(movingPiece)
            console.log(`Game over! ${playerOne.name} won!`)
            return
        }
        //Player 2 turn and piece is opponent's king
        if(!playerToggle && playerOne.king === removePiece){
            clickedEl.prepend(movingPiece)
            console.log(`Game over! ${playerTwo.name} won!`)
            return
        }
    }

    //places it piece on clicked square
    clickedEl.prepend(movingPiece)
    clickedEl.classList.add('occupied')

    //erase global variables
    movingPiece = null
    oldSquare = null
    squares = []

    //Reset toggles
    kingToggle = false
    queenToggle = false
    bishop1Toggle = false
    bishop2Toggle = false
    knight1Toggle = false
    knight2Toggle = false
    rook1Toggle = false
    rook2Toggle = false

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

const findSquare = (r, c) => {
    let row = rows[r]
    let column = columns[c]
    let square = squaresArray.filter((square) => square.className === `square ${column} ${row}`)
    return square[0]
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

const lDirection = (idx) => {
    console.log(idx)
    let i = -1
    if(allSquares[idx + 15]){
        i = idx + 15
        //Player 1 turn
        if(playerToggle){
            // player 2 pieces
            if(allSquares[i].children[0].classList.contains('player2')){
                squares.push(allSquares[i])
                changeBackground(allSquares[i], 'green')
            // player 1 pieces
            } else if(allSquares[i].children[0].classList.contains('player1')){
                changeBackground(allSquares[i], 'red')
            // no pieces
            } else {
                squares.push(allSquares[i])
                changeBackground(allSquares[i], '#0010ff99')
            }
        // Player 2 turn
        } else {
            // player 1 pieces
            if(allSquares[i].children[0].classList.contains('player1')){
                squares.push(allSquares[i])
                changeBackground(allSquares[i], 'green')
            // player 2 pieces
            } else if(allSquares[i].children[0].classList.contains('player2')){
                changeBackground(allSquares[i], 'red')
            // no pieces
            } else {
                squares.push(allSquares[i])
                changeBackground(allSquares[i], '#0010ff99')
            }
        }
    }
    if(allSquares[idx - 15]){
        i = idx - 15
        //Player 1 turn
        if(playerToggle){
            // player 2 pieces
            if(allSquares[i].children[0].classList.contains('player2')){
                squares.push(allSquares[i])
                changeBackground(allSquares[i], 'green')
            // player 1 pieces
            } else if(allSquares[i].children[0].classList.contains('player1')){
                changeBackground(allSquares[i], 'red')
            // no pieces
            } else {
                squares.push(allSquares[i])
                changeBackground(allSquares[i], '#0010ff99')
            }
        // Player 2 turn
        } else {
            // player 1 pieces
            if(allSquares[i].children[0].classList.contains('player1')){
                squares.push(allSquares[i])
                changeBackground(allSquares[i], 'green')
            // player 2 pieces
            } else if(allSquares[i].children[0].classList.contains('player2')){
                changeBackground(allSquares[i], 'red')
            // no pieces
            } else {
                squares.push(allSquares[i])
                changeBackground(allSquares[i], '#0010ff99')
            }
        }
    }
    if(allSquares[idx + 17]){
        i = idx + 17
        //Player 1 turn
        if(playerToggle){
            // player 2 pieces
            if(allSquares[i].children[0].classList.contains('player2')){
                squares.push(allSquares[i])
                changeBackground(allSquares[i], 'green')
            // player 1 pieces
            } else if(allSquares[i].children[0].classList.contains('player1')){
                changeBackground(allSquares[i], 'red')
            // no pieces
            } else {
                squares.push(allSquares[i])
                changeBackground(allSquares[i], '#0010ff99')
            }
        // Player 2 turn
        } else {
            // player 1 pieces
            if(allSquares[i].children[0].classList.contains('player1')){
                squares.push(allSquares[i])
                changeBackground(allSquares[i], 'green')
            // player 2 pieces
            } else if(allSquares[i].children[0].classList.contains('player2')){
                changeBackground(allSquares[i], 'red')
            // no pieces
            } else {
                squares.push(allSquares[i])
                changeBackground(allSquares[i], '#0010ff99')
            }
        }
    }
    if(allSquares[idx - 17]){
        i = idx - 17
        //Player 1 turn
        if(playerToggle){
            // player 2 pieces
            if(allSquares[i].children[0].classList.contains('player2')){
                squares.push(allSquares[i])
                changeBackground(allSquares[i], 'green')
            // player 1 pieces
            } else if(allSquares[i].children[0].classList.contains('player1')){
                changeBackground(allSquares[i], 'red')
            // no pieces
            } else {
                squares.push(allSquares[i])
                changeBackground(allSquares[i], '#0010ff99')
            }
        // Player 2 turn
        } else {
            // player 1 pieces
            if(allSquares[i].children[0].classList.contains('player1')){
                squares.push(allSquares[i])
                changeBackground(allSquares[i], 'green')
            // player 2 pieces
            } else if(allSquares[i].children[0].classList.contains('player2')){
                changeBackground(allSquares[i], 'red')
            // no pieces
            } else {
                squares.push(allSquares[i])
                changeBackground(allSquares[i], '#0010ff99')
            }
        }
    }
    if(allSquares[idx + 10]){
        i = idx + 10
        //Player 1 turn
        if(playerToggle){
            // player 2 pieces
            if(allSquares[i].children[0].classList.contains('player2')){
                squares.push(allSquares[i])
                changeBackground(allSquares[i], 'green')
            // player 1 pieces
            } else if(allSquares[i].children[0].classList.contains('player1')){
                changeBackground(allSquares[i], 'red')
            // no pieces
            } else {
                squares.push(allSquares[i])
                changeBackground(allSquares[i], '#0010ff99')
            }
        // Player 2 turn
        } else {
            // player 1 pieces
            if(allSquares[i].children[0].classList.contains('player1')){
                squares.push(allSquares[i])
                changeBackground(allSquares[i], 'green')
            // player 2 pieces
            } else if(allSquares[i].children[0].classList.contains('player2')){
                changeBackground(allSquares[i], 'red')
            // no pieces
            } else {
                squares.push(allSquares[i])
                changeBackground(allSquares[i], '#0010ff99')
            }
        }
    }
    if(allSquares[idx - 10]){
        i = idx - 10
        //Player 1 turn
        if(playerToggle){
            // player 2 pieces
            if(allSquares[i].children[0].classList.contains('player2')){
                squares.push(allSquares[i])
                changeBackground(allSquares[i], 'green')
            // player 1 pieces
            } else if(allSquares[i].children[0].classList.contains('player1')){
                changeBackground(allSquares[i], 'red')
            // no pieces
            } else {
                squares.push(allSquares[i])
                changeBackground(allSquares[i], '#0010ff99')
            }
        // Player 2 turn
        } else {
            // player 1 pieces
            if(allSquares[i].children[0].classList.contains('player1')){
                squares.push(allSquares[i])
                changeBackground(allSquares[i], 'green')
            // player 2 pieces
            } else if(allSquares[i].children[0].classList.contains('player2')){
                changeBackground(allSquares[i], 'red')
            // no pieces
            } else {
                squares.push(allSquares[i])
                changeBackground(allSquares[i], '#0010ff99')
            }
        }
    }
    if(allSquares[idx + 6]){
        // The index before is last item on board in new row
        if(allSquares[idx + 7].classList.contains('H')) return squares
        if(allSquares[idx + 7].classList.contains('A')) return squares
        // index is still in new row
        i = idx + 6
        //Player 1 turn
        if(playerToggle){
            // player 2 pieces
            if(allSquares[i].children[0].classList.contains('player2')){
                squares.push(allSquares[i])
                changeBackground(allSquares[i], 'green')
            // player 1 pieces
            } else if(allSquares[i].children[0].classList.contains('player1')){
                changeBackground(allSquares[i], 'red')
            // no pieces
            } else {
                squares.push(allSquares[i])
                changeBackground(allSquares[i], '#0010ff99')
            }
        // Player 2 turn
        } else {
            // player 1 pieces
            if(allSquares[i].children[0].classList.contains('player1')){
                squares.push(allSquares[i])
                changeBackground(allSquares[i], 'green')
            // player 2 pieces
            } else if(allSquares[i].children[0].classList.contains('player2')){
                changeBackground(allSquares[i], 'red')
            // no pieces
            } else {
                squares.push(allSquares[i])
                changeBackground(allSquares[i], '#0010ff99')
            }   
        }
    }
    if(allSquares[idx - 6]){
        // The index before is last item on board in new row
        if(allSquares[idx - 7].classList.contains('H')) return squares
        if(allSquares[idx - 7].classList.contains('A')) return squares
        // index is still in new row
        i = idx - 6
        if(!allSquares[i]) return squares
        //Player 1 turn
        if(playerToggle){
            // player 2 pieces
            if(allSquares[i].children[0].classList.contains('player2')){
                squares.push(allSquares[i])
                changeBackground(allSquares[i], 'green')
            // player 1 pieces
            } else if(allSquares[i].children[0].classList.contains('player1')){
                changeBackground(allSquares[i], 'red')
            // no pieces
            } else {
                squares.push(allSquares[i])
                changeBackground(allSquares[i], '#0010ff99')
            }
        // Player 2 turn
        } else {
            // player 1 pieces
            if(allSquares[i].children[0].classList.contains('player1')){
                squares.push(allSquares[i])
                changeBackground(allSquares[i], 'green')
            // player 2 pieces
            } else if(allSquares[i].children[0].classList.contains('player2')){
                changeBackground(allSquares[i], 'red')
            // no pieces
            } else {
                squares.push(allSquares[i])
                changeBackground(allSquares[i], '#0010ff99')
            }
        }
    }
    return squares
}

/////////////////////////////////////////////////////////////////////////   PIECES MOVEMENT   //////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

const kingMovement = (evt) => {
    console.log('King Movement function')
    ///removes all other movement backgrounds
    squares = []
    for(let square of allSquares){
        square.style.background = ''
    }

    // Toggle 
    queenToggle = false
    bishop1Toggle = false
    bishop2Toggle = false
    knight1Toggle = false
    knight2Toggle = false
    rook1Toggle = false
    rook2Toggle = false
    kingToggle = !kingToggle

    // global variables
    movingPiece = evt.target
    let kingSquare = squaresArray.filter((square) => square.children[0] === movingPiece)
    oldSquare = kingSquare[0]

    // row and column of piece and its equivalent in the arrays
    let row = rows.indexOf(oldSquare.classList[2])
    let column = columns.indexOf(oldSquare.classList[1])

    if(kingToggle){
        // possible moves for piece
        allAround(row, column)

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


const queenMovement = (evt) => {
    console.log('queen movement function')
    //removes all other movement backgrounds
    squares = []
    for(let square of allSquares){
        square.style.background = ''
    }

    // Toggle
    kingToggle = false
    bishop1Toggle = false
    bishop2Toggle = false
    knight1Toggle = false
    knight2Toggle = false
    rook1Toggle = false
    rook2Toggle = false
    queenToggle = !queenToggle

    // global pieces
    movingPiece = evt.target
    let queenSquare = squaresArray.filter((square) => square.children[0] === movingPiece)
    oldSquare = queenSquare[0]

    // row and column of piece and its equivalent in the arrays
    let row = rows.indexOf(oldSquare.classList[2])
    let column = columns.indexOf(oldSquare.classList[1])

    let idx = squaresArray.indexOf(oldSquare)

    let possibleSq 

    if(queenToggle){
        upDown(row, column)
        // possible moves for piece
        // // up
        // for(let i = 1; i < 8; i++){
        //     possibleSq = direction(row + i, column)
        //     // if function didn't return anything
        //     if(!possibleSq) break
        //     if(possibleSq.children.length > 1) break
        // }
        // // down
        // for(let i = 1; i < 8; i++){
        //     possibleSq = direction(row - i, column)
        //     console.log(possibleSq)
        //     // if function didn't return anything
        //     if(!possibleSq) break
        //     if(possibleSq.children.length > 1) break
        // }
        //left
        for(let i = 1; i < 8; i++){
            possibleSq = direction(row, column - i)
            // console.log(possibleSq)
            // if function didn't return anything
            if(!possibleSq) break
            if(possibleSq.children.length > 1) break
            
        }
        //right
        for(let i = 1; i < 8; i++){
            possibleSq = direction(row, column + i)
            // console.log(possibleSq)
            // if function didn't return anything
            if(!possibleSq) break
            if(possibleSq.children.length > 1) break
            
        }


        //right over
        for(let i = 1; i < 8; i++){
            possibleSq = direction(row + i, column + i)
            // if function didn't return anything
            if(!possibleSq) break
            if(possibleSq.children.length > 1) break
            
            // console.log(possibleSq)
        }

        //right under
        // for(let i = 1; i < 8; i++){
        //     possibleSq = direction(row - i, column + i)
        //     console.log(possibleSq)
        //     // if function didn't return anything
        //     if(possibleSq.length === 0) break
        //     possibleSq = []
        // }


        //left over
        for(let i = 1; i < 8; i++){
            possibleSq = direction(row + i, column - i)
            // if function didn't return anything
            if(!possibleSq) break
            if(possibleSq.children.length > 1) break
            
        }
        //left under
        for(let i = 1; i < 8; i++){
            possibleSq = direction(row - i, column - i)
            // if function didn't return anything
            if(!possibleSq) break
            if(possibleSq.children.length > 1) break
            
        }
        // up(idx)
        // down(idx)
        // left(idx)
        // right(idx)
        // rightDiagonal(idx)
        // leftDiagonal(idx)
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

const bishopMovement = (evt) => {
    console.log('bishop movement function')
    //removes all other movement backgrounds
    squares = []
    for(let square of allSquares){
        square.style.background = ''
    }
    kingToggle = false
    queenToggle = false
    knight1Toggle = false
    knight2Toggle = false
    rook1Toggle = false
    rook2Toggle = false
    movingPiece = evt.target
    if(movingPiece === p1Bishop1 || movingPiece === p2Bishop1) bishop1Toggle = !bishop1Toggle
    if(movingPiece === p1Bishop2 || movingPiece === p2Bishop2) bishop2Toggle = !bishop2Toggle
    let bishopSquare = squaresArray.filter((square) => square.children[0] === movingPiece)
    oldSquare = bishopSquare[0]
    let idx = squaresArray.indexOf(oldSquare)
    if(bishop1Toggle || bishop2Toggle){
        rightDiagonal(idx)
        leftDiagonal(idx)
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

const knightMovement = (evt) => {
    console.log('knight movement function')
    //removes all other movement backgrounds
    squares = []
    for(let square of allSquares){
        square.style.background = ''
    }
    kingToggle = false
    queenToggle = false
    bishop1Toggle = false
    bishop2Toggle = false
    rook1Toggle = false
    rook2Toggle = false
    movingPiece = evt.target
    if(movingPiece === p1Knight1 || movingPiece === p2Knight1) knight1Toggle = !knight1Toggle
    if(movingPiece === p1Knight2 || movingPiece === p2Knight2) knight2Toggle = !knight2Toggle
    let knightSqaure = squaresArray.filter((square) => square.children[0] === movingPiece)
    oldSquare = knightSqaure[0]
    let idx = squaresArray.indexOf(oldSquare)
    if(knight1Toggle || knight2Toggle){
        lDirection(idx)
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

const rookMovement = (evt) => {
    console.log('rook moevement function')
    //removes all other backgrouns
    squares = []
    for(let square of allSquares){
        square.style.background = ''
    }
    kingToggle = false
    queenToggle = false
    bishop1Toggle = false
    bishop2Toggle = false
    knight1Toggle = false
    knight2Toggle = false
    movingPiece = evt.target
    if(movingPiece === p1Rook1 || movingPiece === p2Rook1) rook1Toggle = !rook1Toggle
    if(movingPiece === p1Rook2 || movingPiece === p2Rook2) rook2Toggle = !rook2Toggle
    let rookSquare = squaresArray.filter((square) => square.children[0] === movingPiece)
    oldSquare = rookSquare[0]
    let idx = squaresArray.indexOf(oldSquare)
    if(rook1Toggle || rook2Toggle){
        up(idx)
        down(idx)
        left(idx)
        right(idx)
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
    p1Bishop1.addEventListener('click', bishopMovement)
    p1Bishop2.addEventListener('click', bishopMovement)
    p1Knight1.addEventListener('click', knightMovement)
    p1Knight2.addEventListener('click', knightMovement)
    p1Rook1.addEventListener('click', rookMovement)
    p1Rook2.addEventListener('click', rookMovement)

    // Remove Event Listeners
    p2King.removeEventListener('click', kingMovement)
    p2Queen.removeEventListener('click', queenMovement)
    p2Bishop1.removeEventListener('click', bishopMovement)
    p2Bishop2.removeEventListener('click', bishopMovement)
    p2Knight1.removeEventListener('click', knightMovement)
    p2Knight2.removeEventListener('click', knightMovement)
    p2Rook1.removeEventListener('click', rookMovement)
    p2Rook2.removeEventListener('click', rookMovement)
}

const p2Turn = () => {
    console.log('Player 2 move')
    //Add Event Listeners
    p2King.addEventListener('click', kingMovement)
    p2Queen.addEventListener('click', queenMovement)
    p2Bishop1.addEventListener('click', bishopMovement)
    p2Bishop2.addEventListener('click', bishopMovement)
    p2Knight1.addEventListener('click', knightMovement)
    p2Knight2.addEventListener('click', knightMovement)
    p2Rook1.addEventListener('click', rookMovement)
    p2Rook2.addEventListener('click', rookMovement)

    // Remove Event Listeners
    p1King.removeEventListener('click', kingMovement)
    p1Queen.removeEventListener('click', queenMovement)
    p1Bishop1.removeEventListener('click', bishopMovement)
    p1Bishop2.removeEventListener('click', bishopMovement)
    p1Knight1.removeEventListener('click', knightMovement)
    p1Knight2.removeEventListener('click', knightMovement)
    p1Rook1.removeEventListener('click', rookMovement)
    p1Rook2.removeEventListener('click', rookMovement)
}

p1Turn()