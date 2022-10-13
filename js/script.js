const allSquares = document.querySelectorAll('.square')

for(let square of allSquares){
    console.log(square)
    let small = document.createElement('small')
    small.innerHTML = `${square.id}`
    square.appendChild(small)
}