/**
 * [M1S05] Ex 3 - Verificar número primo
 *
 * Escreve um programa que atribui um valor a uma variável `número` e verifica se ele
 * é um número primo. Um número primo é aquele que é divisível apenas por 1 e por ele mesmo.
 * Utiliza uma estrutura de repetição (do while) para verificar as divisões.
 */

let ePrimo = true;

let numero = 11;

let i = numero - 1;

while (i != 1) {
    if (numero % i == 0) {
        ePrimo = false;
    }
    i--;
}

return (ePrimo == true) ? console.log(`${numero} é um número primo.`) : console.log(`${numero} não é um número primo.`);