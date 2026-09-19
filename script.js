/* =========================
   ANO DO RODAPÉ
========================= */

const year = document.getElementById("year");

year.textContent = new Date().getFullYear();



/* =========================
   CLICAR NOS AMBIENTES
========================= */

const environmentCards =
    document.querySelectorAll(".environment-card");


environmentCards.forEach(card => {

    card.addEventListener("click", function(event) {

        event.preventDefault();

        const ambiente =
            this.querySelector("h3").textContent;

        alert(
            `Aqui vai entrar a página de ${ambiente}!`
        );

    });

});



/* =========================
   ANIMAÇÃO AO APARECER
========================= */

const sections =
    document.querySelectorAll(
        ".category-card, .environment-card"
    );


const observer = new IntersectionObserver(

    entries => {

        entries.forEach(entry => {

            if (entry.isIntersecting) {

                entry.target.classList.add("show");

            }

        });

    },

    {
        threshold: 0.15
    }

);


sections.forEach(section => {

    observer.observe(section);

});
