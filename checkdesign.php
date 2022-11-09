<?php
print_r("hgcdhcg"); die();
require 'vendor/autoload.php';

$connect = mysqli_connect('localhost','careca_levere','levere@001','careca_levere') or die();

$query = "SELECT * from designed_house;
    $result = $connect->query($query);
    while($row = $result->fetch_assoc()) {
?>



<?php 

}
?>