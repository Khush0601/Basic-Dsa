// write a fun. expect and it takes a val and return an object:tobe or nottobe
const expect=(val)=>{
    return {
        tobe:(value)=>{
         if(value===val){
            return true
         }
         else{
            return false
         }
        },
        noTobe:(value)=>{
        if(value!==val){
            return true
        }
        else{
            return false 
        }
        }
    }
    
    }
    
    console.log(expect(5).noTobe(5))