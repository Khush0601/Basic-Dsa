for (var i = 0; i < 3; i++) {
    setTimeout(() => console.log(i), 1000);
}// it has function scope

for (let j = 0; j < 3; j++) {
    setTimeout(() => console.log(j), 1000);
}// phle ye chelega q ki it has let nd it has block scope
