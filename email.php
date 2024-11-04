<?php
$subject = 'You Got Message'; // Subject of your email
$to = 'info@example.com';  //Recipient's E-mail
$emailTo = $_REQUEST['email'];

$name = $_REQUEST['name'];
$email = $_REQUEST['email'];
$subject = $_REQUEST['subject'];
$phone = $_REQUEST['phone'];
$msg = $_REQUEST['message'];
$date = $_REQUEST['time'];
$city = $_REQUEST['date'];
$states = $_REQUEST['states'];
$service = $_REQUEST['service'];
$Company = $_REQUEST['Company'];

$email_from = $name.'<'.$email.'>';

$headers = "MIME-Version: 1.1";
$headers .= "Content-type: text/html; charset=iso-8859-1";
$headers .= "From: ".$name.'<'.$email.'>'."\r\n"; // Sender's E-mail
$headers .= "Return-Path:"."From:" . $email;

$message .= 'Name : ' . $name . "\n";
$message .= 'Phone : ' . $phone . "\n";
$message .= 'Message : ' . $msg . "\n";
$message .= 'Email : ' . $email . "\n";
$message .= 'Time : ' . $time . "\n";
$message .= 'Date : ' . $date . "\n";
$message .= 'State : ' . $state . "\n";
$message .= 'Subject : ' . $subject . "\n";
$message .= 'Service : ' . $service . "\n";
$message .= 'Company : ' . $Company . "\n";
$message .= 'Message : ' . $msg;

if (@mail($to, $subject, $message, $email_from))
{
	// Transfer the value 'sent' to ajax function for showing success message.
	echo 'Your Message Has been sent';
}
else
{
	// Transfer the value 'failed' to ajax function for showing error message.
	echo 'failed';
}
?>