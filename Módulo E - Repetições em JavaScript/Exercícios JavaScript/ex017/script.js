function tabuada (){
    let num = document.getElementById('txtn') //seleciona o input com o id txtn
    let tab = document.getElementById('seltab') //seleciona o select com o id seltab

    if (num.value.length == 0) { //se a quantidade de caracteres de num for igual a 0 será exibido um alert com a mensagem 'Por favor, digite um número!'
        window.alert('Por favor, digite um número!')
    } else { //se a quantidade de caracteres de num for diferente de 0 será executado o código a seguir.
        let n = Number(num.value) //n recebe o value de num
        let c = 1//c recebe 1, que será o valor inicial da tabuada.
        tab.innerHTML = '' //faz com que o elemento select fique vazio sempre que for executada a função

        while (c <= 10) { //enquanto c for menor ou igual a 10 o comando a seguir será executado.
            let item = document.createElement('option') //let item criará um elemento option
            item.text = `${n} x ${c} = ${n*c}`//cria um elemento option que recebe o texto `${n} x ${c} = ${n*c}`
            item.value = `tab${c}`//é utilizado para se saber em que opção foi cricado
            tab.appendChild(item) //cria o elemento filho item dentro de tab
            c++ //soma um a c sempre o loop acontecer 
        }
    }
}