document.addEventListener("DOMContentLoaded", function () {
    const checkbox = document.getElementById("checkNovo");
    const container = document.getElementById("containerAgendamentos");
    const modelo = document.getElementById("modeloAgendamento");

    checkbox.addEventListener("change", function () {

        if (checkbox.checked) {
            // DUPLICA o bloco de agendamento
            const novo = modelo.cloneNode(true);
            novo.removeAttribute("id"); // evita ID duplicado

            // Limpa os campos do novo agendamento
            novo.querySelectorAll("input").forEach(campo => campo.value = "");

            container.appendChild(novo);

            // desmarca checkbox
            checkbox.checked = false;
        }

    });
});