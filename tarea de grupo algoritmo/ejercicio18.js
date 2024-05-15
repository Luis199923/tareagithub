//18. Pedir al usuario un número y mostrar si es múltiplo de 3 y par.
//analisis de requerimiento
//ENT numero, multiplo 3 o par
//PRO ingrese un numero(leer),""El número es par(leer),""El número es impar(leer)
//SAL mostrar si es multiplo de3 o par

let numero = prompt("Ingrese un número:");
if (numero % 2 === 0) {
    console.log("El número es par");   
} else {
   console.log("El número es impar"); 
} 