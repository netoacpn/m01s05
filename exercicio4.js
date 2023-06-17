/**
 * [M1S05] Ex 4 - Imprimir sequência de Fibonacci
 *
 * Escreve um programa que imprime a sequência de Fibonacci até o número atribuído na variável
 * `número`. A sequência de Fibonacci é formada pela soma dos dois números anteriores:
 * 0, 1, 1, 2, 3, 5, 8, 13, ...
 * Utiliza uma estrutura de repetição (while) para gerar a sequência.
 */

let numero = 200
let i1 = 0
let i2 = 1
let i3 = 0

while (i1 < numero) {
    console.log(i1)
    i3 = i1 + i2;
    i2 = i1
    i1 = i3
}
