const tooltipTriggerList = document.querySelectorAll('[data-bs-toggle="tooltip"]')
const tooltipList = [...tooltipTriggerList].map(tooltipTriggerEl => new bootstrap.Tooltip(tooltipTriggerEl));

//toogle Outras Publicações
document.addEventListener('DOMContentLoaded', function() {
    var sectionTitles = document.querySelectorAll('.section-title');

    sectionTitles.forEach(function(sectionTitle) {
      var h5 = sectionTitle.querySelector('h5');
      var ul = sectionTitle.querySelector('ul');

      h5.addEventListener('click', function() {
        ul.classList.toggle('hidden');
      });
    });
  
  
  
});




  
//Artigos publicos

  fetch('http://localhost:1337/api/posts')
  .then(response => response.json())
  .then(data => {
    const posts = data.data;

    // Iterate over each post and insert into the corresponding div
    posts.forEach(post => {
      const year = new Date(post.attributes.date).getFullYear();
      const postContainer = document.querySelector(`#post-container-${year}`);

      if (postContainer) {
        const card = document.createElement('div');
        card.classList.add('col', 'card-artigo');

        card.innerHTML = `
          <div class="card border-0">
            <div class="card-body">
              <p class="card-text">${post.attributes.date}</p>
              <h5 class="card-title">${post.attributes.title}</h5>
              <p class="card-text">${post.attributes.description}</p>
              <a href="${post.attributes.link}" class="card-link" target="_blank">Ler Artigo</a>
              <a href="${post.attributes.pdfLink}" class="card-link" target="_blank">PDF</a>
            </div>
          </div>
        `;

        // Prepend the card to the container
        postContainer.insertBefore(card, postContainer.firstChild);
      } else {
        console.error(`Container not found for year: ${year}`);
      }
    });
  })
  .catch(error => console.error('Error fetching data:', error));







// fecth from Livros  
fetch('http://localhost:1337/api/post-outros-livros')
  .then(response => response.json())
  .then(data => {
    // Check if data has the 'data' key and if it is an array
    const livrosArray = data && data.data && Array.isArray(data.data) ? data.data : [];

    const livrosList = document.getElementById('livros-list');

    livrosArray.forEach(livro => {
      const listItem = document.createElement('li');
      listItem.classList.add('pb-3');

      // Extracting the title from the array structure
      const title = livro.attributes.title && livro.attributes.title[0] && livro.attributes.title[0].children[0].text;

      listItem.innerHTML = `
        <p class="card-text"> &#8594;
          ${title}
          <br>
          <a href="${livro.attributes.pdfLink}" class="card-link" target="_blank">[PDF]</a>
        </p>
      `;

      // Insert the new listItem before the first child of livrosList
      livrosList.insertBefore(listItem, livrosList.firstChild);
    });
  })
  .catch(error => console.error('Error fetching Livros data:', error));



// fetch from capitulos de livros

fetch('http://localhost:1337/api/post-outras-capitulos')
  .then(response => response.json())
  .then(data => {
    // Check if data has the 'data' key and if it is an array
    const capitulosArray = data && data.data && Array.isArray(data.data) ? data.data : [];

    const capitulosList = document.getElementById('capitulos-list');

    capitulosArray.forEach(capitulo => {
      const listItem = document.createElement('li');
      listItem.classList.add('pb-3');

      // Extracting the title from the array structure
      const title = capitulo.attributes.title && capitulo.attributes.title[0] && capitulo.attributes.title[0].children[0].text;

      listItem.innerHTML = `
        <p class="card-text"> &#8594;
          ${title}
          <br>
          <a href="${capitulo.attributes.pdfLink}" class="card-link" target="_blank">[PDF]</a>
        </p>
      `;

      // Insert the new listItem before the first child of capitulosList
      capitulosList.insertBefore(listItem, capitulosList.firstChild);
    });
  })
  .catch(error => console.error('Error fetching Capitulos data:', error));

// fetch from publicações cientificas
fetch('http://localhost:1337/api/post-outras-art-cientificos')
  .then(response => response.json())
  .then(data => {
    // Check if data has the 'data' key and if it is an array
    const cientificosArray = data && data.data && Array.isArray(data.data) ? data.data : [];

    const cientificosList = document.getElementById('cientifico-list');

    cientificosArray.forEach(cientifico => {
      const listItem = document.createElement('li');
      listItem.classList.add('pb-3');

      // Extracting the title from the array structure
      const title = cientifico.attributes.title && cientifico.attributes.title[0] && cientifico.attributes.title[0].children[0].text;

      listItem.innerHTML = `
        <p class="card-text"> &#8594;
          ${title}
          <br>
          <a href="${cientifico.attributes.pdfLink}" class="card-link" target="_blank">[PDF]</a>
        </p>
      `;

      // Insert the new listItem before the first child of cientificosList
      cientificosList.insertBefore(listItem, cientificosList.firstChild);
    });
  })
  .catch(error => console.error('Error fetching Cientificos data:', error));


