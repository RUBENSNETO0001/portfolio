function formulario(){
    let nome = document.getElementById("nome").value;
    let email = document.getElementById("email").value;
    let numero = document.getElementById("numero").value;
    let text = document.getElementById("text").value;

    if(nome && email && numero && text){
        alert("solicitação de contrato enviado!!");
        window.location.href = "index.html";
    }
    else{
        alert("Error ao contratar");
    }
}