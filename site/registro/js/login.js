// usei uma função, que para amim e mais rapido ser executado
function entrarLogin() {
    let chavedeEntrada = document.getElementById("user").value;
    let senha = document.getElementById("senha").value;

        if (chavedeEntrada && senha ) {
            window.location.href = "../BambooVision/home/index.html";
        }
        else if(chavedeEntrada == "" || senha == ""){
            alert("Verifique os campos não estão vazios");
        }
        else {
            // caso o cara erre a senha. como não ta conectado a um banco de dados so tem uma senha possivel para acessar  o site.
            alert("Porfavor verifique se colocou algum no campos do login!!");
        }
}