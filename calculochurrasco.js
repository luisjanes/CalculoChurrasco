let nomes = []
var churrasco = document.getElementById('outChurrasco')
//função para guardar os nomes no array e fazer as verificações
function guardar(){
    let inNome = document.getElementById('inNome')
    let verificar = nomes.indexOf(inNome.value)
    if(inNome.value == '' || !isNaN(inNome.value)){
        alert('Por favor digite um nome...')
        inNome.focus()
        return
    }
    if(verificar == -1){
        nomes.push(inNome.value)
        inNome.value = ''
        inNome.focus()
        console.log(nomes)
        churrasco.innerHTML = ''
    } else {
        alert('Esse nome já foi cadastrado...')
        inNome.focus()
    }
    listar()
}
//Exclui o ultimo nome da lista
function excluir(){
    if(nomes.length <= 0){
        alert('Não existem nomes para excluir...')
        inNome.focus()  
    } else {
        nomes.pop()
        listar()
    }
    
}
//função que vai colocar a lista na tela
function listar(){
    if(nomes.length < 0){
        alert('Não existem nomes para listar...')
        inNome.focus()  
    } else {
        let lista = ''
        let outMsg = document.getElementById('outMsg')
        for(let i = 1; i<=nomes.length; i++){
        lista += `${i} - ${nomes[i-1]} \n`
        }
    outMsg.innerHTML = lista
    }  
}
//função que coloca os nomes em ordem alfabética
function ordem(){
    if(nomes.length <= 0){
        alert('Não existem nomes para ordenar...')
        inNome.focus()  
    } else {
        nomes.sort()
        listar()
    }
}
//função para calcular os valores de cada elemento
function calcular(){
    var horas = document.getElementById('inHoras').value
    let pessoas = nomes.length
    let cerveja = 0
    let carnes = 0
    let carvao = 0
    if(pessoas == 0){
        alert('Não há pessoas na lista...')
        return
    } else {
        if(horas <= 0 || horas > 24){
            alert('digite um horário válido...')
            inHoras.focus()
            churrasco.innerHTML = ``
            return
        } else if(horas >0 && horas <=3){
            carnes = ((pessoas * 400)/1000).toFixed(2)
            cerveja = pessoas*5
            carvao = (carnes*1.5).toFixed(2)
        } else if(horas <=6){
            cerveja = pessoas*8
            carnes = (pessoas * 400/1000*1.2).toFixed(2)
            carvao = ((carnes*1.5)*1.2).toFixed(2)
        } else if(horas <=9){
            cerveja = pessoas*10
            carnes = (((pessoas * 400)/1000)*1.4).toFixed(2)
            carvao = ((carnes*1.5)*1.4).toFixed(2)
        } else {
            cerveja = pessoas*12
            carnes = (((pessoas * 400)/1000)*1.6).toFixed(2)
            carvao = ((carnes*1.5)*1.6).toFixed(2)
        }
    churrasco.innerHTML = `Serão necessárias ${cerveja} latas (350ml) de cerveja\nSerão necessários ${carnes} KG de carnes(considerar carnes, frangos e linguiça)\nSerão necessários ${carvao} KG de carvão`
    }
}