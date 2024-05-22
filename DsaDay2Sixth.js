// joining two array
// without method
let a=[1,2,3,4]
let b=[5,6,7,8]
let d=[3,99]
let c=[]
for(let i=0;i<a.length;i++){
  c[i]=a[i]
}
for(let i=0;i<b.length;i++){
    c[a.length+i]=b[i]
}
for(let i=0;i<d.length;i++){
    c[a.length+b.length+i]=d[i]
}
console.log(c)
// method
// array destructuring
let g=[1,2,3,4]
let h=[5,6,7,8]
let j=[3,99]
let k=[...g,...h,...j]
console.log(k)

// concat method
let gg=[1,2,3,4]
let hh=[5,6,7,8]
let jj=[3,99]
let bb=gg.concat(hh).concat(jj)
console.log(bb)



