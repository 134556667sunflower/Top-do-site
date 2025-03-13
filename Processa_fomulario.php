<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $nome = $_POST["nome"];
    $email = $_POST["email"];
    $telefone = $_POST["telefone"];
    $assunto = $_POST["assunto"];
    $mensagem = $_POST["mensagem"];

    $destinatario = "sun456952@gmail.com";
    $assunto_email = "Novo contato: $assunto";
    $corpo_email = "Nome: $nome\nEmail: $email\nTelefone: $telefone\n\nMensagem:\n$mensagem";
    $headers = "From: $email";

    if (mail($destinatario, $assunto_email, $corpo_email, $headers)) {
        echo "Mensagem enviada com sucesso!";
    } else {
        echo "Erro ao enviar a mensagem.";
    }
}
?>