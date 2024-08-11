// function expression: we r storing function in another variable

const sum=function(a,b){
    console.log(a+b)
}
sum(7,8)

//higher Order function
function multiplegreet(func,n){
    for(let i=1;i<=n;i++){
        func
    }
    return func
}

let greet=function(){
    console.log('hello')
}
multiplegreet(greet,5)

