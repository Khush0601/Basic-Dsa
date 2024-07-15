 // creating promise with async await
 const promiseFive=new Promise((resolve,reject)=>{
    setTimeout(()=>{
        let error=false
        if(!error){
            resolve({userName:'hitesh',password:'123'})
        }
        else{
            reject('Error:somthing went wrong')
        }
    },1000)
    })

    const consumePromisefive=async()=>{
        try{
        const response=await promiseFive
        console.log(response)
        }
        catch(e){
            console.log(e)
        }
    }
    consumePromisefive()