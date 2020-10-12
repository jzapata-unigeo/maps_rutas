<?php
include_once('conexion.php');
class Google extends Model{

    public function __construct(){
        parent::__construct();
    }


    public function get_lat_lng($value){
        $sql = $this->db->query("SELECT cx, cy FROM sede WHERE id_sede ='$value'");
        $lat = 0;
        $lng = 0;
        foreach ($sql as $key){
            $lat = $key['cy'];
            $lng = $key['cx'];
        }
        $array = array ('lat'=> $lat, 'lng' => $lng);
        return $array;
    }

    public function get_stores(){
        $sql = $this->db->query("select id_sede, nombre_sede from sede ORDER BY nombre_sede"); 
        $option = '';
        foreach ($sql as $key){
            $id = $key['id_sede'];
            $name = $key['nombre_sede'];
            $option .='<option value="' .$id. '">'.$name.' </option>';   
        }
        return $option;
    }
}

if(isset($_POST['value'])){
    $class = new Google;
    $run = $class->get_lat_lng($_POST['value']);
    exit(json_encode($run));
}

