<?php
$lista =[[
    'name'=>'mario',
    'cognome'=>'fabio'
],
[
    'name'=>'mario',
    'cognome'=>'fabio'
],];

    header('Content-Type: application/json');

    $jsonString=json_encode($lista);
    echo $jsonString;