class Motor
{
    apagado;
    constructor()
    {
        this.apagado=true;//apagado por defectoç
    }

    prender()
    {
        this.apagado= false;
    }
    apagar()
    {
        this.apagado=true;
    }
}