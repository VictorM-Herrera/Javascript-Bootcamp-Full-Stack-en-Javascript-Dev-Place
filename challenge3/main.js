class Nif {
    dni;
    letra;
    constructor(dni)
    {
        this.dni=dni;
        this.letra=this.calcularLetra();
    }

    calcularLetra()
    {
        let letras=['T', 'R', 'W', 'A', 'G', 'M', 'Y', 'F', 'P', 'D', 'X',
        'B', 'N', 'J', 'Z', 'S', 'Q', 'V', 'H', 'L', 'C', 'K', 'E'];
        return letras[this.dni % 23];
    }

    leer()
    {
        do{
            this.dni= parseInt(prompt("Ingrese un dni"));
        }while(this.dni<=0);
        this.letra = this.calcularLetra();
    }

    getDni()
    {
        return this.dni;
    }

    setDni(dni)
    {
        this.dni= dni;
    }

    toString()
    {
        return "Dni: " + this.dni + "-" + this.letra;
    }
}

var nif=new Nif();
nif.leer();
alert(nif.toString());

