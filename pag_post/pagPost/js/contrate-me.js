function formulario(){
    let nome = document.getElementById('nome').value;
    let email = document.getElementById('email').value;
    let numero = document.getElementById('numero').value;
    let txt = document.getElementById('text').value;
    if(nome && email && numero){
        alert('Muito obrigador por me contratar!!');
        window.location.href = 'index.html';
    }
    else{
        alert('Por favor verifique os campos!!');
    }
}
