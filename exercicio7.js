/**
 * [M1S05] Ex 7 - Manipulação de arrays
 *
 * Escreve um programa que contém três funções para manipular arrays, utilizando os métodos
 * push, pop e slice:
 *   A. `adicionarElemento`: recebe um array e um elemento, e adiciona o elemento ao final do array.
 *      Em seguida, retorna o array atualizado.
 *   B. `removerUltimoElemento`: recebe um array, remove o último elemento do array e retorna o elemento removido.
 *   C. `removerElementosIntervalo`: recebe um array, um índice inicial e um índice final. A função deve
 *      remover os elementos do array compreendidos entre os índices inicial e final. Em seguida, retorna o
 *      array atualizado.
 */

let cars = ['Gol', 'Voyage', 'Saveiro', 'Virtus', 'Polo', 'Jetta']

console.log(cars)

function adicionarElemento() {{cars.push('Golf')} console.log(cars)} 

adicionarElemento()

function removerUltimoElemento() {{cars.pop()} console.log(cars)} 

removerUltimoElemento()

function removerElementosIntervalo() {{cars.splice(1, 2)} console.log(cars)} 

removerElementosIntervalo()
