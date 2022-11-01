class Puerta{
    abierta;
    ventana;
    constructor()
    {
        this.abierta= false;//cerrada por defecto
        this.ventana= new Ventana();
    }

    abrir()
    {
        this.abierta=true;
    }
    cerrar()
    {
        this.abierta= false;
    }

}