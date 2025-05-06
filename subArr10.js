// find the largest no. in that group of k el

function maxInSubArr(arr,k){
    let result = [];

    for (let i = 0; i <= arr.length - k; i++) {
        let max = arr[i];

        for (let j = i; j < i + k; j++) {
            if (arr[j] > max) {
                max = arr[j];
            }
        }

        result.push(max);
    }

    return result;
}
console.log(maxInSubArr([1,3,1,2,0,5],3))



function maxinSubArr(arr,k){
    for(let i=0;i<=arr.length-k;i++){
        let subArr=arr.slice(i,i+k);
        let max=Math.max(...subArr)
        console.log([`${subArr.join(",")} and max is ${max}`])
    }
}
maxinSubArr([1,3,1,2,0,5],3)