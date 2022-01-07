function parimp(n) { //a função parimp recebe um número como parametro
    if (n%2 == 0) { //se a divisão de n tiver resto 0 ele é par, se não ele é impar
        return 'Par!'
    } else {
        return 'Impar!'
    }
}

console.log(parimp(223))//envia o parametro para a função e exibe o resultado no console.