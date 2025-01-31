let a=[1,2,3,4]

let b=[...a]
console.log(a===b) // because 2 array kabi equal nhi hoga qki ref. alg hota h memory mein 
b[1]=9
console.log(a)// if a mein change krnge toh a mein hi hoga kb jb hum b ko phle hi assign kr chuke honge bdd mein update krnge a ko toh wo b mein nhi dikhega
console.log(b) // agr ismein update krnge toh a change nhi hoga