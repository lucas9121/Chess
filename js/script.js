const allSquares = document.querySelectorAll('.square')
const p1King = document.querySelector('#p1King')
const p2King = document.querySelector('#p2King')
const p1Queen = document.querySelector('#p1Queen')
const p2Queen = document.querySelector('#p2Queen')
let squaresArray = [...allSquares]


//toggles
let playerToggle = true
let kingToggle = false
let queenToggle = false

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

function movePiece(piece, idx, square){
    if(square){
        //removes piece from original square
        allSquares[idx].removeChild(piece)
        allSquares[idx].classList.remove('occupied')
        
        //places it piece on clicked square
        square.prepend(piece)
        square.classList.add('occupied')
        return
    }
}

function movePieceOptions(piece, idx){
    let clicked = null
    for(let square of allSquares){
        if(square.style.background !== ''){
            let clicked = square.addEventListener('click', movableSquares)
        }
    }
}

// movable squares => evt, idx, piece, element
const movableSquares = (evt) => {
    console.log(evt.target)
    for(let square of allSquares){
        square.style.background = ''
        square.removeEventListener('click', movableSquares)
    }
    return evt.target
        let square = evt.target
        console.log('Square for minus loop')
        console.log(square)
        
        //removes piece from original square
        allSquares[idx].removeChild(piece)
        allSquares[idx].classList.remove('occupied')
        
        //places it piece on clicked square
        square.prepend(piece)
        square.classList.add('occupied')
        
        //removes background
        for(let square of allSquares){
            square.style.background = ''
        }
        kingToggle - false
        queenToggle = false
        for(let square of allSquares){
            square.style.background = ''
            square.removeEventListener('click', movableSquares)
        }
        return squaresArray = [...allSquares]
}

// const movableSquares = (evt) => {
//     console.log(evt)
//     console.log(evt.target)
//     for(let square of allSquares){
//         square.style.background = ''
//         square.removeEventListener('click', movableSquares)
//     }
// }

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

const queenMovementRules = (queen, idx) => {
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
            //background color
            if(allSquares[i].classList.contains('enemy')){
                allSquares[i].style.background = `radial-gradient(${window.getComputedStyle(allSquares[i], null).getPropertyValue('background-color')}, ${window.getComputedStyle(allSquares[i], null).getPropertyValue('background-color')}, green)`
            } else {
                allSquares[i].style.background = `radial-gradient(${window.getComputedStyle(allSquares[i], null).getPropertyValue('background-color')}, ${window.getComputedStyle(allSquares[i], null).getPropertyValue('background-color')}, #0010ff99)`
            }
            // square queen can move to
            // movable squares => evt, idx, piece
            // allSquares[i].addEventListener('click', movableSquares)

        }
    }
    // console.log(movableSquares())
    return movePieceOptions(queen, idx)
    return squaresArray = [...allSquares]
}

const queenMovement = (evt) => {
    //removes all other movement backgrounds
    for(let square of allSquares){
        square.style.background = ''
    }
    kingToggle = false
    queenToggle = !queenToggle
    let queenPiece = evt.target
    if(queenToggle){
        let queenSquare = squaresArray.filter((square) => square.children[0] === queenPiece)
        let idx = squaresArray.indexOf(queenSquare[0])
        console.log(queenPiece)
        console.log(queenSquare)
        queenMovementRules(queenPiece, idx)
        // return squaresArray = [...allSquares]
    } else {
        for(let square of allSquares){
            square.style.background = ''
        }
        // return squaresArray = [...allSquares]
    }
    console.log('Queen Toggle')
    console.log(queenToggle)
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
    p2King.addEventListener('click', (evt) => {
        ///removes all other movement backgrounds
        for(let square of allSquares){
            square.style.background = ''
        }
        kingToggle = !kingToggle
        if(kingToggle){
            let kingPiece = evt.target
            // square piece is in
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