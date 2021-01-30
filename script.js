$(document).ready(function(){

    var gatito = $("#gatito");
    
    
    /* Movimientos */
    $("#up").click(function(){

        var marginBottom = parseInt($("#gatito").css("margin-bottom"));

        if (marginBottom == 0){
            $("#gatito").animate({
                'margin-bottom': "80px",
                'margin-top' : "0px"
            });
        }
        else if (marginBottom == 80){
            $("#gatito").animate({
                'margin-bottom': "160px",
                'margin-top' : "0px"
            });
        }
        else if(marginBottom == 160){
            $("#gatito").animate({
                'margin-bottom': "240px",
                'margin-top' : "0px"
            });
        };
    })
    
    $("#left").click(function(){

        var marginRight = parseInt($("#gatito").css("margin-right"));

        if (marginRight == 0){
            $("#gatito").animate({
                'margin-right': "100px",
                'margin-left' : "0px"
            });
        }
        else if (marginRight == 100){
            $("#gatito").animate({
                'margin-right': "200px",
                'margin-left' : "0px"
            });
        }
        else if(marginRight == 200){
            $("#gatito").animate({
                'margin-right': "300px",
                'margin-left' : "0px"
            });
        }
    })

    $("#right").click(function(){

        var marginRight = parseInt($("#gatito").css("margin-left"));

        if (marginRight == 0){
            $("#gatito").animate({
                'margin-left': "100px",
                'margin-right' : "0px"
            });
        }
        else if (marginRight == 100){
            $("#gatito").animate({
                'margin-left': "200px",
                'margin-right' : "0px"
            });
        }
        else if(marginRight == 200){
            $("#gatito").animate({
                'margin-left': "300px",
                'margin-right' : "0px"
            });
        }
    })

    $("#down").click(function(){

        var marginTop = parseInt($("#gatito").css("margin-top"));

        if (marginTop == 0){
            $("#gatito").animate({
                'margin-top': "80px",
                'margin-bottom': "0"
            });
        }
        else if (marginTop == 80){
            $("#gatito").animate({
                'margin-top': "160px",
                'margin-bottom': "0"
            });
        }
        else if(marginTop == 160){
            $("#gatito").animate({
                'margin-Top': "240px",
                'margin-bottom': "0"
            });
        };
    })

    /* Control de tamaño */

    $("#boton-ampliar").click(function(){

        $("#gatito").height(750);
        $("#gatito").css("width", "auto");

    });

    $("#boton-reducir").click(function(){

        $("#gatito").height(300);
        $("#gatito").css("width", "auto");

    })

    $("#boton-normal").click(function(){

        $("#gatito").height(500);
        $("#gatito").css("with", "auto");

    })




    /* Botones visibilidad */
    $("#boton-visible").click(function(){

        $("#gatito").fadeIn()

    })
    $("#boton-invisible").click(function(){

        $("#gatito").fadeOut()

    })













})

