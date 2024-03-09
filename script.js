// // 1) Dobro 
// let numeros = [1,2,3,4,5];

// for (let i = 0; i < numeros.length; i++){
//     numeros[i] *= 2;
// }

// console.log(numeros)

// //2) Média Aritmética
// let vetores = [2, 4, 5, 4, 3, 7, 8, 9]

// document.querySelector("#result").innerHTML = `
//     <h2>A Média dos vetores é: ${somar()/vetores.length}
// `
// function somar() {
//   let soma = 0
//   for(let i in vetores) {
//     soma += vetores[i]
//   }
//   return soma
// }

// //3) Idade
// let idades = [15, 16, 20, 25, 65, 45, 41, 50, 70, 9, 10, 12, 18, 19, 28, 34, 24, 44, 55, 13];

// function somar() {
//   let soma = 0;
//   for (let i in idades) {
//     soma += idades[i];
//   }
//   return soma;
// }

// let media = somar() / idades.length;
// console.log(media);

// let idadesAcimaDaMedia = [];
// for (let i in idades) {
//   if (idades[i] > media) {
//     idadesAcimaDaMedia.push(idades[i]);
//   }
// }

// console.log("As idades acima da média são: ", idadesAcimaDaMedia);

// //4) Par ou ímpar
// function ehPar(numero){
//     return numero % 2 === 0;
// }

// function encontrarNumeroPar(array){
//     for (let i = 0; i < array.length; i++){
//         if (ehPar(array[i])){
//             return array[i];
//         }
//     }
//     return "Todos os números são ímpares";
// }

// let numeros = [1,2,3,4,5,6,7,8,9,10];
// let numeroPar = encontrarNumeroPar(numeros);
// console.log(numeroPar)

// // 5) Número entre 100  e 200
// let numerosValidos = [];

// function verificarNumero(numero) {
//     return numero >= 100 && numero <= 200;
// }

// function lerNumero() {
//     let numero = parseInt(prompt("Digite um número entre 100 e 200:"));

//     if (verificarNumero(numero)) {
//         numerosValidos.push(numero);
//     } else {
//         console.log("Número inválido.");
//     }
// }

// for (let i = 0; i < 8; i++) {
//     lerNumero();
// }

// console.log("Números válidos armazenados: ", numerosValidos);

// // 6) Vetor de nomes
// let nomes = ["João", "Maria", "Pedro", "Ana", "Carlos", "Lúcia", "Miguel", "Sara", "Rafael", "Laura"];

// function verificarNome(nome) {
//     for (let i = 0; i < nomes.length; i++) {
//         if (nomes[i] === nome) {
//             return i;
//         }
//     }
//     return -1; 
// }

// function lerNome() {
//     let nome = prompt("Digite um nome:");
//     let indice = verificarNome(nome);
//     if (indice !== -1) {
//         console.log("O nome está armazenado no índice:", indice);
//     } else {
//         console.log("Nome não encontrado.");
//     }
// }
// lerNome();

// // 7) Tentativas
// let nomes = ["João", "Maria", "Pedro", "Ana", "Carlos", "Lúcia", "Miguel", "Sara", "Rafael", "Laura"];

// function verificarNome(nome) {
//     for (let i = 0; i < nomes.length; i++) {
//         if (nomes[i] === nome) {
//             return i;
//         }
//     }
//     return -1;
// }

// function lerNome() {
//     let tentativas = 5;
//     let acertou = false;
    
//     while (tentativas > 0 && !acertou) {
//         let nome = prompt("Tentativas restantes: " + tentativas + ". Digite um nome:");
//         let indice = verificarNome(nome);
//         if (indice !== -1) {
//             console.log("Parabéns! Você acertou o nome '" + nome + "' na tentativa número " + (6 - tentativas) + ".");
//             acertou = true;
//         } else {
//             console.log("Nome não encontrado.");
//             tentativas--;
//         }
//     }
    
//     if (!acertou) {
//         console.log("Você excedeu o número de tentativas. O nome não foi encontrado.");
//     }
// }

// lerNome();

// 8) Metade do vetor
// let vetorA = [];
// let vetorB = [];

// function lerNumeros() {
//     for (let i = 0; i < 6; i++) {
//         let numero = parseInt(prompt("Digite o número " + (i + 1) + ":"));
//         vetorA.push(numero);
//     }
// }

// function carregarVetorB() {
//     for (let i = 0; i < vetorA.length; i++) {
//         if (i % 2 === 0) { 
//             vetorB.push(vetorA[i]);
//         }
//     }
// }

// function apresentarVetores() {
//     console.log("Vetor A:", vetorA);
//     console.log("Vetor B:", vetorB);
// }

// lerNumeros();
// carregarVetorB();
// apresentarVetores();

// // 9) Alteranando vetores
// let vetorA = [];
// let vetorB = [];
// let vetorC = [];

// function lerNumerosA() {
//     for (let i = 0; i < 5; i++) {
//         let numero = parseInt(prompt("Digite o número " + (i + 1) + " para o vetor A:"));
//         vetorA.push(numero);
//     }
// }

// function lerNumerosB() {
//     for (let i = 0; i < 5; i++) {
//         let numero = parseInt(prompt("Digite o número " + (i + 1) + " para o vetor B:"));
//         vetorB.push(numero);
//     }
// }

// function carregarVetorC() {
//     for (let i = 0; i < 5; i++) {
//         vetorC.push(vetorA[i]);
//         vetorC.push(vetorB[i]);
//     }
// }

// function apresentarVetorC() {
//     console.log("Vetor C:", vetorC);
// }

// lerNumerosA();
// lerNumerosB();
// carregarVetorC();
// apresentarVetorC();






