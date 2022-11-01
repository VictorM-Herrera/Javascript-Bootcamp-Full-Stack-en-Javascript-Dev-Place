const tablaUsuario = document.getElementById("tabla-usuarios"); //agarramos un elemento html por id para meterlo en js
const btnEnviar = document.getElementById("btn-enviar");
const btnBuscar = document.getElementById("btn-buscar");
const btnEditar = document.getElementById("btn-editar");
const btnBorrar = document.getElementById("btn-borrar");
const form = document.getElementById("formulario");

class Agenda {
    listaUsuarios;
    constructor() {
        this.listaUsuarios = [];
    }

    agregarUser(dni, nombre, apellido, telefono) {
        if (this.listaUsuarios.length != 0) {
            let flag = this.buscarXDni(dni);
            if (flag != -1) {
                alert("El dni: " + dni + " ya existe");
            } else {
                this.crearUnUsuario(dni, nombre, apellido, telefono);
            }
        } else {
            this.crearUnUsuario(dni, nombre, apellido, telefono);
        }
    }
    crearUnUsuario(dni, nombre, apellido, telefono) {
        let userAux = new Usuario(dni, nombre, apellido, telefono);
        this.listaUsuarios.push(userAux);
    }
    buscarXDni(dni) {
        let pos = -1;
        this.listaUsuarios.forEach((usuario) => {
            if (usuario.dni === dni) {
                pos = this.listaUsuarios.indexOf(usuario);
            }
        });
        return pos;
    }

    eliminarUser(posicion) {
        this.listaUsuarios.splice(posicion, 1);
    }

    mostrar() {
        let string = "";
        this.listaUsuarios.forEach((usuario, index) => {
            string += "[" + index + "] " + "{\n" + usuario.toString() + "\n}" + "\n";
        });
        return string;
    }
}

class Usuario {
    dni;
    nombre;
    apellido;
    telefono;

    constructor(dni, nombre, apellido, telefono) {
        this.dni = dni;
        this.nombre = nombre;
        this.apellido = apellido;
        this.telefono = telefono;
    }
    toString() {
        return (
            "Dni: " + this.dni + "\n" + "Nombre: " + this.nombre + "\n" + "Apellido: " + this.apellido + "\n" + "Telefono: " + this.telefono
        );
    }
}

var agenda = new Agenda();

btnEnviar.addEventListener("click", obtenerDatos);
btnEnviar.addEventListener("click", crearTabla);

function obtenerDatos() {
    let dni = document.getElementById("inputDni").value;
    let nombre = document.getElementById("inputName").value;
    let telefono = document.getElementById("inputPhone").value;
    let apellido = document.getElementById("inputLastName").value;
    if(dni != 0 && nombre.length != 0 && telefono != 0 && apellido.length != 0)
    {
        agenda.agregarUser(dni, nombre, apellido, telefono);
        console.log(agenda.listaUsuarios);
    }else{
        alert("datos incompletos");
    }
}
function crearTabla() {
    let tableData;
    agenda.listaUsuarios.forEach((element) => {
        tableData = `
        <tr>
            <td scope="row"> ${element.dni}</td>
            <td> ${element.nombre}</td>
            <td>${element.apellido}</td>
            <td>${element.telefono}</td>
            <td>
                <button class="btn btn-warning" id="btn-editar"><i class="fa-solid fa-pen-to-square"></i></button>
                <button class="btn btn-danger" onclick="agenda.eliminarUser()" id="btn-borrar"><i class="fa-solid fa-trash"></i></button>
            </td>
       </tr>
        `;
        tablaUsuario.innerHTML += tableData;
    });
}

const tabla = document.getElementById("tabla")
