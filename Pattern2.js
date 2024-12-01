// pattern2
for(let i=0;i<8;i++){
    for(let j=0;j<8-i-1;j++){
        process.stdout.write(" ")
    }
    for(let k=0;k<i+1;k++){
        process.stdout.write("*")
    }
    process.stdout.write("\n")
}