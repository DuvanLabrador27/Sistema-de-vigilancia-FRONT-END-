$('#admin-tabla').click(function(){
  $("#contenido").load("perfilAdministrador.html");
});

$('#personal').click(function(){
  $("#contenido").load("tabla.html");
});

$('#vigilante').click(function(){
  $("#contenido-2").load("perfilVigilante.html");
});
