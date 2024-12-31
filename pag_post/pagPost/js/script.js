// parte dos modais
const buttons = document.querySelectorAll(".btn");
const modal = document.querySelector("#modal");
// selecionei oque eu queria e botei no foreach para ir vendo qual e o verdadeiro tipo uma contagem
buttons.forEach((btn, index) => {
    // contei selecionei o que eu queria de novo
    const modal = document.querySelector(`#modal${index}`);
    const span = document.querySelectorAll(".fechar")[index];
    // aqui vai a seleção normal para cria o modal
    btn.addEventListener("click", () => {
        modal.style.display = "block";
    }
    )
    // retirar o modal
    span.addEventListener("click", () => {
        modal.style.display = "none";
    })
});