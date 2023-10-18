const imagem = document.getElementById("cachorro");
const container = document.getElementById("container");
const mostrar = document.getElementById("mostrar");
const fechar = document.getElementById("fechar");

mostrar.addEventListener("click", () => {
  container.style.display = "block";
  imagem.style.display = "inline";
  mostrar.style.marginTop = "0";
});

fechar.addEventListener("click", () => {
  container.style.display = "none";
  mostrar.style.marginTop = "10rem";
});

//determina qual vai ser a operação realizada

function calcularDoisNumeros(num1, num2, operacao) {
  let resposta;

  //com if/else

  /*   if (operacao === "*") {
    resposta = multiplicar(num1, num2);
  } else if (operacao === "/") {
    resposta = dividir(num1, num2);
  } else if (operacao === "+") {
    resposta = somar(num1, num2);
  } else if(operacao === "-"){
    resposta = subtrair(num1,num2);
  }
} */

  //com switch case
  switch (operacao) {
    case "*":
      resposta = multiplicar(num1, num2);
      break;

    case "/":
      resposta = dividir(num1, num2);
      break;

    case "+":
      resposta = somar(num1, num2);
      break;

    case "-":
      resposta = subtrair(num1, num2);
      break;
  }

  //operações possíveis

  function multiplicar(num1, num2) {
    return num1 * num2;
  }

  function dividir(num1, num2) {
    return num1 / num2;
  }

  function somar(num1, num2) {
    return num1 + num2;
  }

  function subtrair(num1, num2) {
    return num1 - num2;
  }

  document.getElementById("resultado").innerHTML = resposta;
}
