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