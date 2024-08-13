// settimeout
console.log('hii there')

setTimeout(()=>{
    console.log('hii setTimeout')
},1000)
console.log('hiii khush')

// setInterval:it prints output  multiple times
let id=setInterval(()=>{
    console.log('hii setInterval')
},2000)
console.log(id)
clearInterval(id)// to stop setInterval

// it will print 5times at once after 2 sec
setTimeout(()=>{
    for(i=1;i<=5;i++){
        console.log('hello')
    }
},2000)

// for an interval if we want to run and after that stop
let id2=setInterval(()=>{
    console.log('hello')
},2000)

setTimeout(()=>{
   
    clearInterval(id2)
},10000)