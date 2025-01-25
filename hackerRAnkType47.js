function jumpingOnClouds(c) {
    let count = 0;
    for (let i = 0; i < c.length-1;) {
        if (i + 2 < c.length && c[i + 2] === 0) {
            i += 2;  // Jump two clouds
        } else {
            i += 1;  // Jump one cloud
        }
        count++;  // Increase jump count
    }
    return count;
}
console.log(jumpingOnClouds([0,0,0,0,1,0]))

