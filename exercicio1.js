/**
 * [M1S05] Ex 1 - Classificação de idade
 *
 * Escreve um programa que atribui um valor a uma variável `idade` e determina
 * em qual categoria ela se enquadra: criança (0-12 anos), adolescente (13-17 anos),
 * adulto (18-59 anos) ou idoso (60 anos ou mais). Utiliza uma estrutura condicional
 * (if, else if, else).
 */

let idade = 10
if (idade > 0 && idade <= 12) {
    console.log("É uma criança.")
} else if (idade >= 13 && idade <= 17) {
    console.log("É um adolescente.")
} else if (idade >= 18 && idade <= 59) {
    console.log("É um adulto")
} else if (idade >=60 && idade < 120) {
    console.log("É um idoso.")
} else if (idade > 120) {
    console.log("Tá de brincadeira? É o terror do INSS.")
} else {
    console.log("Número inválido.")
}