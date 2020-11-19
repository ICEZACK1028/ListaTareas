(function(){
    //Variables
    var lista = document.getElementById("lista"),
        tareaInput = document.getElementById("tareaInput"),
        btnAgregar = document.getElementById("btn-agregar");
    //Funciones
    var agregarTarea = function(){
        alert("Agregar tarea");
    };
    var comprobarInput = function(){
        alert("Comprobar input");
    };
    var eliminarTarea = function(){
        alert("Eliminar Tarea");
    };
    //Eventos
    //agregar tarea
    btnAgregar.addEventListener("click", agregarTarea);

    //comprobar input
    tareaInput.addEventListener("click", comprobarInput);

    //borrando elementos de la lista
    for (var i = 0; i < lista.children.length; i++){
        lista.children[i].addEventListener("click", eliminarTarea);
    }
}());