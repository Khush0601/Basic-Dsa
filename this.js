//this in object
const student={
    name:"khush",
    age:20,
    eng:97,
    hindi:65,
    maths:90,
    getAvg(){
        let avg=(this.eng+this.hindi+this.maths)/3
        console.log(avg)
    }
}
student.getAvg()

