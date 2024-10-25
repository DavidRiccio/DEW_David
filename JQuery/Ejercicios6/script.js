$(document).ready(function() {
    // Función para agregar tareas
    $("#agregar-tarea").click(function() {
        const new_task = $("#nueva-tarea").val()
        if (new_task != "") {
            $("#lista-tareas").append(getTask(new_task));   
            bindEvents()
        } else {
            alert("Nombre de la misión requerida!")
        }
    });

    function getTask(name) {
        html = `
        <li>
            <p class="tarea-text">${name}</p>
            <div style="display: flex;">
                <button class="edit-button">Edit</button>
                <button class="delete-button">Delete</button>
            </div>
        </li>
        `
        $('#lista-tareas').append(html)        
    }      
        
    function bindEvents() {
        $(".delete-button").click(function() {
            $(this).parents("li").remove();
        });

        $("#lista-tareas").off('click','.edit-button').on('click','.edit-button',(function(){
            let texto =  $(this).closest("li").find('.tarea-text').text()
            let nombre = prompt('Actualizar',texto)
            if (nombre){
                $(this).closest("li").find('.tarea-text').text(nombre)
            }
        }));
    
    
        $('#limpiar-tareas').click(function(){
                $('#lista-tareas').empty()
            })
    }});
