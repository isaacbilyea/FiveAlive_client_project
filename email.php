<?php

header('Content-Type: application/json');


// Receive data directly from $_POST, not from a non-existent $data variable
$name    = trim(htmlspecialchars($_POST['name'] ?? '', ENT_QUOTES, 'UTF-8'));
$email   = filter_var($_POST['email'] ?? '', FILTER_VALIDATE_EMAIL);
$subject = trim(htmlspecialchars($_POST['subject'] ?? '', ENT_QUOTES, 'UTF-8'));
$message = trim(htmlspecialchars($_POST['message'] ?? '', ENT_QUOTES, 'UTF-8'));

$errors = [];

if (!$name) {
    $errors['name'] = 'Name is required.';
}

if (!$email) {
    $errors['email'] = 'Valid email is required.';
}

if (!$subject) {
    $errors['subject'] = 'Subject is required.';
}

if (!$message) {
    $errors['message'] = 'Message is required.';
}

if (!empty($errors)) {
    echo json_encode(['success' => false, 'errors' => $errors]);
    exit;
}

$to      = 'srishticanada@gmail.com';
$subject = "New Form Submission - {$subject}";
$body    = "Name: $name\nEmail: $email\nMessage: $message";
$headers = "From: $email\r\nReply-To: $email\r\nContent-Type: text/plain; charset=UTF-8";

// $mailSent = mail($to, $subject, $body, $headers);

$mailSent = true;

if ($mailSent) {
    echo json_encode(['success' => true, 'message' => 'Form submitted successfully!']);
} else {
    echo json_encode(['success' => false, 'message' => 'Failed to send email. Please try again later.']);
}
