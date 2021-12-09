let valores = [8,1,7,4,2,9]

// for (let pos=0; pos < valores.length; pos++) {//0 loop começa com pos=0, enquanto o valor de pos for menor que o número de itens do array valores pos receberá mais 1
//     console.log(`A posição ${pos} tem o valor ${valores[pos]}`)
// }

for(let pos in valores){//para cada posição em valores será executado o código abaixo
    console.log(`A posição ${pos} tem o valor ${valores[pos]}`)
}