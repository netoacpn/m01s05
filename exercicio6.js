/**
 * [M1S05] Ex 6 - Percorrer array de objetos de produtos
 *
 * Escreve um programa que percorre um array de objetos que representam produtos e exibe o nome
 * e o preço de cada produto. Após imprimir essas informações, imprime o total de produtos
 * e o valor total de todos os produtos.
 */

let products = [
    {name: 'Kwid', price: 48.790},
    {name: 'Mobi', price: 48.899},
    {name: 'HB20', price: 63.699},
    {name: 'Siena', price: 64.299},
    {name: 'Onix', price: 65.199}
]

for(let i = 0; i < products.length; i++){
    console.log(products[i])
}

console.log(`Há um total de ${products.length} produtos.`)

let totalProdutos = products.reduce((acc, obj) => acc + obj.price, 0)

console.log(`O valor total dos produtos é: R$ ${totalProdutos.toFixed(3)}.`)