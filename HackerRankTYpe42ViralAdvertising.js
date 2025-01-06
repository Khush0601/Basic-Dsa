function viralAdvertising(n) {
    let sharedPeople=5;
    let likedPeople=0;
    let cummulative=0;
    let likedPeopleArr=[]

  for(let i=1;i<=n;i++){
   likedPeople=Math.floor(sharedPeople/2)
   likedPeopleArr.push(likedPeople)
   sharedPeople=likedPeople*3
   
  }
  cummulative=likedPeopleArr.reduce((acc,val)=>acc+val)
  return cummulative

}
console.log(viralAdvertising(3))