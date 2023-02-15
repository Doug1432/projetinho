const dados = ["Placa do Carro", "Modelo do Carro", "Nome", "Lugar"];
let loop = 0;

function registrar() {
    if (loop == 0) {
      dados[0] = prompt("Digite a Placa do Carro");
      dados[1] = prompt("Digite o Modelo do Carro");
      dados[2] = prompt("Digite seu Nome");
      dados[3] = prompt("Digite o Lugar");
    }
  
    if (loop == 0) {
      mostrarDados();
    }
  }
  function mostrarDados() {
    let texto = "";
    let loop = 0;
    while (loop < dados.length) {
      switch (loop) {
        case 0:
          texto += "Placa: " + dados[loop] + "</br> ";
          break;
        case 1:
          texto += "Modelo: " + dados[loop] + "<br>";
          break;
        case 2:
          texto += "Nome: " + dados[loop] + "<br>";
          break;
        case 3:
          texto += "Lugar: " + dados[loop] + "<br><br>";
          break;
      }
      loop++;
    }
    document.getElementById("dados").innerHTML += texto;
  }