//primeiro exercicio//

var  altura = parseFloat(prompt("Entre com a Altura"))
var sexo = prompt("Entre com o Sexo")

if(sexo =="F" || sexo=="f"){
    peso =(62.1 * altura)- 44.7
    alert (peso)
}
else if(sexo = "M"||sexo=="m"){
    peso = (72.7 * altura)- 58
    alert (peso)
}
else{
    alert("Valor inserido incorreto")
}
    

//segundo exercicio
var Qtd_horas = parseFloat(prompt("Entre com a quantidade de horas trabalhadas"))
var sal_hora = parseFloat(prompt("Entre com o valor da hora"))
var Salario_total, Hra_extra

if(Qtd_horas <= 160 ){
    Salario_total = Qtd_horas * sal_hora
   
}
else {
    Hra_extra = (Qtd_horas - 160) * (sal_hora * 1.5)
    Salario_total = (160 * sal_hora) + Hra_extra
    }
    alert(Salario_total)

//Exercicio de tabuada


//inicio da função, quando for função tem que chamar ela no programa principal
function tabuada(numero){
    for ( var i=1; i<= 10; i++){
        console.log(numero +'X' + i + '='+ numero * i);
    }
}
//programa principal
var num = prompt("Entre com o numero inteiro")
tabuada(num)

/* EXERCICIO DE SELECÃO
1 - Fazer um algoritmo que leia um número e imprima se o número é par ou ímpar.*/

let num = parseInt(prompt('Entre com un numero inteiro'))


if(num %2==0){
    alert('O número é par')
}
else {
    alert('O número é impar')
}

/*2 - Ler um número inteiro e imprimir se ele é par e divisível por três.*/

let num = parseInt(prompt('Entre com un numero inteiro'))

if ( num % 2 ==0){
    alert('O número é par e não é divisivel por 3')
}
else if (num % 3 ==0){
    alert('O número é divisivel por 3')
}

/*3 - Escreva um algoritmo que leia um número e imprima se o número é positivo, negativo ou zero.*/

let num1 = parseFloat(prompt("Entre com um número"))


if (num1 >=0 ){
    alert('Positivo');
}
else if (num1<0){
    alert('Negativo');
}
else if(num1 =0){
    alert('zero')
}

/*4 - Escreva um algoritmo que leia dois valores inteiros e diferentes, e mostre-os em ordem
decrescente.*/

let numero1 = parseInt(prompt('Entre com o primeiro número'))
let numero2 = parseInt(prompt('Entre com o segundo número'))

let aux = numero1

if(numero1>numero2){
    aux=numero2
    numero2=numero1
    numero1= aux
}
alert(numero1+ "-"+numero2)

/*5 Crie um programa que leia uma palavra e verifique se a palavra digitada é igual a Algoritmo. Mostre uma mensagem dizendo
ALG, caso tenha sido digitado Algoritmo.*/

let palavra = prompt("Digite uma palavra")

if (palavra == "algoritmo"){
    alert("ALG")
}
else {
    alert(palavra)
}

/*6 Tendo como dados de entrada a altura e o sexo de uma pessoa, construa um algoritmo que calcule o seu peso ideal, 
utilizando as seguintes fórmulas:  para homens: (72.7 * h) - 58;  para mulheres: (62.1 * h) - 44.7*/

var  altura = parseFloat(prompt("Entre com a Altura"))
var sexo = prompt("Entre com o Sexo")

if(sexo =="F" || sexo=="f"){
    peso =(62.1 * altura)- 44.7
    alert (peso)
}
else if(sexo = "M"||sexo=="m"){
    peso = (72.7 * altura)- 58
    alert (peso)
}
else{
    alert("Valor inserido incorreto")
}

/*7 Elabore um algoritmo que leia o valor de dois números inteiros e a operação aritmética desejada. Calcule então a 
resposta adequada. Utilize os símbolos da tabela a seguir para ler qual a operação aritmética foi escolhida:*/

let number1 = parseInt(prompt("Entre com o primeiro número inteiro"))
let number2 = parseInt(prompt("Entre com  o Segundo número inteiro"))

let operacao = prompt("Digite a operacao desejada:  + Adição, - Subtração, * Multiplicação, / Divisão")

if (operacao =="+"){
    resultado = (number1 + number2)
    alert(resultado)
}
else if (operacao =="-"){
    resultado =(number1-number2)
    alert(resultado)
}
else if(operacao == "*"){
    resultado = (number1*number2)
    alert(resultado)
}
else if(operacao == "/"){
    resultado = (number1 / number2)
    alert(resultado)
}
else {
    alert("Operação Inválida")
}

/*8  Escreva um algoritmo que leia três valores inteiros e diferentes e mostre-os 
em ordem decrescente. Utilize para tal uma seleção encadeada. */

let valor1 = parseInt(prompt('Entre com o primeiro número'))
let valor2= parseInt(prompt('Entre com o segundo número'))
let valor3= parseInt(prompt('Entre com o terceiro número'))

if( valor1 > valor2){
    if(valor2 > valor3){
        alert(valor1+ "-"+valor2+ "-"+valor3)
    }
    else if(valor1 > valor3){
            alert(valor1+ "-"+valor3+ "-"+valor2)
        }
        else {
            alert(valor3+ "-"+valor1+ "-"+valor2)
        }
    }
    else{
    if(valor1> valor3){
        alert(valor2+ "-"+valor1+ "-"+valor3)
    }
    else if(valor2>valor3){
        alert(valor2+ "-"+valor3+ "-"+valor1)
    }
    else {
        alert(valor3+ "-"+valor2+ "-"+valor1)
        }    
    }

    /*9 Elabore um algoritmo que calcule o que deve ser pago por um produto, considerando o preço 
normal de etiqueta e a escolha
 da condição de pagamento. Utilize os códigos da tabela a seguir 
para ler qual a condição de pagamento escolhida e efetuar o cálculo adequado.  */


