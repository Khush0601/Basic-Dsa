//1
for (var i = 0; i < 3; i++) {
    setTimeout(() => console.log(i), 1000);
}// it has function scope

//2
for (let j = 0; j < 3; j++) {
    setTimeout(() => console.log(j), 1000);
}// phle ye chelega q ki it has let nd it has block scope

//3
for (var i = 0; i < 2; i++) {
    console.log(i,'inner');// iterate ho rha hai isiliye toh i ka 2 value hoga 
}
console.log(i); // yha iterate nhi ho rha hai i ka last value aayega yha adndr se update hoke ho ki 2 hai 

//4
for (let j = 0; j < 2; j++) {
    console.log(j);// 0 nd 1
}
console.log(j); // let cannot be accessed ouside the block nd hence reff err


