/**
 * [M1S05] Ex 5 - Verificar palavras em um array
 *
 * Escreve um programa que percorre um array de palavras e exibe todas as palavras que possuem
 * mais de 5 caracteres. Utiliza a estrutura de repetição for of para percorrer o array.
 */

let cars = ['gol', 'ka', 'hb20', 'fiesta', 'sandero', '208', 'polo', 'elantra', 'passat']
let words = []
let cut = []

for (cut of cars){
    if (cut.length>=5){
        words.push(cut)
    }
}

console.log(words)