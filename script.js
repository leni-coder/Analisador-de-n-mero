let numero = document.getElementById("num")
let adicionado =[]
let select = document.getElementById("add")
let resul = document.getElementById("resultado")

function adicionar() {
    let num = Number(numero.value)
    if (numero.value>=1 && numero.value<=100 && adicionado.indexOf(numero.value)==-1) {  
        let bancod= document.createElement('option')//cria uma linha na caixa de texto select
        bancod.text=`O valor ${numero.value} foi adicionado`
        select.appendChild(bancod)//adiciona o texto no select
        adicionado.push(num)//Adiciona números a uma variável composta
        
    }else{window.alert("Valor inválido ou já cadastrado na lista!")}
    numero.value=""//esvazia a caixa de texto
    numero.focus()//seleciona a caixa de texto
    resul.innerHTML=""

}

function finalizar(){
    if (select.length==0) {
        alert("Não é possível finalizar, faltam dados!")
    }else{
        let total=adicionado.length
        let maior = adicionado[0]
        let menor = adicionado[0]
        let soma =0
        let media=0
        
        for(let pos in adicionado){
                             
            if (adicionado[pos] > maior) 
            maior=adicionado[pos]
            if (adicionado[pos] < menor) 
             menor=adicionado[pos]
            
        }
        
       
        for (let i = 0; i < total; i++) {
             let element = adicionado[i];
            
            soma += element
       
            
         }
       
        media=soma/total
        resul.innerHTML=""//esvazia a div
        resul.innerHTML +=`<p>Ao todo, temos ${adicionado.length} números cadastrados<p>`
        resul.innerHTML +=`<p>O maior valor informado foi ${maior}<p>`
        resul.innerHTML +=`<p>O menor valor informado foi ${menor}<p>`
        resul.innerHTML +=`<p> Somando todos os valores, temos: ${soma}<p>`
        resul.innerHTML += `<p> A média dos valores digitados é: ${media}</p>`
    }
   
    
}
