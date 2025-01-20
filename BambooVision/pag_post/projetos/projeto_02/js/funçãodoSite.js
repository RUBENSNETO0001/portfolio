let lista = [];

function escolher(){
    let numero = document.getElementById("number").value;
    //colocar na lista
    if (numero == 1){
        qtd = prompt("Quantidade de nomes a ser guardado: ");
        for(let i = 0; i < qtd; i++){
            lista[i] = prompt("Me de os nomes dos alimentos: ");
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
        else{
            alert("Nada na lista!!");
        }
    }
    else{
           alert("Numero do comando não encontrad!!");
    }
}