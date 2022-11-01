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

/////////////////////////////////////////////////////////////////////////   DIRECTIONS   //////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
const oneAllAround = (idx) => {
    let i = -1
    if(allSquares[idx + 1]){
        i = idx + 1
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
    if(allSquares[idx - 1]){
        i = idx - 1
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
    if(allSquares[idx + 7]){
        i = idx + 7
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
    if(allSquares[idx - 7]){
        i = idx - 7
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
    if(allSquares[idx + 8]){
        i = idx + 8
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
    if(allSquares[idx - 8]){
        i = idx - 8
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
    if(allSquares[idx + 9]){
        i = idx + 9
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
    if(allSquares[idx - 9]){
        i = idx - 9
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

const upOne = (idx, pawn) => {
    let i = -1
    //Player 1 turn
    if(playerToggle){
        // if pawn hasn't moved yet
        if(playerOne.pawns[pawn].movement === 0) {
        //if pawn has already moved
        } else {
            if(allSquares[idx - 8]){
            i = idx - 8
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
    // Player 2
    } else {
        // if pawn hasn't moved yet
        if(playerOne.pawns[pawn].movement === 0) {
        //if pawn has already moved
        } else {
            if(allSquares[idx + 8]){
            i = idx + 8
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
    }
    return squares
}

const up = (idx) => {
    for(let i = idx - 8; i >= 0; i -= 8){
        if(!allSquares[i]) break
        //Player 1 turn
        if(playerToggle){
            // player 2 pieces
            if(allSquares[i].children[0].classList.contains('player2')){
                squares.push(allSquares[i])
                changeBackground(allSquares[i], 'green')
                break
            // player 1 pieces
            } else if(allSquares[i].children[0].classList.contains('player1')){
                changeBackground(allSquares[i], 'red')
                break
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
                break
            // player 2 pieces
            } else if(allSquares[i].children[0].classList.contains('player2')){
                changeBackground(allSquares[i], 'red')
                break
            // no pieces
            } else {
                squares.push(allSquares[i])
                changeBackground(allSquares[i], '#0010ff99')
            }
        }
    }
    return squares
}

const down = (idx) => {
    for(let i = idx + 8; i <= allSquares.length; i += 8){
        if(!allSquares[i]) break
        //Player 1 turn
        if(playerToggle){
            // player 2 pieces
            if(allSquares[i].children[0].classList.contains('player2')){
                squares.push(allSquares[i])
                changeBackground(allSquares[i], 'green')
                break
            // player 1 pieces
            } else if(allSquares[i].children[0].classList.contains('player1')){
                changeBackground(allSquares[i], 'red')
                break
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
                break
            // player 2 pieces
            } else if(allSquares[i].children[0].classList.contains('player2')){
                changeBackground(allSquares[i], 'red')
                break
            // no pieces
            } else {
                squares.push(allSquares[i])
                changeBackground(allSquares[i], '#0010ff99')
            }
        }
    }
    return squares
}

const left = (idx) => {
    for(let i = idx - 1; i >= 0; i--){
        if(!allSquares[i]) break
        //Player 1 turn
        if(playerToggle){
            // player 2 pieces
            if(allSquares[i].children[0].classList.contains('player2')){
                squares.push(allSquares[i])
                changeBackground(allSquares[i], 'green')
                break
            // player 1 pieces
            } else if(allSquares[i].children[0].classList.contains('player1')){
                changeBackground(allSquares[i], 'red')
                break
            // end of board
            } else if(allSquares[i].classList.contains('A') || allSquares[i].classList.contains('H')){
                squares.push(allSquares[i])
                changeBackground(allSquares[i], '#0010ff99')
                break
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
                break
            // player 2 pieces
            } else if(allSquares[i].children[0].classList.contains('player2')){
                changeBackground(allSquares[i], 'red')
                break
            // end of board
            } else if(allSquares[i].classList.contains('A') || allSquares[i].classList.contains('H')){
                squares.push(allSquares[i])
                changeBackground(allSquares[i], '#0010ff99')
                break
            // no pieces
            } else {
                squares.push(allSquares[i])
                changeBackground(allSquares[i], '#0010ff99')
            }
        }
    }
    return squares
}

const right = (idx) => {
    for(let i = idx + 1; i <= allSquares.length; i++){
        if(!allSquares[i]) break
        //Player 1 turn
        if(playerToggle){
            // player 2 pieces
            if(allSquares[i].children[0].classList.contains('player2')){
                squares.push(allSquares[i])
                changeBackground(allSquares[i], 'green')
                break
            // player 1 pieces
            } else if(allSquares[i].children[0].classList.contains('player1')){
                changeBackground(allSquares[i], 'red')
                break
            // end of board
            } else if(allSquares[i].classList.contains('A') || allSquares[i].classList.contains('H')){
                squares.push(allSquares[i])
                changeBackground(allSquares[i], '#0010ff99')
                break
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
                break
            // player 2 pieces
            } else if(allSquares[i].children[0].classList.contains('player2')){
                changeBackground(allSquares[i], 'red')
                break
            // end of board
            } else if(allSquares[i].classList.contains('A') || allSquares[i].classList.contains('H')){
                squares.push(allSquares[i])
                changeBackground(allSquares[i], '#0010ff99')
                break
            // no pieces
            } else {
                squares.push(allSquares[i])
                changeBackground(allSquares[i], '#0010ff99')
            }
        }
    }
    return squares
}

const rightDiagonal = (idx) => {
    for(let i = idx - 9; i >= 0; i -= 9){
        if(!allSquares[i]) break
        //Player 1 turn
        if(playerToggle){
            // player 2 pieces
            if(allSquares[i].children[0].classList.contains('player2')){
                squares.push(allSquares[i])
                changeBackground(allSquares[i], 'green')
                break
            // player 1 pieces
            } else if(allSquares[i].children[0].classList.contains('player1')){
                changeBackground(allSquares[i], 'red')
                break
            // end of board
            } else if(allSquares[i].classList.contains('A') || allSquares[i].classList.contains('H')){
                squares.push(allSquares[i])
                changeBackground(allSquares[i], '#0010ff99')
                break
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
                break
            // player 2 pieces
            } else if(allSquares[i].children[0].classList.contains('player2')){
                changeBackground(allSquares[i], 'red')
                break
            //end of board
            } else if(allSquares[i].classList.contains('A') || allSquares[i].classList.contains('H')){
                squares.push(allSquares[i])
                changeBackground(allSquares[i], '#0010ff99')
                break
            // no pieces
            } else {
                squares.push(allSquares[i])
                changeBackground(allSquares[i], '#0010ff99')
            }
        }
    }
    for(let i = idx + 9; i <= allSquares.length; i += 9){
        if(!allSquares[i]) break
        //Player 1 turn
        if(playerToggle){
            // player 2 pieces
            if(allSquares[i].children[0].classList.contains('player2')){
                squares.push(allSquares[i])
                changeBackground(allSquares[i], 'green')
                break
            // player 1 pieces
            } else if(allSquares[i].children[0].classList.contains('player1')){
                changeBackground(allSquares[i], 'red')
                break
            // end of board
            } else if(allSquares[i].classList.contains('A') || allSquares[i].classList.contains('H')){
                squares.push(allSquares[i])
                changeBackground(allSquares[i], '#0010ff99')
                break
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
                break
            // player 2 pieces
            } else if(allSquares[i].children[0].classList.contains('player2')){
                changeBackground(allSquares[i], 'red')
                break
            //end of board
            } else if(allSquares[i].classList.contains('A') || allSquares[i].classList.contains('H')){
                squares.push(allSquares[i])
                changeBackground(allSquares[i], '#0010ff99')
                break
            // no pieces
            } else {
                squares.push(allSquares[i])
                changeBackground(allSquares[i], '#0010ff99')
            }
        }
    }
    return squares
}

const leftDiagonal = (idx) => {
    for(let i = idx - 7; i >= 0; i -= 7){
        if(!allSquares[i]) break
        //Player 1 turn
        if(playerToggle){
            // player 2 pieces
            if(allSquares[i].children[0].classList.contains('player2')){
                squares.push(allSquares[i])
                changeBackground(allSquares[i], 'green')
                break
            // player 1 pieces
            } else if(allSquares[i].children[0].classList.contains('player1')){
                changeBackground(allSquares[i], 'red')
                break
            // end of board
            } else if(allSquares[i].classList.contains('A') || allSquares[i].classList.contains('H')){
                squares.push(allSquares[i])
                changeBackground(allSquares[i], '#0010ff99')
                break
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
                break
            // player 2 pieces
            } else if(allSquares[i].children[0].classList.contains('player2')){
                changeBackground(allSquares[i], 'red')
                break
            // end of board
            } else if(allSquares[i].classList.contains('A') || allSquares[i].classList.contains('H')){
                squares.push(allSquares[i])
                changeBackground(allSquares[i], '#0010ff99')
                break
            // no pieces
            } else {
                squares.push(allSquares[i])
                changeBackground(allSquares[i], '#0010ff99')
            }
        }
    }
    for(let i = idx + 7; i <= allSquares.length; i += 7){
        if(!allSquares[i]) break
        //Player 1 turn
        if(playerToggle){
            // player 2 pieces
            if(allSquares[i].children[0].classList.contains('player2')){
                squares.push(allSquares[i])
                changeBackground(allSquares[i], 'green')
                break
            // player 1 pieces
            } else if(allSquares[i].children[0].classList.contains('player1')){
                changeBackground(allSquares[i], 'red')
                break
            // end of board
            } else if(allSquares[i].classList.contains('A') || allSquares[i].classList.contains('H')){
                squares.push(allSquares[i])
                changeBackground(allSquares[i], '#0010ff99')
                break
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
                break
            // player 2 pieces
            } else if(allSquares[i].children[0].classList.contains('player2')){
                changeBackground(allSquares[i], 'red')
                break
            // end of board
            } else if(allSquares[i].classList.contains('A') || allSquares[i].classList.contains('H')){
                squares.push(allSquares[i])
                changeBackground(allSquares[i], '#0010ff99')
                break
            // no pieces
            } else {
                squares.push(allSquares[i])
                changeBackground(allSquares[i], '#0010ff99')
            }
        }
    }
    return squares
}
const lDirection = (idx) => {
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
        i = idx - 6
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
}

/////////////////////////////////////////////////////////////////////////   PIECES MOVEMENT   //////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

const kingMovement = (evt) => {
    console.log('King Movement function')
    ///removes all other movement backgrounds
    squares = []
    for(let square of allSquares){
        square.style.background = ''
    }
    queenToggle = false
    bishop1Toggle = false
    bishop2Toggle = false
    knight1Toggle = false
    knight2Toggle = false
    rook1Toggle = false
    rook2Toggle = false
    kingToggle = !kingToggle
    movingPiece = evt.target
    let kingSquare = squaresArray.filter((square) => square.children[0] === movingPiece)
    oldSquare = kingSquare[0]
    let idx = squaresArray.indexOf(kingSquare[0])
    if(kingToggle){
        oneAllAround(idx)
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
    kingToggle = false
    bishop1Toggle = false
    bishop2Toggle = false
    knight1Toggle = false
    knight2Toggle = false
    rook1Toggle = false
    rook2Toggle = false
    queenToggle = !queenToggle
    movingPiece = evt.target
    let queenSquare = squaresArray.filter((square) => square.children[0] === movingPiece)
    oldSquare = queenSquare[0]
    let idx = squaresArray.indexOf(queenSquare[0])
    if(queenToggle){
        up(idx)
        down(idx)
        left(idx)
        right(idx)
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

const bishopMovement = (evt) => {
    console.log('bishop movement function')
    //removes all other movement backgrounds
    squares = []
    for(let square of allSquares){
        square.style.background = ''
    }
    kingToggle = false
    queenToggle = false
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
    p1Rook1.addEventListener('click', rookMovement)
    p1Rook2.addEventListener('click', rookMovement)

    // Remove Event Listeners
    p2King.removeEventListener('click', kingMovement)
    p2Queen.removeEventListener('click', queenMovement)
    p2Bishop1.removeEventListener('click', bishopMovement)
    p2Bishop2.removeEventListener('click', bishopMovement)
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
    p2Rook1.addEventListener('click', rookMovement)
    p2Rook2.addEventListener('click', rookMovement)

    // Remove Event Listeners
    p1King.removeEventListener('click', kingMovement)
    p1Queen.removeEventListener('click', queenMovement)
    p1Bishop1.removeEventListener('click', bishopMovement)
    p1Bishop2.removeEventListener('click', bishopMovement)
    p1Rook1.removeEventListener('click', rookMovement)
    p1Rook2.removeEventListener('click', rookMovement)
}

p1Turn()