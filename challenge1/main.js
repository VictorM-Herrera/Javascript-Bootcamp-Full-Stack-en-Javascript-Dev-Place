//PUNTO 1:
let precio = prompt("Ingrese el precio del producto a comprar: ");

console.log("El total a pagar es: " + resultadoCompra(precio));

//PUNTO 2:
let creditos = prompt("Ingrese la cantidad de creditos que quiera pagar: (1/4)");
switch (parseInt(creditos)) {
  case 1:
    console.log("Usted tiene acceso a las sig. salas: Consolas");
    break;
  case 2:
    console.log("Usted tiene acceso a las sig. salas: Consolas, Juegos 2D");
    break;
  case 3:
    console.log( "Usted tiene acceso a las sig. salas: Consolas, Juegos 2D, Juegos 3D");
    break;
  case 4:
    console.log("Usted tiene acceso a las sig. salas: Consolas, Juegos 2D, Realidad Virtual");
    break;
    default:
        console.log("Opcion ingresada incorrecta");
        break;
}
//PUNTO 3:
let op=prompt("Ingrese la opcion adecuada: \n" + "1. Gasolina\n" + "2. Diesel\n" + "3. Electrico\n");
//USO IF COMO EJEMPLO
if(op== "1" || op=="Gasolina")
{
    window.alert("dirijase a la oficina 100");
}else if(op== "2" || op=="Diesel")
{
    window.alert("dirijase a la oficina 200");
}else if(op== "3" || op=="Electronico"){
    window.alert("dirijase a la oficina 300");
}
//PUNTO 4:
let numero= parseInt(prompt("Ingrese un valor para el descuento: "));
if(numero < 100)
{
    window.alert("No gracias");
}else if(numero > 100 && numero < 300)
{
    window.alert("Con el descuento del 5%: " + (numero - (numero * 0.05)));
}else if(numero > 300 && numero < 400)
{   
    window.alert("Con el descuento del 10%: " + (numero - (numero * 0.10)));
}else{
    window.alert("Con el descuento del 10%: " + (numero - (numero * 0.15)));
}

//PUNTO 5:
let numero2= prompt("Ingrese un numero");
let aux= "0";
for (let i = 1; i<= numero2; i++) {
    aux+= "," + i;
}
window.alert(aux);

//PUNTO 6:
let numero3=prompt("ingrese un numero: ");
for(let i =0; i<=numero3; i++)
{
    if( i%3 == 2)
    {
        console.log(i);
    }
}
//PUNTO 7:
var acumulador=0;
for(let i=0; i=4; i++)
{
    acumulador+= parseInt(prompt("Ingrese un numero: (ej7)"));
}
window.alert("El promedio de los 4 numeros ingresados es de: " + (acumulador/4));
//FUNCIONES:
function resultadoCompra(precio) {
  let impuestos = precio * 0.21;
  let suma = parseFloat(precio) + parseFloat(impuestos);
  return suma;
}


