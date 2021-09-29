// // Função factory é uma função que retorna um objeto

// const criarProduto = (nome, preco) => {
//     return {
//         nome,
//         preco,
//         desconto: 0.1 // 10 porcento
//     }
// }

// console.log(criarProduto('Pacote Office', 300.00))




// class Pessoa {
//     constructor(nome){
//         this.nome = nome
//     }
    
//     falar(){
//         console.log(`Olá mundo! meu nome é ${this.nome}`)
//     }
// }

// const p1 = new Pessoa('Davi')
// p1.falar()



// // let pessoa2 = (nome) => console.log(`Olá mundo! meu nome é ${nome}`)

// function Pessoa2(nome) {
//         this.nome = nome;

//         this.falar = function(){
//             console.log(`meu nome é ${this.nome}`)
//         }
// }

// const p2 = new Pessoa2('Davi')
// console.log(p2.falar())



// // IIFE
// (function(time){
//     console.log(`Será executado na hora!`)
//     console.log(`Foge do escopo mais agrangente`)
//     console.log(`eu sou torcedor do ${time}`)
// })('Flamengo')

// 1 - Crie uma função que dado dois valores (passados como parâmetros) mostre no console a soma, subtração,
// multiplicação e divisão desses valores.

// (function(valor1, valor2){
//     console.log(`adicao: ${valor1} + ${valor2} = ${valor1 + valor1}`)
//     console.log(`subtracao: ${valor1} - ${valor2} = ${valor1 - valor1}`)
//     console.log(`multiplicacao: ${valor1} X ${valor2} = ${valor1 * valor1}`)
//     console.log(`divisao: ${valor1} / ${valor2} = ${valor1 / valor1}`)
// })(2, 2)

// 02) Os triângulos podem ser classificados em 3 tipos quanto ao tamanho de seus lados:
// Equilátero: Os três lados são iguais. Isósceles: Dois lados iguais. Escaleno: Todos os lados são diferentes.
// Crie uma função que recebe os comprimentos dos três lados de um triângulo e retorne sua classificação quanto
// ao tamanho de seus lados. (Neste exemplo deve-se abstrair as condições matemáticas de existência de um
// triângulo)

// function poligono(lado1, lado2, lado3){
//     if(lado1 != lado2 && lado1 != lado3 && lado2 != lado3){
//         console.log(`Poligono: Escaleno (Todos seus lados são diferentes)`)
//     }else if(lado1 === lado2 && lado1 === lado3 && lado2 === lado3){
//         console.log(`Poligono: Equilátero (Todos seus lados são iguais)`)
//     }else{
//         console.log(`Poligono: Isósceles (Dois lados são iguais)`)
//     }
// }

// poligono(15, 15, 15)
// poligono(15, 12, 15)
// poligono(15, 12, 10)

// // 03) Crie uma função que recebe dois parâmetros, base e expoente, e retorne a base elevada ao expoente

// function potenciacao (base, expoente){
//     return (base ** expoente);
// }

// console.log(potenciacao(2, 5))

// 04) Crie uma função que irá receber dois valores, o dividendo e o divisor. A função deverá imprimir o resultado
// e o resto da divisão destes dois valores.

// const divisao = function(dividendo, divisor){
//     this.div = dividendo / divisor
//     this.resto = dividendo % divisor
//     console.log(`O valor da divisão é ${div} e o resto é ${divisor}`)
// }

// divisao(8, 2)


// function conversorReal(valor){
//     let convertido = valor.toFixed(2);
//     console.log('R$ ' + convertido.toString().replace('.', ','))
// }
// conversorReal(5.500000000000)