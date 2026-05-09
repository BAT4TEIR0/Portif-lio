// ================= BOTÃO DE BOAS-VINDAS =================

const mensagemBtn = document.getElementById("mensagemBtn");

mensagemBtn.addEventListener("click", () => {
    alert("Bem-vindo ao meu portfólio!");
});

// ================= TEMA CLARO E ESCURO =================

const temaBtn = document.getElementById("temaBtn");

temaBtn.addEventListener("click", () => {

    document.body.classList.toggle("claro");

    if(document.body.classList.contains("claro")) {
        temaBtn.innerHTML = "☀️";
    }
    else {
        temaBtn.innerHTML = "🌙";
    }

});

// ================= VALIDAÇÃO DO FORMULÁRIO =================

const formulario = document.getElementById("formulario");
const resultado = document.getElementById("resultado");

formulario.addEventListener("submit", (event) => {

    // Impede o envio real do formulário
    event.preventDefault();

    // Pegando os valores digitados
    const nome = document.getElementById("nome").value.trim();
    const email = document.getElementById("email").value.trim();
    const mensagem = document.getElementById("mensagem").value.trim();

    // Expressão regular para validar e-mail
    const emailValido = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    // Verifica se algum campo está vazio
    if(nome === "" || email === "" || mensagem === "") {

        resultado.innerHTML = "Preencha todos os campos.";
        resultado.style.color = "red";

        return;
    }

    // Verifica se o e-mail é válido
    if(!emailValido.test(email)) {

        resultado.innerHTML = "Digite um e-mail válido.";
        resultado.style.color = "orange";

        return;
    }

    // Simulação de envio
    resultado.innerHTML = "Mensagem enviada com sucesso!";
    resultado.style.color = "lightgreen";

    // Limpa o formulário
    formulario.reset();

});