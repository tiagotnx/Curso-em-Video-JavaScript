function myFunction(a) {
    const array = [...a];
    let contador = 0;
    for (item of array) {
        if (item < 0) {
            contador += 1;
        }
    }
    return contador;
}

console.log(myFunction([1,-2,2,-4]))