alert("Hola")
let cantidad = parseInt(prompt("Cuantos numeros queres sumar?"))
console.log("Se van a sumar " + cantidad + " numeros");
let numero = parseInt(prompt("Ingresa los numeros que quieras sumar"));
let resultado = numero;
for(let i = 1; i < cantidad; i++){
    let numero2 = parseInt(prompt("Ingresa otro numero"));
    resultado += numero2;
    console.log(resultado)
}

alert("El numero final de la suma es " + resultado);
alert("Adios")

