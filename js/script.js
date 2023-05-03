document.addEventListener("DOMContentLoaded", function () {
    popularFilmes();
});

function popularFilmes() {
    const filmes = [
        "https://capas-p.imagemfilmes.com.br/164909_000_p.jpg",
        "https://m.media-amazon.com/images/I/91++nYXJ5dL.jpg",
        "https://capas-p.imagemfilmes.com.br/164856_000_p.jpg",
        "https://cinemacao.com/wp-content/uploads/2017/10/thor-ragnarok-poster-560x800.jpg",
        "https://d3alv7ekdacjys.cloudfront.net/Custom/Content/Products/10/99/1099134_alice-no-pais-das-maravilhas-dvd-filme-infantil-ms_m1_637383012807973126.jpg",
        "https://m.media-amazon.com/images/I/91++nYXJ5dL.jpg",
        "https://m.media-amazon.com/images/I/91++nYXJ5dL.jpg",
        "https://m.media-amazon.com/images/I/91++nYXJ5dL.jpg",
        "https://m.media-amazon.com/images/I/91++nYXJ5dL.jpg",
        "https://m.media-amazon.com/images/I/91++nYXJ5dL.jpg",
        "https://m.media-amazon.com/images/I/91++nYXJ5dL.jpg",
    ];

    const listaLinks = document.getElementById("lista-links");

    for (let i = 0; i < filmes.length; i++) {
        const url = filmes[i];
        const liElement = document.createElement("li");
        const imgElement = document.createElement("img");
        imgElement.src = url;
        liElement.appendChild(imgElement);
        liElement.classList.add("filme");
        listaLinks.appendChild(liElement);
    }
}
