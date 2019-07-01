<?php
include 'CreateConnection.php';

//This php file holds the connection closing part. This will be called at the end of all phps where we are doing DBMS Operations

$conn->close();
echo "Connection Closed";

?>
