 function findTurn(n,p){
  let frontTurn=0;
  let backTurn=0;
  for (let i = 1; i <= p; i += 2) {
    if (i >= p)
     break;
    frontTurn++;
}
  return frontTurn
 }
 console.log(findTurn(6,5))