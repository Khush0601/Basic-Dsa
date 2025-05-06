//count nad print the subarr whose sum is even :
function countEvenSumSubArray(arr){
    let count=0;
    for(let i=0;i<arr.length;i++){
        let sum=0;
        for(let j=i;j<arr.length;j++){
            sum+=arr[j];
            if(sum%2===0){
                count++;
                console.log(arr.slice(i,j+1))//print even sum subArr
            }
        }
    }
    console.log('total even sum subArray:',count)
}

countEvenSumSubArray([1,2,3])