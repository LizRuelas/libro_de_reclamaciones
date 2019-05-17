var FolioReclamaciones = {
    correlativo: function () {
        $.ajax({
            url: "http://localhost/libro_reclamaciones/controlador/FolioReclamacionesController.php",
            type: "POST",
            data: "accion=correlativo",
            dataType: "json",
            cache: false,
            success: function (obj) {
                if (obj.rst === 1) {
                    $("#correlativo").text(obj.datos);
                } else {
                    alert("Actualizar Página");
                }
            },
            error: function () {
                
            }
        })
    },

    insert: function () {
        var datos = $("#formulario").serialize();
        $.ajax({
            url: "http://localhost/libro_reclamaciones/controlador/FolioReclamacionesController.php",
            type: "POST",
            data: datos,
            dataType: "json",
            cache: false,
            success: function (obj) {
                if (obj.rst === 1) {
                    alert("Registro OK");
                    FolioReclamaciones.correlativo();
                    $("#exampleModalCenter").modal('hide');
                } else {
                    alert("Registro Fallido");
                }
            },
            error: function () {
                
            }
        })
    }
}