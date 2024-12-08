// comeco do event;
const span = document.querySelector("#voltarSpan");
// selecionei o todo do negocio
// depois coloquei em add de evneto com a função click
span.addEventListener('click', ()=> {
    // chamei o botton e com const poprque não vai ter alteração nem uma 
    const voltar = document.querySelector("#voltar");
    // e selecionei if e else simples se o cara clicar ele vai para o if info com o comando window.location.href = "e o local aonde que ir";
    if(voltar){
        window.location.href = "../home/index.html";
    }
    // caso de errado o evento
    else{
        alert("algum deu errado");
    }
});
// final do event