// //punto1
// let a= prompt("Ingrese un numero");
// let b= prompt("Ingrese un numero");
// let resultado= calculadora(a,b);
// console.log(resultado);

// function calculadora(num1,num2){
//     let op="";
//     let resultado=0;
//     op=prompt("Ingrese una de las opciones: (dividir, sumar, restar, multiplicar)")
//     switch(op.toLowerCase())
//     {
//         case "dividir":
//             resultado=num1/num2;
//             break;
//         case "sumar":
//             resultado= parseInt(num1) + parseInt(num2);
//             break;
//         case "restar":
//             resultado= parseInt(num1) - parseInt(num2);
//             break;
//         case "multiplicar":
//             resultado= num1 * num2;
//             break;
//         default:
//             alert("Opcion ingresada incorrecta pa");
//             break;
//     }
//     return resultado;
// }
// //punto2
// let arrayNum=[];
// cargarArray10Veces(arrayNum);
// arrayNum.sort(function(a, b){return a - b});
// alert("De menor a mayor:"+arrayNum);
// arrayNum.reverse();
// alert("De mayor a menor:"+arrayNum);
// mostrarParImpar(arrayNum);
// function cargarArray10Veces(arrayNum)
// {
//     for (let index = 0; index < 10; index++) {
//         arrayNum.push(parseInt(prompt("Ingrese un Numero: " + index+"/10")));
//     }
// }
// function mostrarParImpar(arrayNum)
// {
//     arrayNum.forEach(element => {
//         if (element%2==0) {
//             console.log("par: " + element);
//         }else{
//             console.log("impar: "+element);
//         }
//     });
// }

//punto3
let jugador1=[];
let jugador2=[];
let jugador3=[];
let arbitro=[];

cargarJugadores(jugador1);
console.log("Datos jugador1: "+jugador1);
cargarJugadores(jugador2);
console.log("Datos jugador2: "+jugador2);
cargarJugadores(jugador3);
console.log("Datos jugador3: "+jugador3);

cargarArbrito(arbitro);
arbitro.sort(function(a, b){return a - b});
console.log("Arbitro : " +arbitro);

function cargarJugadores(jugadores)
{
    let i=0;
    while(i<4)
    {
        let num= parseInt(prompt("Ingresa un numero (Jugador):"));
        if(num<=10 && num >0)
        {
            i++;
            jugadores.push(num);
        }
    }
}
function cargarArbrito(arbitros)
{
    let i=0;
    while(i<2)
    {
        let num= parseInt(prompt("Ingresa un numero (Arbitro):"));
        if(num<10 && num >0)
        {
            i++;
            arbitros.push(num);
        }
    }
}

function calcularInterseccion(arbitro, jugador)
{
    let punto=0;
    jugador.forEach(numeros => {
        if(numeros >= arbitro[0] && numeros<=arbitro[1])
        {
            punto++;
        }
    });
    return punto;
}

console.log("Puntos del jugador 1: " + calcularInterseccion(arbitro, jugador1));
console.log("Puntos del jugador 2: " + calcularInterseccion(arbitro, jugador2));
console.log("Puntos del jugador 3: " + calcularInterseccion(arbitro, jugador3));
console.log("el promedio de acierto de los jugadores es: " + (calcularInterseccion(arbitro, jugador1) + calcularInterseccion(arbitro, jugador2) + calcularInterseccion(arbitro, jugador3)) /3);

