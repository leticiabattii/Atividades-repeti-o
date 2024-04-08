// 1 calcule a soma dos números de 1 a 100   --- em output
let soma = 0

for(let i = 1; i<=100; i++){
    soma += i
}
console.log(soma)

// 2 imprima a tabuada do 5   --- em html
let tabuada = 5, result = ""
for(let i = 1; i <= 10; i++){
result += tabuada + " X " + i + " = "
+(tabuada * i) + "\n"
}
alert(result)

// 3 altere o programa anterior para fornecer a tabuada do numero que o usuario pedir
let tabuada, result = ""
tabuada = Number(prompt("Digite um númeero: "))
for(let i = 1; i <= 10; i++){
result += tabuada + " X " + i + " = "
+(tabuada * i) + "\n"
}
alert(result)

// 4 imprima os numeros de 10 a 1 em ordem decrescente
for(let i=10; i>0; i--){
   console.log(i)
}

// 5 imprima os numeros impares de 1 a 20
for(let i=1; i<=20; i++){
   if( i % 2 === 1){
   console.log(i)
   }
}

// 6. Faça um programa que calcule o quadrado de cada número de 1 a 10.



// 7. Imprima os números de 1 a 10 em ordem crescente, depois imprima-os em ordem decrescente.

// 8. Calcule o fatorial de um número dado.

// 9. **Imprima os números de 1 a 100, substituindo os múltiplos de 3 por "Fizz", os múltiplos de 5 por "Buzz" e os múltiplos de ambos por "FizzBuzz".**
function gerarFizzBuzz(){
   let resultado09 = document.getElementById
   ('resultado09')
   for(i=1; i<=100; i++){
      let fizzBuzz = false
      if(i % 3 == 0) {
         resultado09.innerHTML += "Fizz"
         fizzBuzz = true
      }
      if(i % 5 == 0){
       resultado09.innerHTML += "Buzz"
       fizzBuzz = true
      }
      if(fizzBuzz == false){
         resultado09.innerHTML += i + '<br>'
      }else{
         resultado09.innerHTML += '<br>'
      }
   }
}

// 10. Faça um programa que calcule o valor da série: 1 + 1/2 + 1/3 + ... + 1/10.

// 11. Conte quantos números pares e ímpares existem de 1 a 100.

// 12. Dada uma lista de números, encontre o maior e o menor valor.

// 13. Faça um programa que calcule a média de uma lista de números.

// 14. Dado um número, verifique se ele é primo.

// 15. Imprima os números primos de 1 a 50.