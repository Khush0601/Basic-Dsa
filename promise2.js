//  creating promise with .then() and .catch() and finally()
const promiseFour=new Promise((resolve,reject)=>{
    setTimeout(()=>{
        let error=true
        if(!error){
            resolve({userName:'hitesh',password:'123'})
        }
        else{
            reject('Error:somthing went wrong')
        }
    },1000)
    })
    promiseFour.then((user)=>{
        console.log(user)
        return user.userName
    }).then((username)=>{
        console.log(username)
    }).catch((error)=>{
        console.log(error)
    }).finally(()=>{
        console.log('the promise is either resolved or rejected')
    })

// creating promise with finally
const firstPromise=new Promise((resolve,reject)=>{
    let success=true;
    if(success){
        resolve('yes i have got success in my life')
    }
    else{
        reject('i am so sad ,i havent')
    }
})
firstPromise.then((msg)=>{
    console.log(msg)
    console.log('now i m very happy')
}).catch((msg)=>{
    console.log(msg)
}).finally(()=>console.log('finally i had fouund answer'))

// // async 
async function printHello(){
    console.log('first Line')
    let data=new Promise((resolve,reject)=>{
        setTimeout(()=>{
            console.log('heloo')
        },3000)

       
        })
        let result=await data
        console.log(result)
        console.log('last line')
}
printHello()
console.log('end')
// promise.all
//agr all m ek v condition false hoga toh wo catch block mein jayega aur jo promise reject krega catch mein ussi ka output show hoga
// all mein sb promise resolve ho jayega toh output mein sb ka resolve wala answer show hoga
const firsPromise=new Promise((resolve,reject)=>{
    let success=true;
    if(success){
        resolve('yes i have got success in my life')
    }
    else{
        reject('i am so sad ,i havent')
    }
})

const secondPromise=new Promise((resolve,reject)=>{
    let travel=true;
    if(travel){
        resolve('yes i will')
    }
    else{
        reject('i am so sad ,i havent')
    }
})

const thirdPromise=new Promise((resolve,reject)=>{
    let enjoy=true;
    if(enjoy){
        resolve('yes i will')
    }
    else{
        reject('i am so sad ,i havent')
    }
})

Promise.any([firsPromise,secondPromise,thirdPromise]).then((result)=>{
    console.log(result)
}).catch((result)=>{
    console.log(result)
})
Promise.all([firsPromise,secondPromise,thirdPromise]).then((result)=>{
    console.log(result)
}).catch((result)=>{
    console.log(result)
})