//21. Solicitar al usuario un número y mostrar si es un número de un solo dígito. 
//ANALISIS DE RQUERIMIENTO
//ENT NUMERO
//PRO Ingrese un número(leer),""El numero no es de un solo dígito(leer),""El numero es de un solo dígito(leer),""
//SAL mostrar el numero de un digito

let numero = prompt("5 ");
if (numero > 9) {
    console.log("El numero no es de un solo dígito");
} else {
    console.log("El numero es de un solo dígito");
}
