// diagonal difference
const matrix = [
    [1, 2, 3], 
    [4, 5, 6],
    [9, 8, 9]  
];
function differenceOfDiagonal(arr){
    let diagonalSum1 =0
    let diagonalSum2=0
   for(let i=0;i<arr.length;i++){
    diagonalSum1=diagonalSum1+arr[i][i]
    diagonalSum2=diagonalSum2+arr[i][2-i]
    
   }
  let absDifference=Math.abs(diagonalSum1-diagonalSum2)
   return absDifference
}
console.log(differenceOfDiagonal(matrix))
