var botao = document.getElementsByClassName("button");

botao.addEventListener("click", metodo2());

function metodo2() {
  document.getElementById("btn").addEventListener("click", function () {
    document.querySelectorAll(".formulary").forEach(function (el) {
      el.style.display = "none";
    });
    document.querySelectorAll(".button").forEach(function (el) {
      el.style.display = "none";
    });
  });
}

function metodo() {
  const nome = document.getElementById("campo_name").value;
  document.getElementById("result").innerHTML = `ADS 2023.1 - IFPI CAMPUS PICOS
  <br><br>Aluno(a): ${nome}<br><br>
  Bem vindo ao jogo de adivinhação!`;
}
