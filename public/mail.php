<?php


// несколько получателей
$to = 'welcome@ademglass.ru';

// тема письма
$subject = 'Mail from form';

// текст письма
$message = 'Пользователь: ' . $_POST['name'] . '<br />'
    . 'Нужны двери:' . $_POST['doors'] . '<br />'
    . 'Размер:' . $_POST['size'] . '<br />'
    . 'Вы можете связаться с ним по номеру телефона: <a href="tel:' . $_POST['phone'] . '">' . $_POST['phone'] . '</a>';


// Для отправки HTML-письма должен быть установлен заголовок Content-type
$headers = 'MIME-Version: 1.0' . "\r\n";
$headers .= 'Content-type: text/html; charset=iso-8859-1' . "\r\n";

// Отправляем
mail($to, $subject, $message, $headers);