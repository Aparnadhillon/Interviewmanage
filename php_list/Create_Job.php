<?php
include 'CreateConnection.php';
$json=null;

$hr_id =1;
$job_name ="UI Developer";
$job_description="3 years experienced developer";

//Query to insert data into Jobs Table
$sql = "INSERT INTO JOBS_TABLE (job_name, job_description, fk_hr_id)
VALUES ('$job_name','$job_description',$hr_id)";

if ($conn->query($sql) === TRUE) {
    $inserted_id = $conn->insert_id;
    echo "New record created successfully. Last inserted ID is: " . $inserted_id;
} else {
    echo "Error: " . $sql . "<br>" . $conn->error;
}

// $conn->close();
include 'CloseConnection.php';
?>
