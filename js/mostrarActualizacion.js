$(document).ready(function(){
    $('#admin-tabla').click(function(){
       $("#contenido").load("perfilAdministrador.html");
                                 });

    $('#personal').click(function(){
       $("#contenido").load("tabla.html");
                                 });

                            });