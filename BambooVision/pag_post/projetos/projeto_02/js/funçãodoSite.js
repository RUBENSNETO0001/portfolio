let lista = [];

function escolher(){
    let numero = document.getElementById("number").value;
    //colocar na lista
    if (numero == 1){
        qtd = prompt("Quantidade de itens a ser guardado na lista: ");
        for(let i = 0; i < qtd; i++){
            lista[i] = prompt("Me de o nome do alimento: ");
        }
        alert("lista feita!");
    }
    //ve lista
    if(numero == 2){
        if(lista != ''){
            document.getElementById("lista").style.display = "block";
        for(let i = 0; i < lista.length ; i++){
            document.getElementById("listaTotal").innerHTML += `<li>${lista[i]}</li>` + "<br>";
        }
        }
        else if(lista == ''){
            alert("Nada na lista!!");
            window.location.href = "index.html";
        }
    }
}