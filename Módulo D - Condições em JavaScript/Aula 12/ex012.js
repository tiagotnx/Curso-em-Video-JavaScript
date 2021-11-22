var idade = 18 //a variavel idade recebe o valor da idade
console.log(`Você tem ${idade} anos.`) //irá mostrar a mensagem com o valor digitado em idade
if (idade < 16){ //se a idade for menor que 16 irá mostrar a mensagem "Não vota"
    console.log('Não vota')
} else if (idade <18 || idade > 65) { //quando dentro de um else tiver um if não é preciso iniciar em outra linha, podendo ser utilizado o else if. Quando a idade for menor que 18 anos OU idade maior que 65 anos será apresentada a mensagem "voto apcional"
        console.log('Voto opcional')
    } else { //se nenhum dos outros parametros for cumprido irá aparecer a mensagem "Voto obrigatório"
        console.log('Voto obrigatório')
    }