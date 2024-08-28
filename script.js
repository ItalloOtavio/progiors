function sendEmail() {
    let parms = { 
        nome: document.getElementById("nome").value,
        assunto: document.getElementById("assunto").value,
        email: document.getElementById("email").value,
        mensagem: document.getElementById("mensagem").value,     
    };

    emailjs.send("service_44571cp", "template_sqwuoka", parms)
        .then(function(response) {
            alert("Enviado com sucesso!");
            console.log('SUCESSO!', response.status, response.text);
        }, function(erro) {
            alert("Ocorreu um erro ao enviar o email.");
            console.log('FALHA...', erro);
        });
}
