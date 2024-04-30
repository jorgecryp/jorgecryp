document.addEventListener("DOMContentLoaded", function () {
    var buscarButton = document.querySelector(".bu");

    buscarButton.addEventListener("click", function (event) {
        event.preventDefault();

        var livro = document.getElementById("livro").value;
        var versiculo = document.getElementById("versiculo").value;
        var capitulo = document.getElementById("capitulo").value;

        if (livro && versiculo && capitulo) {
            // Redirecionamento para a segunda página com os parâmetros da busca
            window.location.href = `pagina2.html?livro=${livro}&versiculo=${versiculo}&capitulo=${capitulo}`;
        } else {
            alert("Por favor, preencha todos os campos.");
        }
    });
});
