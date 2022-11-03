// Supongamos que un banco ofrece distintos productos a sus clientes (CuentaCorriente, CajaAhorro, SeguroDeVida, SeguroHogar). 
//  Realizar el método Object. assign(), utilizando el patrón de diseño Prototype, para realizar la copia de cualquiera de estos productos.
class Banco{
    constructor(ctaCorriente, cajaAhorro, seguroVida, seguroHogar)
    {
        this.ctaCorriente= ctaCorriente;
        this.cajaAhorro= cajaAhorro;
        this.seguroVida=seguroVida;
        this.seguroHogar=seguroHogar;
    }
    clone()
    {
        return new Banco(this.ctaCorriente,
            this.cajaAhorro,
            this.seguroVida,
            this.seguroHogar)
    }
}
let banco1= new Banco(false,false,false,false);
let banco2= banco1.clone();
console.table(banco1);
console.table(banco2);
banco2.cajaAhorro=true;
console.log(banco1);
console.log(banco2);
// Supongamos que vamos a crear una oficina para una empresa determinada y estamos seguros que solo compraremos esa sola. La oficina tendrá un nombre y una cantidad fija de empleados. Si intento crear una segunda oficina me debería devolver la primera instancia creada. Aplicar el patron de diseño Singleton y explicar que principio SOLID es contrario a este patrón de diseño.
class Office{
    nombre;
    cantEmpleados;
    constructor(nombre, cantEmpleados)
    {         
        this.nombre=nombre;
        this.cantEmpleados=cantEmpleados;
        if(typeof Office.instance ==="object")
        {
            return Office.instance;
        }else{
            Office.instance=this;
            return this;
        }
    }
}
let oficina = new Office("adios",10);

let oficina2 = new Office("hola",5);

console.log(oficina2);//muestra adios y 10, que seria la primera instancia




