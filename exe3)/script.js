//1) Crie um programa que peça um número ao usuário e exiba na tela todos os números de 1 até o número digitado.
//2) Peça para o usuário digitar 10 números inteiros e exiba a soma deles no final.
//3) Peça ao usuário um número e exiba a tabuada de 1 a 10 desse número.
//4) Crie um programa que solicite 5 notas e calcule a média delas.
//5) Peça dois números ao usuário e exiba todos os números pares no intervalo entre eles. Exemplo: O usuário digita 11 e 20, seu programa deve apresentar os números 12, 14, 16, 18 e 20.

let numero = Number(prompt("Digite um número inteiro que você quer a tabuada:"))
let tabuada = ""

    for (let contador = 1; contador <= 10; contador++) {
    let resultado = contador * numero

tabuada += `${numero} x ${contador} = ${resultado}\n`;
}
alert("Tabuada do " + numero + ":\n\n" + tabuada);