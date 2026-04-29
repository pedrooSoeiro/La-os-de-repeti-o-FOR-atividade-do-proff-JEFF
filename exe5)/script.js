//1) Crie um programa que peça um número ao usuário e exiba na tela todos os números de 1 até o número digitado.
//2) Peça para o usuário digitar 10 números inteiros e exiba a soma deles no final.
//3) Peça ao usuário um número e exiba a tabuada de 1 a 10 desse número.
//4) Crie um programa que solicite 5 notas e calcule a média delas.
//5) Peça dois números ao usuário e exiba todos os números pares no intervalo entre eles. Exemplo: O usuário digita 11 e 20, seu programa deve apresentar os números 12, 14, 16, 18 e 20.

let numero1 = Number(prompt("Digite o primeiro numero"))
let numero2 = Number(prompt("Agora digite o segundo"))
let resultado = ""

for (let i = numero1; i<=numero2; i++){
    if(i % 2===0){
        resultado +=i + " "
    } 
}

alert ("Os números entre " +numero1+ " e " +numero2+ " são " +resultado)






















