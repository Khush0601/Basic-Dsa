function drawingBook(n,p){
 let frontTurnCount=Math.floor(p/2)
 let lastTurnCount=Math.floor(n/2)-Math.floor(p/2)
 return Math.min(frontTurnCount,lastTurnCount)
}
console.log(drawingBook(5,4))