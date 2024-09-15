<?php
if($_SERVER['REQUEST_METHOD'] == 'POST'){
    $name = $_POST['name'];
    $email = $_POST['email'];
    $mobile = $_POST['mobile'];
    $subject = $_POST['subject'];
    $message = $_POST['message'];

    // Your email
    $to = "vimankithdamitha01@gmail.com";
    $headers = "From: " . $email;

    // Email body
    $body = "Name: $name\nEmail: $email\nMobile: $mobile\nSubject: $subject\nMessage:\n$message";

    if(mail($to, $subject, $body, $headers)){
        echo "Email sent successfully!";
    } else {
        echo "Failed to send email.";
    }
}
?>
