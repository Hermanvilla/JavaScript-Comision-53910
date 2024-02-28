/* 
Codigo Usando comandos basicos

let ingresar = false;
let contacto;
let nombre = prompt("Ingresa tu nombre");
let opcion =prompt("Bienvenido " + nombre + "\n¿Cómo podemos ayudarte? \n1. Derecho Civil \n2. Derecho Laboral \n3. Derecho Intelectual \n4. Otro \n5. Presiona X para salir");

while (opcion !== "X") {
    if (opcion == "1") {
        alert("Hola " + nombre + " El Abogado Marcos Linares sera tu asesor especializado");
        while (contacto !== 4) {
            contacto = prompt("¿Como contactarte? \n1. Whatsapp \n2. Email  \n3. Agenda una llamada \n4. Regresa al menu anterior");
            if (contacto == 1) {
                alert("Seleccionaste Whatsapp");
                break;
            } else if (contacto == 2) {
                alert("Seleccionaste Email");
                break;
            } else if (contacto ==3){
                alert("Agenda tu llamada acá");
                break;
            } else if(contacto == 4) {
                alert("Regresando al menu anterior");
                break;
            } else {
                alert("Opcion invalida");
            }
        }

    } else if (opcion == "2") {
        alert("Hola " + nombre + " El Abogado Eduardo Urdaneta sera tu asesor especializado");
        while (contacto !== 4) {
            contacto = prompt("¿Como contactarte? \n1. Whatsapp \n2. Email  \n3. Agenda una llamada \n4. Regresa al menu anterior");
            if (contacto == 1) {
                alert("Seleccionaste Whatsapp");
                break;
            } else if (contacto == 2) {
                alert("Seleccionaste Email");
                break;
            } else if (contacto ==3){
                alert("Agenda tu llamada acá");
                break;
            } else if(contacto == 4) {
                alert("Regresando al menu anterior");
                break;
            } else {
                alert("Opcion invalida");
            }
        }

    } else if (opcion == "3") {
        alert("Hola " + nombre + " La Abogada Natalia Cuomo sera tu asesor especializado");
        while (contacto !== 4) {
            contacto = prompt("¿Como contactarte? \n1. Whatsapp \n2. Email  \n3. Agenda una llamada \n4. Regresa al menu anterior");
            if (contacto == 1) {
                alert("Seleccionaste Whatsapp");
                break;
            } else if (contacto == 2) {
                alert("Seleccionaste Email");
            } else if (contacto ==3){
                alert("Agenda tu llamada acá");
                break;
            } else if(contacto == 4) {
                alert("Regresando al menu anterior");
                break;
            } else {
                alert("Opcion invalida");
            }
        }
        
    } else if(opcion == "4") {
        alert("Hola " + nombre + " Deseamos ayudarte. Pronto nuestos especialistas te contactaran.");
        while (contacto !== 4) {
            contacto = prompt("¿Como contactarte? \n1. Whatsapp \n2. Email  \n3. Agenda una llamada \n4. Regresa al menu anterior");
            if (contacto == 1) {
                alert("Seleccionaste Whatsapp");
                break;
            } else if (contacto == 2) {
                alert("Seleccionaste Email");
            } else if (contacto ==3){
                alert("Agenda tu llamada acá");
                break;
            } else if(contacto == 4) {
                alert("Regresando al menu anterior");
                break;
            } else {
                alert("Opcion invalida");
            }
        }
        break;
    }
    opcion = prompt (
        "\n¿Cómo podemos ayudarte? \n1. Derecho Civil \n2. Derecho Laboral \n3. Derecho Intelectual \n4. Otro \n5. Presiona X para salir"
    );
}

**/


