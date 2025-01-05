// aqui quando eu clica no html vem para car e vai verificar quando verificar vai passar para dentro que vai fazer um evento e esse evento vai da de 0 a 2 dependendo do if que entrar esse numero vai ser convertido em funcão
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

// aqui so vou usar a escolha
function verificarEscolha(escolha) {
    let random = Math.floor(Math.random() * 3)
    if (escolha === random) {
        positivo =+ 1;
        // aqui vamos selecionar a img
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
