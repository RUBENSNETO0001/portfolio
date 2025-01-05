

if (document.getElementById("btn_01")) {
    document.getElementById("btn_01").addEventListener("click", function () {
        verificarEscolha(0); // Botão 1 associa escolha 0
    })
}

if (document.getElementById("btn_02")) {
    document.getElementById("btn_02").addEventListener("click", function () {
        verificarEscolha(1); // Botão 2 associa escolha 1
    })
}
if (document.getElementById("btn_03")) {
    document.getElementById("btn_03").addEventListener("click", function () {
        verificarEscolha(2); // Botão 3 associa escolha 2
    })
}

function verificarEscolha(escolha) {
    let random = Math.floor(Math.random() * 3)
    if (escolha === random) {
        if(escolha == 0){
            document.getElementById("EscolhaRandom").src="assents/main/escolha_machine/pedra.png"
        }
        else if(escolha == 1){
            document.getElementById("EscolhaRandom").src="assents/main/escolha_machine/papel.png"
        }
        else if(escolha == 2){
            document.getElementById("EscolhaRandom").src="assents/main/escolha_machine/tesoura.png"
        }
    }
    else {
        
        document.getElementById("EscolhaRandom").src="assents/main/escolha_machine/logo.png"
    }
}