const imagem = document.getElementById("cachorro");
const container = document.getElementById("container");
const botao = document.getElementById("mostrar");
const fechar = document.getElementById("fechar");

botao.addEventListener("click", () => {
    container.style.display = "block";
    imagem.style.display = "inline";
})

fechar.addEventListener("")