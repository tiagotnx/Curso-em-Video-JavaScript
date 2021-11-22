var agora = new Date() 
var hora = agora.getHours() //a variavel receberá a hora do computador
console.log(`Agora são exatamente ${hora} horas.`) //exibe a mensagem e a hora definida na variável hora
if (hora < 06) { //se o valor da var hora for menor que 06, a mensagem apresentada no console será "Boa madrugada!"
    console.log('Boa madrugada!')
} else if (hora < 12) { //se o valor da var hora for menor que 12, a mensagem apresentada no console será "Bom dia!"
    console.log('Bom dia!')
} else if (hora <= 18) { //se o valor da var hora for menor ou igual 18, a mensagem apresentada no console será "Boa tarde!"
    console.log('Boa tarde!')
} else if (hora <= 24) { //se o valor da var hora for menor ou igual 24, a mensagem apresentada no console será "Boa noite!"
    console.log('Boa noite!')
}