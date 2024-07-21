// number into string
let a=123
a=a.toString()
console.log( typeof a) // if converted into string but not shown in output

//string into number
let b='123'
b=Number(b)
console.log(b)

//length of string
let aa='games of thrones'
console.log(aa.length)
 
//index of string
let aaa='games of thrones'
console.log(aaa[6])

//indexOf of string
let ab='games of thrones'
console.log(ab.indexOf('of'))

//slice of string
let ac='games of thrones'
console.log(ac.slice(6,8))

//includes of string
let ad='games of thrones'
console.log(ad.includes('games'))

//startsWith of string
let ae='games of thrones'
console.log(ae.startsWith('G'))
console.log(ae.endsWith('nes')) // endsWith

//search()
console.log(ae.search('of'))
//lastIndexOf
console.log(ae.lastIndexOf('e'))
// replace()
console.log(ae.replace('of','is'))
//charAt()
console.log(ae.charAt(20))
// concat()

let as='javascript'
console.log(ae.concat(as))

// split()
console.log(ae.split(' '))




