//group by property:
//group an array of objects by a property:

const people=[
    {name:'A',city:'Delhi'},
    {name:'B',city:'Mumbai'},
    {name:'C',city:'Delhi'},
    {name:'D',city:'Mumbai'},
 ]

function groupByCity(arr){
   const grouped={};
   for(let person of arr){
    const city=person.city;
    if(!grouped[city]){
        grouped[city]=[];//create an array for new city;
    }
    grouped[city].push(person)
   }
   return grouped
}
console.log(groupByCity(people))