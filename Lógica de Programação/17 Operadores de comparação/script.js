/*
Operadores de comparação
> maior que
>= maior ou igual que
< menor que 
<= menor ou igual que
== igualdade (valor)*
=== igualdade restrita (valor e tipo)
!= diferente (valor)*
!== diferente restrito (valor e tipo)
*/

console.log(10 > 5); //true

console.log(10 >= 10); //true

console.log(10 >= 11); //false



console.log(5 < 10); //true

console.log(10 <= 11); //true

console.log(17 <= 15); // false



console.log(10 == 10); //true

console.log(11 == 10); // false

num1 = 10; //number
num2 = '10'; //string

console.log(num1 == num2); // Deveria retornar false já que um number e uma string podem ter o mesmo valor mas não são do mesmo tipo. E por isso o mais recomendado é o === já que ele compara valor e tipo e o == faz uma conversão de tipo automaticamente.

console.log(num1 === num2); // Retorna false, apesar do mesmo valor os dois tipos são diferentes.


console.log(num1 != num2); // Deveria retornar true já que os valores são diferentes.

console.log(11 !== '11'); // Retorna true já que os tipos são diferentes.
