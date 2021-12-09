let num = [5, 8, 2, 9, 3] //é um array que recebe vários elementos
num.push(1) //o push adiciona o número 1 na última posição do array
num.sort() // o .sort() ordena o array em ordem crescente

console.log(num)
console.log(`O vetor tem ${num.length} elementos`)
console.log(`O primeiro valor do vetor é ${num[0]}`)

/* 
let num = [5, 8, 2, 9, 3]
num[3] = 6 //acrescenta o número 6 na posição 3 do arrey
num.push(7) //acrescenta o número 7 na ultima posição do arrey
num.length // exibe o comprimento do arrey
num.sort() // ordena o arrey em ordem crescente
*/

let pos = num.indexOf(8)//indexOf retorna em que posição o valor solicitado está no array, caso o valor não exista no array ele retorna -1

if (pos == -1) {//se pos for igual a -1 a mensagem abaixo será exibida.
    console.log('O valor não foi encontrado!')
} else {//se não for igual a -1 a menasgem abaixo sera exibida
    console.log(`O valor 8 está na posição ${pos}`)
}