/**  
Version Primera entrega con Funciones

let nombre = prompt("Ingresa tu nombre");


function contactarAbogado(nombreAbogado) {
    let contacto;
    while (contacto !== "4") {
        contacto = prompt(`¿Cómo contactarte con ${nombreAbogado}? \n1. Whatsapp \n2. Email  \n3. Agenda una llamada \n4. Regresa al menu anterior`);
        switch (contacto) {
            case "1":
                alert("Seleccionaste Whatsapp");
                brake;
            case "2":
                alert("Seleccionaste Email");
                brake;
            case "3":
                alert("Agenda tu llamada acá");
                brake;
            case "4":
                alert("Regresando al menu anterior");
                brake;
            default:
                alert("Opción inválida");
        }
    }
}

function mainMenu() {
    let opcion;
    while (opcion !== "X") {
        opcion = prompt(`
            \n¿Cómo podemos ayudarte? 
            1. Derecho Civil 
            2. Derecho Laboral 
            3. Derecho Intelectual 
            4. Otro 
            5. Presiona X para salir
        `);

        switch (opcion) {
            case "1":
                alert("Hola " + nombre + " El Abogado Marcos Linares será tu asesor especializado");
                contactarAbogado("Marcos Linares");
                break;
            case "2":
                alert("Hola " + nombre + " El Abogado Eduardo Urdaneta será tu asesor especializado");
                contactarAbogado("Eduardo Urdaneta");
                break;
            case "3":
                alert("Hola " + nombre + " La Abogada Natalia Cuomo será tu asesor especializado");
                contactarAbogado("Natalia Cuomo");
                break;
            case "4":
                alert("Hola " + nombre + " Deseamos ayudarte. Pronto nuestros especialistas te contactarán.");
                contactarAbogado("el equipo de especialistas");
                break;
            case "X":
                break; // Cierra el loop
            default:
                alert("Opción inválida");
        } 
    }
}

mainMenu();
*/

/** VERSION PARA SEGUNDA ENTREGA */

let nombre = prompt("Ingresa tu nombre");

// Definiendo los abogados y sus especialidades en un array de objetos

let abogados = [
    { nombre: "Marcos Linares", especialidad: "Civil" },
    { nombre: "Eduardo Urdaneta", especialidad: "Laboral" },
    { nombre: "Natalia Cuomo", especialidad: "Intelectual" },
    { nombre: "Jose Hernandez", especialidad: "Laboral" },
    { nombre: "Luis Gonzalez", especialidad: "Penal" },
    { nombre: "Javiera Jimenez", especialidad: "Migratorio" },
    { nombre: "Jesus Arellano", especialidad: "Civil" },
    { nombre: "Natalia Cuomo", especialidad: "Intelectual" },
    { nombre: "Equipo de Especialistas", especialidad: "Otro" }
];

function contactarAbogado(abogado) {
    let contacto;
    while (contacto !== "4") {
        contacto = prompt(`¿Cómo contactarte con ${abogado.nombre}? \n1. Whatsapp \n2. Email  \n3. Agenda una llamada \n4. Regresa al menu anterior`);
        switch (contacto) {
            case "1":
                alert("Seleccionaste Whatsapp");
                break;
            case "2":
                alert("Seleccionaste Email");
                break;
            case "3":
                alert("Agenda tu llamada acá");
                break;
            case "4":
                alert("Regresando al menu anterior");
                break;
            default:
                alert("Opción inválida");
        }
    }
}

function filtrarPorEspecialidad(especialidad) {
    return abogados.filter(abogado => abogado.especialidad === especialidad);
}

function mainMenu() {
    let opcion;
    while (opcion !== "x") {
        opcion = prompt(`
            \n¿Cómo podemos ayudarte? 
            Civil 
            Laboral 
            Intelectual
            Migratorio
            Penal 
            Otro 
            Presiona "x" para salir
        `);

        switch (opcion) {
            case "Civil":
            case "Laboral":
            case "Intelectual":
            case "Penal":
            case "Migratorio":
            case "Otro":
                let abogadosEspecialidad = filtrarPorEspecialidad(opcion);
                if (abogadosEspecialidad.length > 0) {
                    if (abogadosEspecialidad.length === 1) {
                        alert("Hola " + nombre + " El Abogado " + abogadosEspecialidad[0].nombre + " será tu asesor especializado");
                        contactarAbogado(abogadosEspecialidad[0]);
                    } else {
                        let seleccion = prompt(`Hola ${nombre}, se han encontrado ${abogadosEspecialidad.length} abogados disponibles para esta especialidad. Por favor selecciona con quién deseas agendar:\n${abogadosEspecialidad.map((abogado, index) => `${index + 1}. ${abogado.nombre}`).join("\n")}`);
                        seleccion = parseInt(seleccion);
                        if (!isNaN(seleccion) && seleccion >= 1 && seleccion <= abogadosEspecialidad.length) {
                            alert("Seleccionaste al Abogado " + abogadosEspecialidad[seleccion - 1].nombre + " para atender tu solicitud");
                            contactarAbogado(abogadosEspecialidad[seleccion - 1]);
                        break;
                        } else {
                            alert("Selección inválida.");
                        }
                    }
                } else {
                    alert("Lo sentimos, no hay abogados disponibles para esta especialidad.");
                }
                break;
            case "X":
                break; // Cierra el loop
            default:
                alert("Si tu requerimiento no se encuentra en nuestra lista selecciona Otro");
        } 
    }
}

mainMenu();

