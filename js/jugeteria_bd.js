$(function()
{

	$("#guardar").click(function()
	{
		console.log("Entro al boton guardar");
	var nombre = $("#nombre").val();
	var telefono = $("#telefono").val();
	var correo = $("#correo").val();
	var comentarios = $("#comentarios").val();

	var data = "nombre="+ nombre 
				+ "&correo="+ correo 
				+"&telefono="+ telefono 
				+ "&comentarios="+ comentarios;


	// Enviar datos a través de AJAX
        $.ajax({
            type: "POST",
            url: "php/conexion_jugeteria.php",
            data: data,
            success: function() {
                jAlert("Exitosamento al hacer el registro!!!");
                $("#nombre").val("");
                $("#telefono").val("");
                $("#correo").val("");
                $("#comentarios").val("");
            },
            error: function() {
                jAlert("Error al guardar");
            }
        });

        // Para evitar recargar la página
        return false;

	});




});

