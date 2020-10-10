<?php
/* verison 5 */
include_once('class/config.php');
include_once('class/google.php');
$google = new Google;
?>


<!DOCTYPE html>
<html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <meta http-equiv="X-UA-Compatible" content="ie=edge">
        <title>Psicoune Rutas</title>
      
        <link href="css/bootstrap.css" rel="stylesheet" type="text/css"/>

        <script src="js/jquery.js" type="text/javascript"></script>
        <script src="js/functions.js" type="text/javascript"></script>
        <script src="js/bootstrap.js" type="text/javascript"></script>

    </head>
    <body>
<div class="input-group">
  <span class="input-group-addon">@</span>
  <input type="text" class="form-control" placeholder="Username">
</div>

<div class="input-group">
  <input type="text" class="form-control">
  <span class="input-group-addon">.00</span>
</div>

<div class="input-group">
  <span class="input-group-addon">$</span>
  <input type="text" class="form-control">
  <span class="input-group-addon">.00</span>
</div>
    </body>
</html>


<!--git remote add origin https://github.com/BrianMarquez3/Maps_rutas.git
git push -u origin master-->