// fetch atifos noutros media
fetch('http://localhost:1337/api/post-outras-medias')
.then(response => response.json())
.then(data => {
  // Check if data has the 'data' key and if it is an array
  const outrosMediasArray = data && data.data && Array.isArray(data.data) ? data.data : [];

  const outrosMediasList = document.getElementById('outrosMedias-list');

  outrosMediasArray.forEach(outrosMedia => {
    const listItem = document.createElement('li');
    listItem.classList.add('pb-3');

    // Extracting the title from the array structure
    const title = outrosMedia.attributes.title && outrosMedia.attributes.title[0] && outrosMedia.attributes.title[0].children[0].text;

    listItem.innerHTML = `
      <p class="card-text"> &#8594;
        ${title}
        <br>
        <a href="${outrosMedia.attributes.pdfLink}" class="card-link" target="_blank">[PDF]</a>
      </p>
    `;

    // Insert the new listItem before the first child of outrosMediasList
    outrosMediasList.insertBefore(listItem, outrosMediasList.firstChild);
  });
})
.catch(error => console.error('Error fetching Outros Medias data:', error));


// fetch relatorios
fetch('http://localhost:1337/api/post-outras-relatorios')
  .then(response => response.json())
  .then(data => {
    // Check if data has the 'data' key and if it is an array
    const relatoriosArray = data && data.data && Array.isArray(data.data) ? data.data : [];

    const relatoriosList = document.getElementById('relatorio-list');

    relatoriosArray.forEach(relatorio => {
      const listItem = document.createElement('li');
      listItem.classList.add('pb-3');

      // Extracting the title from the array structure
      const title = relatorio.attributes.title && relatorio.attributes.title[0] && relatorio.attributes.title[0].children[0].text;

      listItem.innerHTML = `
        <p class="card-text"> &#8594;
          ${title}
          <br>
          <a href="${relatorio.attributes.pdfLink}" class="card-link" target="_blank">[PDF]</a>
        </p>
      `;

      // Insert the new listItem before the first child of relatoriosList
      relatoriosList.insertBefore(listItem, relatoriosList.firstChild);
    });
  })
  .catch(error => console.error('Error fetching Relatorios data:', error));


//mfetch entrevistas 
fetch('http://localhost:1337/api/post-entrevistas')
  .then(response => response.json())
  .then(data => {
    // Check if data has the 'data' key and if it is an array
    const entrevistasArray = data && data.data && Array.isArray(data.data) ? data.data : [];

    const entrevistasSection = document.querySelector('.entrevista');

    entrevistasArray.forEach(entrevista => {
      const colDiv = document.createElement('div');
      colDiv.classList.add('col', 'card-artigo');

      const cardDiv = document.createElement('div');
      cardDiv.classList.add('card', 'border-0');

      const cardBodyDiv = document.createElement('div');
      cardBodyDiv.classList.add('card-body');

      // Extracting the date and title from the array structure
      const createdAt = new Date(entrevista.attributes.createdAt);
      const formattedDate = `${createdAt.getDate()}.${createdAt.getMonth() + 1}.${createdAt.getFullYear()}`;

      const title = entrevista.attributes.title;

      cardBodyDiv.innerHTML = `
        <p class="card-text">${formattedDate}</p>
        <h5 class="card-title">
          ${title}
          <a href="${entrevista.attributes.link}" id="interview-link" target="_blank">[LINK]</a>
        </h5>
      `;

      // Append cardBodyDiv to cardDiv
      cardDiv.appendChild(cardBodyDiv);

      // Append cardDiv to colDiv
      colDiv.appendChild(cardDiv);

      // Prepend colDiv to entrevistasSection
      entrevistasSection.prepend(colDiv);
    });
  })
  .catch(error => console.error('Error fetching Entrevistas data:', error));


// fetch tribuna nos medias
fetch('http://localhost:1337/api/post-tribuna-medias')
  .then(response => response.json())
  .then(data => {
    // Check if data has the 'data' key and if it is an array
    const tribunaMediasArray = data && data.data && Array.isArray(data.data) ? data.data : [];

    const tribunaMediaDiv = document.getElementById('tribunaMedia');

    tribunaMediasArray.forEach(tribunaMedia => {
      const pElement = document.createElement('p');
      pElement.classList.add('fw-bold');

      // Extracting the date and title from the array structure
      const createdAt = new Date(tribunaMedia.attributes.createdAt);
      const formattedDate = `${createdAt.getDate()}.${createdAt.getMonth() + 1}.${createdAt.getFullYear()}`;

      const title = tribunaMedia.attributes.title;
      const link = tribunaMedia.attributes.link;

      pElement.innerHTML = `
        ${title} | <a href="${link}" target="_blank" id="article-link">[LINK]</a>
      `;

      // Prepend pElement to tribunaMediaDiv
      tribunaMediaDiv.insertAdjacentElement('afterbegin', pElement);
    });
  })
  .catch(error => console.error('Error fetching Tribuna Medias data:', error));





