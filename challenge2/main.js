let meses=["Enero", "Febrero", "Marzo" , "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"];

meses.forEach(mes => {
    console.log(mes);
});

//PUNTO 2:
function compruebaParImpar(numero){
    let string;
    if(numero%2==0){
        string= "El numero es Par";
    }else{
        string= "El numero es impar";
    }
    return flag;
}

//PUNTO 3:
function compruebaTextMayusMinus(string)
{
    let txt="";
    if(string == string.toUpperCase())
    {
        txt= "LA ADENA ESTA EN MAYUSCULAS";
    }else if(string == string.toLowerCase())
    {
        txt= "La cadena esta en minusculas"
    }else{
        txt="lA CaDeNA ES unA mescLa de AmBOS";
    }
}

//punto 4:
let numero= parseInt(prompt("Ingrese un numero para el factorial"));
console.log(calcularFactorial(numero));
function calcularFactorial(numero){
    if(numero == 0 && numero==1)
    {
        numero = 1;
    }else
    {
        for (let i = numero-1; i > 0; i--) {

            numero= numero * i;
        }        
    }
    return numero;
}
