<?php
include 'CreateConnection.php';
$json=null;
$hr_username ="stella_hr";
$hr_password ="stella@123";
$uservalid=0;
//Query to retrieve data from candidate table
$sql = "SELECT pk_hr_credentials as hr_id FROM HR_CREDENTIALS_TABLE where hr_username= '$hr_username' and hr_password= MD5('$hr_password')";

$result = $conn->query($sql);

if ($result->num_rows >0) {
 while($row[] = $result->fetch_assoc()) {
 $tem = $row;
 $json = json_encode($tem);
 $uservalid = 1;
 }
} else {
 echo "No Results Found.";
 $uservalid = 0;
}
 echo $json;
 echo $uservalid;

//
//  $jsonIterator = new RecursiveIteratorIterator(
//     new RecursiveArrayIterator(json_decode($json, TRUE)),
//     RecursiveIteratorIterator::SELF_FIRST);
//
// foreach ($jsonIterator as $key => $val) {
//     if(is_array($val)) {
//         echo "$key:\n";
//     } else {
//         echo "$key => $val\n";
//     }
// }

// $conn->close();
include 'CloseConnection.php';
?>
