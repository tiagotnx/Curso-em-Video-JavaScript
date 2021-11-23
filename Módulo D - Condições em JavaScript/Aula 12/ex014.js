var agora = new Date()
var diaSemana = agora.getDay()
/* getDay captura o dia da semana

0 = Domingo
1 = Segunda
2 = Terça
3 = Quarta
4 = Quinta
5 = Sexta
6 = Sabado */
console.log(diaSemana)

switch(diaSemana) {//o switch é muito bom para testar valores pontuais, pode testar números ou strings 
    case 0: //caso o valor seja 0 irá executar o comando a seguir
        console.log('Domingo')
        break //o comando break é obrigatório no final de cada case.
    case 1:
        console.log('Segunda')
        break
    case 2:
        console.log('Terça')
        break
    case 3:
        console.log('Quarta')
        break
    case 4:
        console.log('Quinta')
        break
    case 5:
        console.log('Sexta')
        break
    case 6:
        console.log('Sabado')
        break
    default: //caso nenhum dos casos acima for verdadeiro será executado o padrão
        console.log('[ERRO] Dia inválido!')
        break
}