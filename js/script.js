document.addEventListener('DOMContentLoaded', () => {
  console.log('Buscando todos os filmes'); // Adicione esta linha
  fetch('http://localhost:3000/api/filmes/')
    .then(response => response.json())
    .then(filmes => {
      console.log('Filmes recebidos:', filmes); // Adicione esta linha
      const listaLinks = document.getElementById('lista-links');
      filmes.forEach(filme => {
        const listItem = document.createElement('li');
        listItem.innerHTML = `<a href="filme.html?id=${filme.id}">${filme.nome}</a>`;
        listaLinks.appendChild(listItem);
      });
    });

  const urlParams = new URLSearchParams(window.location.search);
  const filmeId = urlParams.get('id');

  if (filmeId) {
    console.log(`Buscando filme com id ${filmeId}`); // Adicione esta linha
    fetch(`http://localhost:3000/api/filmes/${filmeId}`)
      .then(response => response.json())
      .then(filme => {
        console.log('Filme recebido:', filme); // Adicione esta linha
        document.querySelector('.tituloFilme').textContent = filme.nome;
        document.querySelector('.posterFilme').src = filme.capa_url;
        document.querySelector('.filmeExecucao').src = filme.link_reproducao;
        document.querySelector('.descricaoFilme').innerHTML = `<b>Descrição: </b>${filme.descricao}`;
      })
      .catch(error => {
        console.error('Erro ao buscar detalhes do filme:', error);
      });
  }
});
