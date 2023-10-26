<?php

if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $name = $_POST['name'];
    $email = $_POST['email'];
    $message = $_POST['message'];

    // Perform server-side validation and processing here

    // For demonstration purposes, simply echoing the received data
    echo "Name: $name\n";
    echo "Email: $email\n";
    echo "Message: $message\n";
} else {
    // Invalid request
    header('HTTP/1.1 400 Bad Request');
    echo 'Invalid request';
}

?>
