// find the max. product and subArr
function maxProductSubArr(arr){
let maxProduct=1;// in case of negative int put -infinty
let productResultArr=[];
for(let i=0;i<arr.length;i++){
    let product=1;//product of subArr
    let productSubArr=[];
    for(let j=i;j<arr.length;j++){
        product*=arr[j];
        productSubArr.push(arr[j])
        if(product>maxProduct){
            maxProduct=product;
            productResultArr=[...productSubArr]
        }
    }


}
return {maxProduct,productResultArr}
}
console.log(maxProductSubArr([1,2,3,4,5]))