<?php
/* verison 5 */
include_once('class/config.php');
include_once('class/google.php');
$google = new Google;
?>

<!DOCTYPE html>
<html>
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <meta http-equiv="X-UA-Compatible" content="ie=edge">
        <title>Simple Map</title>
        <script
            async src="https://maps.googleapis.com/maps/api/js?key=AIzaSyDJxNjFGz-ydX1Y4Ore2DvAQs4ueLAd9CQ&callback=initMap"></script>
        <link href="ccs/bootstrap.css" rel="stylesheet" type="text/css"/>
        <link href="bootstrap.css" rel="stylesheet" type="text/css"/>

        <script src="js/jquery.js" type="text/javascript"></script>
        <script src="js/functions.js" type="text/javascript"></script>
    </head>

    <body>
       
        <div class="container my-5">
            <div class="btn-group-sm">

                <input type="hidden" id="my_lat" class="txt" readonly>
                <input type="hidden"  placeholder="Longitud" id="my_lng" class="txt" readonly>


                <div class="input-group">
                    <div class="btn btn-sm btn-info">
                        <input type="button" value="Ubicación - Reiniciar" onClick="get_my_location();" class="btn">
                        <img src="image/ubicacion.png" alt=""/>
                    </div>
                    <select class="select px-2" id="ruta" onchange="draw_rute(this.value)">
                        <option value="0">Seleccionar destino</option>
                        <?= $google->get_stores(); ?>
                    </select>
                </div>
                <div>
                    <select id="travel"">
                        <option value="DRIVING">Automovil</option>
                        <option value="WALKING">Caminando</option>
                        <option value="TRANSIT">Trasporte publico</option>
                    </select>
                </div>
               <p id="demo" onclick="draw_mode()">Click me to change my HTML content (innerHTML).</p>
                
            </div>
        </div>
        <div class="container" id="map" style="width: 1200px; height: 600px;">
            <div>
                </script>
                <script async src="https://maps.googleapis.com/maps/api/js?key=AIzaSyDJxNjFGz-ydX1Y4Ore2DvAQs4ueLAd9CQ1&callback=initMap"></script>
                <script>  get_my_location() </script>
            </div>
        </div>
    </body>
</html>
