// pattern 5
// V

    for(let i=0;i<5;i++){
    for(let j=0;j<5;j++){
        if((j===0 && i<=2) || (j===4 && i<=2) || ((j===1 || j===3) && i===3) || (j===2 && i===4)){
            process.stdout.write("*")
        }
        else{
            process.stdout.write(" ")
        }
    }
    process.stdout.write("\n")
}
// I
for(let a=0;a<5;a++){
    for(let b=0;b<5;b++){
        if(a===0 || a===4 || b===2){
            process.stdout.write("*")
        }
        else{
            process.stdout.write(" ")
        }
    }
    process.stdout.write("\n")
}

//S
for(let c=0;c<5;c++){
    for(let d=0;d<5;d++){
        if((c===0 || c===2 || c===4) || (c===1 && d===0) || (c===3 && d===4)){
            process.stdout.write("*")
        }
        else{
            process.stdout.write(" ")
        }
    }
    process.stdout.write("\n")
}

for(let e=0;e<5;e++){
    for(let f=0;f<5;f++){
        if(e===2 || f===0 || f===4){
            process.stdout.write("*")
        }
        else{
            process.stdout.write(" ")
        }
    }
    process.stdout.write("\n")
}
console.log('break')
for(let g=0;g<5;g++){
    for(let h=0;h<5;h++){
        if((h===0 || h===4) || (h===2 && g===2) ||(g===3 && (h===1 || h===3))){
            process.stdout.write("*")
        }
        else{
            process.stdout.write(" ")
        }
    }
    process.stdout.write("\n")
}
// (h===2 && g===2) ||(g===3 && (h===1 && h===3))