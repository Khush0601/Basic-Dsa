function Check(str){
    let a=str.split('').reverse().join('')
    if(a===str){
     return true
    }
    else{
        return false
    }
    
}
console.log(Check('poop'))
console.log(Check('poohk'))