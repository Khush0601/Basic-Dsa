const promiseOne=new Promise(function(resolve,reject){
    setTimeout(()=>{
     console.log('async task completely')
     resolve()
    },1000)
})
promiseOne.then(function(){
    console.log('promise consumed')
})


const promiseTwo=new Promise((resolve,reject)=>{
    setTimeout(()=>{
     console.log('async2 task completed')
     reject()
    },1000)
})
promiseTwo.catch(()=>{
    console.log('promise 2 failed')
})


// without storing in variable
new Promise((resolve,reject)=>{
    setTimeout(()=>{
     console.log('async 3 task failed')
     reject()
    },1000)
}).catch(()=>{
    console.log('promise 3 failed')
})