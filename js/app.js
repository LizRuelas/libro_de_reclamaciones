	

$('#enviar').on('click', function (e) {
	
	var name = $("#name").val();
	var dni = $("#dni").val();
	var domicilio = $("#domicilio").val();
	var phone = $("#phone").val();
	var email = $("#email").val();
	var comercio =  $("#comercio").val();
	var ruc =  $("#ruc").val();

	var name_mp = $("#name_mp").val();

	var monto_reclamado = $("#monto_reclamado").val();
	var description = $("#description").val();
	
	var detalle = $("#exampleFormControlTextarea1").val();
	var pedido = $("#exampleFormControlTextarea2").val();

	var producto = $('#exampleRadios1');
	var servicio = $('#exampleRadios2');

	var reclamo = $('#exampleRadios3');
	var queja = $('#exampleRadios4');


	var bien;
	
	if (producto.is(':checked')){
		bien = producto.val();
	}else if (servicio.is(':checked')) {
		bien = servicio.val();
	}

	if (reclamo.is(':checked')){
		var reclamo_queja = reclamo.val();
	}else if (queja.is(':checked')) {
		reclamo_queja = queja.val();
	}

	if (name == null || name.length == 0  ){
		alert("El campo Nombres y apellidos está vacio" );
	} 

	else if (dni == null || dni.length == 0  ){
		alert("El campo DNI/CE está vacio" );
	} 

	else if (domicilio == null || domicilio.length == 0  ){
		alert("El campo Domicilio está vacio" );
	} 

	else if (phone == null || phone.length == 0  ){
		alert("El campo Teléfono está vacio" );
	}

	else if (email == null || email.length == 0 ||  email.indexOf('@', 0) == -1 || email.indexOf('.', 0) == -1 ){
		alert("El campo Email está vacio o es invalido" );
		$('#email').attr("style" , "border-color:red");

	}

	else if (comercio == null || comercio == 0  ){
		alert("El campo Nombre de comercio está vacio" );
	}

	else if (ruc == null || ruc == 0  ){
		alert("El campo Número de RUC está vacio" );
	}

	else if (monto_reclamado == null || monto_reclamado.length == 0  ){
		alert("El campo Monto reclamado está vacio" );
	}

	else if (description == null || description.length == 0  ){
		alert("El campo Descripción está vacio" );
	}

	else if (detalle == null || detalle.length == 0  ){
		alert("El campo Detalle está vacio" );
	}

	else if (pedido == null || pedido.length == 0  ){
		alert("El campo Pedido está vacio" );
	} 
	else {
		$('#email').attr("style" , "border-color: #CED4DA");
		$('#enviar').attr("data-target", "#exampleModalCenter")
		console.log("Datos completos");
		$('#dato_name').text(name);
		$('#dato_dni').text(dni);
		$('#dato_domicilio').text(domicilio);
		$('#dato_phone').text(phone);
		$('#dato_email').text(email);
		$('#dato_comercio').text(comercio);
		$('#dato_ruc').text(ruc);
		$('#dato_name_mp').text(name_mp);
		$('#dato_monto_reclamado').text(monto_reclamado);
		$('#dato_description').text(description);
		$('#dato_detalle').text(detalle);
		$('#dato_pedido').text(pedido);

		$('#dato_bien').html(bien);
		$('#dato_reclamo_queja').text(reclamo_queja);
	}

	e.preventDefault();
  
});


$('#aceptar').on('click', function(e){
	alert("Datos enviados")
	window.location.href = "https://www.culqi.com/"
});
