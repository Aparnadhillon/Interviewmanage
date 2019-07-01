<?php
include 'DBConfig.php';
//This php file holds the connection creation part. This will be called on all phps where we are doing DBMS Operations
// Create connection
$conn = new mysqli($HostName, $HostUser, $HostPass, $DatabaseName);
$json=null;
if ($conn->connect_error) {
 die("Connection failed: " . $conn->connect_error);
}
?>
