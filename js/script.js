document.addEventListener("DOMContentLoaded", function () {
    popularFilmes();
});

function popularFilmes() {
    const filmes = [
        ["Filme 1", "https://capas-p.imagemfilmes.com.br/164909_000_p.jpg", "https://www.google.com"],
        ["Filme 2", "https://m.media-amazon.com/images/I/91++nYXJ5dL.jpg", "https://www.google.com"],
        ["Filme 3", "https://capas-p.imagemfilmes.com.br/164856_000_p.jpg", "https://www.google.com"],
        ["Filme 4", "https://cinemacao.com/wp-content/uploads/2017/10/thor-ragnarok-poster-560x800.jpg", "https://www.google.com"],
        ["Filme 5", "https://d3alv7ekdacjys.cloudfront.net/Custom/Content/Products/10/99/1099134_alice-no-pais-das-maravilhas-dvd-filme-infantil-ms_m1_637383012807973126.jpg", "https://www.google.com"],
        ["Filme 6", "https://m.media-amazon.com/images/I/91++nYXJ5dL.jpg", "https://www.google.com"],
        ["Filme 7", "https://m.media-amazon.com/images/I/91++nYXJ5dL.jpg", "https://www.google.com"],
        ["Filme 8", "https://m.media-amazon.com/images/I/91++nYXJ5dL.jpg", "https://www.google.com"],
        ["Filme 9", "https://m.media-amazon.com/images/I/91++nYXJ5dL.jpg", "https://www.google.com"],
        ["Filme 10", "https://m.media-amazon.com/images/I/91++nYXJ5dL.jpg", "https://www.google.com"],
        ["Filme 11", "https://m.media-amazon.com/images/I/91++nYXJ5dL.jpg", "https://www.google.com"]
      ];

    const listaLinks = document.getElementById("lista-links");

    for (let i = 0; i < filmes.length; i++) {
        const url = filmes[i];
        const aElement = document.createElement("a");
        const imgElement = document.createElement("img");
        const pElement = document.createElement("p");
        imgElement.src = url[1];
        imgElement.alt = url[0];
        aElement.href = url[2];
        pElement.innerHTML = url[0];
        aElement.appendChild(imgElement);
        aElement.classList.add("filme");
        aElement.appendChild(pElement);
        listaLinks.appendChild(aElement);
    }
}
