/**
 * [M1S05] Ex 4 - Imprimir sequência de Fibonacci
 *
 * Escreve um programa que imprime a sequência de Fibonacci até o número atribuído na variável
 * `número`. A sequência de Fibonacci é formada pela soma dos dois números anteriores:
 * 0, 1, 1, 2, 3, 5, 8, 13, ...
 * Utiliza uma estrutura de repetição (while) para gerar a sequência.
 */

let numero = 200
let n1 = 0
let n2 = 1
let n3 = 0

while (n1 < numero) {
    console.log(n1)
    n3 = n1 + n2;
    n2 = n1
    n1 = n3
}
