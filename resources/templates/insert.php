<?php
// Database connection parameters
$servername = "localhost";
$username = "root";
$password = "localhost99!";
$dbname = "wishes";

// Create a connection object
$conn = new mysqli($servername, $username, $password, $dbname);

// Check the connection status
if ($conn->connect_error) {
  die("Connection failed: " . $conn->connect_error);
}

// Get the data from the HTML form
$name = $_POST["name"];
$title = $_POST["title"];
$thewishes = $_POST["thewishes"];

// Prepare an SQL statement to insert the data
$sql = "INSERT INTO mytable (name, title, thewishes) VALUES (?, ?, ?)";

// Create a prepared statement
$stmt = $conn->prepare($sql);

// Bind the parameters to the statement
$stmt->bind_param("sss", $name, $title, $thewishes);

// Execute the statement
if ($stmt->execute()) {
  echo "Data inserted successfully";
} else {
  echo "Error: " . $stmt->error;
}

// Close the statement and the connection
$stmt->close();
$conn->close();
?>
