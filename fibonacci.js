let a=[0,1]
let n=6;
for(let i=2;i<n;i++){
    let lastItem = a[a.length-1];
    let secondLast = a[a.length-2];
    let newNm= lastItem+secondLast;
    a.push(newNm)

}
console.log(a)