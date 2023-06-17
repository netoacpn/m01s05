/**
 * [M1S05] Ex 2 - Tradução de cores
 *
 * Escreve um programa que atribui um valor a uma variável `cor` em inglês e imprime
 * a tradução para a mesma cor em português. Utiliza uma estrutura condicional (switch)
 * para fazer o mapeamento das cores.
 */

window.alert("Escolha uma cor primária.")

let primaryColor = "Yellow"

switch (primaryColor) {
    case "Yellow":
        console.log("Amarelo")
        break;
    case "Blue":
        console.log("Azul")
        break;
    case "Red":
        console.log("Vermelho")
        break;
    default:
        console.log("Não é uma cor primária!")    
}