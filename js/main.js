(function(){
    //Variables
    var lista = document.getElementById("lista"),
        tareaInput = document.getElementById("tareaInput"),
        btnAgregar = document.getElementById("btn-agregar");
    //Funciones
    var agregarTarea = function(){
        var tarea = tareaInput.value,
            nuevaTarea = document.createElement("li"),
            enlace = document.createElement("a"),
            contenido = document.createTextNode(tarea);

        if (tarea === ""){
            tareaInput.setAttribute("placeholder", "Que agregues una tarea dije, pinche vato pndejo");
            tareaInput.className = "error";
            return false; //si no hay nada en el input AgregarTarea entonces retornará falso y ya no se ejecutará esta función
        }

        //agregamos el contenido al enlace (etiqueta <a>)
        enlace.appendChild(contenido);
        //le establecemos un atributo href con "#", esto nos sirve para que el elemento sirva con el evento "click"
        enlace.setAttribute("href", "#");
        //le agreamos el elemento <a> a nuestro elemento <li>
        nuevaTarea.appendChild(enlace);
        //finalmente le agregamos nuestro elemento <li> a nuestra lista <ul>
        lista.appendChild(nuevaTarea);

        tareaInput.value="";

        //para poder eliminar una tarea nueva, tenemos que volver a correr el ciclo for
        for (let i = 0; i < lista.children.length; i++) {
            lista.children[i].addEventListener("click", function(){
                this.parentNode.removeChild(this);
            });  
        }
    };
    var comprobarInput = function(){
        tareaInput.className= "";
        tareaInput.setAttribute("placeholder", "Agrega una tarea");
    };
    var eliminarTarea = function(){
        this.parentNode.removeChild(this);
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