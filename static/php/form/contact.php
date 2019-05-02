<?php
$recipient_email    = "add.task.17987205.2192608499.6b643e2117329109@todoist.net"; //recepient artur@uniteddesign.ru, epavlov@smartbl.ru
$from_email         = "no-reply@frontend-design.ru"; //from email using site domain.

if(!isset($_SERVER['HTTP_X_REQUESTED_WITH']) AND strtolower($_SERVER['HTTP_X_REQUESTED_WITH']) != 'xmlhttprequest') {
    die('Sorry Request must be Ajax POST'); //exit script
}

if($_POST){
    $name             = filter_var($_POST["task_name"], FILTER_SANITIZE_STRING); //capture sender name
    $date             = filter_var($_POST["task_date"], FILTER_SANITIZE_STRING); //capture sender email
    $comment          = filter_var($_POST["task_comment"], FILTER_SANITIZE_STRING); //capture message
    $type_frontend    = filter_var($_POST["task_type_frontend"], FILTER_SANITIZE_STRING);
    $type_design      = filter_var($_POST["task_type_design"], FILTER_SANITIZE_STRING);
    $type_consult     = filter_var($_POST["task_type_consult"], FILTER_SANITIZE_STRING);
    $type_management  = filter_var($_POST["task_type_management"], FILTER_SANITIZE_STRING);
    $priority         = filter_var($_POST["task_priority"], FILTER_SANITIZE_STRING);
    $subject          = $name.'<date '.$date.'>'; //capture sender subject
    $message          = $comment.' !!'.$priority.' @'.$type_frontend.' @'.$type_design.' @'.$type_consult.' @'.$type_management; //capture message

    //php validation
    if(strlen($name)<2){ // If length is less than 4 it will output JSON error.
        print json_encode(array('type'=>'error', 'text' => 'У задачи должно быть название '));
        exit;
    }

    $headers = "From:".$from_email."\r\n".
    "Reply-To: ".$sender_email. "\n" .
    "Content-Type: text/html; charset=utf-8\n" .
    "X-Mailer: PHP/" . phpversion();
    $body .= "Content-Type: text/html; charset=utf-8\r\n";
    $body .= "Content-Transfer-Encoding: base64\r\n\r\n";
    $body = $message;

    $sentMail = mail($recipient_email, $subject, $body, $headers);
    if($sentMail) //output success or failure messages
    {
        print json_encode(array('type'=>'done', 'text' => 'Ваше сообщение успешно отправлено!<br />Мы обязательно на него ответим в течение суток.'));
        exit;
    }else{
        print json_encode(array('type'=>'error', 'text' => 'Что-то пошло не так. Попробуйте еще раз, возможно произошел сбой в работе сервера.<br />В крайнем случае, можно просто нам позвонить по телефону <a href="tel:88126799505">(812) 679-95-05</a> или напитсать письмо на почту <a href="mailto:info@uniteddesign.ru">info@uniteddesign.ru</a>.'));
        exit;
    }
}
?>
