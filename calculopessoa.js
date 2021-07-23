function calcular(){
    let pessoas = document.getElementById('numPessoas').value
    let horas = document.getElementById('inHoras').value
    let cerveja = 0
    let carnes = 0
    let carvao = 0
    var churrasco = document.getElementById('outChurrasco')
    if (pessoas == 0 || horas == 0){
        alert('Digite um valor válido...')
    }
    if(horas <= 0 || horas > 24){
        alert('digite um horário válido...')
        inHoras.focus()
        churrasco.innerHTML = ``
        return
    } else if(horas >0 && horas <=3){
        carnes = ((pessoas * 400)/1000).toFixed(2)
        cerveja = pessoas*5
        carvao = (carnes*1.5).toFixed(0)
    } else if(horas <=6){
        cerveja = pessoas*8
        carnes = pessoas * 400/1000*1.2.toFixed(2)
        carvao = ((carnes*1.5)*1.2).toFixed(0)
    } else if(horas <=9){
        cerveja = pessoas*10
        carnes = (((pessoas * 400)/1000)*1.4).toFixed(2)
        carvao = ((carnes*1.5)*1.4).toFixed(0)
    } else {
        cerveja = pessoas*12
        carnes = (((pessoas * 400)/1000)*1.6).toFixed(2)
        carvao = ((carnes*1.5)*1.6).toFixed(0)
    }
    churrasco.innerHTML = `Serão necessárias ${cerveja} latas (350ml) de cerveja\nSerão necessários ${carnes} KG de carnes(considerar carnes, frangos e linguiça)\nSerão necessários ${carvao} KG de carvão`
}