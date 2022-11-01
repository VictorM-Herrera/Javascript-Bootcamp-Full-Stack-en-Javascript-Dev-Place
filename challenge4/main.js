// Se pretende realizar una aplicación para esta academia que gestione la información sobre las Persons vinculadas con la misma, que se pueden clasificar en tres tipos: Student, Profesor y Personl de servicio. A continuación, se detalla qué tipo de información debe gestionar esta aplicación:
// • Por cada Person, se debe conocer, al menos, su firstName y lastfirstNames, su número de Dnientificación y su estado civil.
// • Con respecto a los Employee, sean del tipo que sean, hay que saber su año de incorporación a la facultad y qué número de despacho tienen asignado.
// • En cuanto a los Student, se requiere almacenar el curso en el que están matriculados.
// • Por lo que se refiere a los Profesor, es necesario gestionar a qué department pertenecen (base de datos, java, php, ...).
// • Sobre el Personl de servicio, hay que conocer a qué sección están asignados (biblioteca, decanato, secretaría, ...).
// El ejercicio consiste, en primer lugar, en definir la jerarquía de classs de esta aplicación. A continuación, debe programar las classs definDnias en las que, además de los constructores, hay que desarrollar los métodos correspondientes a las siguientes acciones:
// • Cambio del estado civil de una Person.
// • Reasignación de despacho a un empleado.
// • Matriculación de un estudiante en un nuevo curso.
// • Cambio de department de un profesor.
// • Traslado de sección de un empleado del Personl de servicio.
// • Imprimir toda la información de cada tipo de indivDniuo.

class Person{
    firstName;
    lastfirstName;
    Dni;
    civil;

    constructor(firstName,lastfirstName,Dni,civil){
        this.firstName = firstName;
        this.lastfirstName = lastfirstName;
        this.Dni = Dni;
        this.civil = civil;
    }

    cambiocivil(estado){
        this.civil=estado;
    }
}

class Employee extends Person{
    incorporationDate;
    officeNumber;

    constructor(firstName,lastfirstName,Dni,civil,incorporationDate,officeNumber){
        super(firstName,lastfirstName,Dni,civil);
        this.incorporationDate = incorporationDate;
        this.officeNumber = officeNumber;
    }

    reasignacioofficeNumber(newDespacho){
        this.officeNumber = newDespacho;
    }
}

class Student extends Person{
    clase;
    
    constructor(firstName,lastfirstName,Dni,civil,clase){
        super(firstName,lastfirstName,Dni,civil,clase);
        this.clase = clase;
    }

    newClass(newclass){
        this.clase = newclass;
    }
}

class Profesor extends Employee {
    department;

    constructor(firstName,lastfirstName,Dni,civil,incorporationDate,officeNumber,department){
        super(firstName,lastfirstName,Dni,civil,incorporationDate,officeNumber,department);
        this.department = department;
    }

    nuevodepartment(newdepartment){
        this.department = newdepartment;
    }
}

class ServicePersonal extends Employee {
    section;

    constructor(firstName,lastfirstName,Dni,civil,incorporationDate,officeNumber,section){
        super(firstName,lastfirstName,Dni,civil,incorporationDate,officeNumber,section);
        this.section = section;
    }

    nuevasection(newsection){
        this.section = newsection;
    }
}


