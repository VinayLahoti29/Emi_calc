<?php
// Database connection parameters
$servername = "localhost";
$username = "postgres";
$password = "2909";
$database = "test 1";

// Create connection
$conn = new mysqli($servername, $username, $password, $database);

// Check connection
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

// Get form data
$name = $_POST['name'];
$emi_amt = $_POST['emi_amt'];
$yearstopay = $_POST['yearstopay'];
$totalloan = $_POST['totalloan'];

// Insert data into database
$sql = "INSERT INTO emi_details (name, emi_amt, yearstopay, totalloan)
        VALUES ('$name', '$emi_amount', '$yearstopay', '$totalloan')";

if ($conn->query($sql) === TRUE) {
    echo "New record created successfully";
} else {
    echo "Error: " . $sql . "<br>" . $conn->error;
}

$conn->close();
?>
