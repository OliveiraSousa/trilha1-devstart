let atletas = [
  {
    nome: "Cesar Abascal",
    notas: [10, 9.34, 8.42, 10, 7.88],
  },
  {
    nome: "Fernando Puntel",
    notas: [8, 10, 10, 7, 9.33],
  },
  {
    nome: "Daiane Jelinsky",
    notas: [7, 10, 9.5, 9.5, 8],
  },
  {
    nome: "Bruno Castro",
    notas: [10, 10, 10, 9, 9.5],
  },
];

function calcularMedia(notas) {
  let soma = notas.reduce((acumulador, nota) => acumulador + nota, 0);
  return soma / notas.length;
}

atletas.forEach((atleta) => {
  let notasOrdenadas = atleta.notas.slice().sort((a, b) => a - b);
  let notasValidas = notasOrdenadas.slice(1, -1);
  let media = calcularMedia(notasValidas);
  console.log(`Atleta: ${atleta.nome}`);
  console.log("-------------------------");
  console.log(`Notas recebidas: ${atleta.notas.join(", ")}`);
  console.log(`Média obtida: ${media.toFixed(2)}`);
  console.log("-------------------------");
  console.log("*************************");
});
