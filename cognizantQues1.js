// fuel consumption:

function calculateFuelConsumption(diesel,distance){
   let res=(diesel/distance)*100;
   return res.toFixed(2)
}
console.log(calculateFuelConsumption(20,150))