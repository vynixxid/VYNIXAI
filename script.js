// Data untuk Trending Films (bisa berbeda dari Featured Films)
const trendingFilms = [
  {
    title: "Quantum Echo",
    description: "Petualangan AI di dunia kuantum.",
    thumbnail: "https://via.placeholder.com/320x180.png?text=Quantum+Echo"
  },
  {
    title: "Digital Pulse",
    description: "Thriller tentang AI yang mengendalikan kota.",
    thumbnail: "https://via.placeholder.com/320x180.png?text=Digital+Pulse"
  },
  {
    title: "Eternal Code",
    description: "Drama AI tentang keabadian digital.",
    thumbnail: "https://via.placeholder.com/320x180.png?text=Eternal+Code"
  }
];

// Data untuk Featured Films
const films = [
  {
    title: "AI Genesis",
    description: "Sebuah film AI tentang awal mula kesadaran mesin.",
    thumbnail: "https://via.placeholder.com/320x180.png?text=AI+Genesis",
    genre: "AI Technology"
  },
  {
    title: "Neon Mind",
    description: "Sebuah film AI bergenre thriller futuristik.",
    thumbnail: "https://via.placeholder.com/320x180.png?text=Neon+Mind",
    genre: "Thriller"
  },
  {
    title: "Synthetic Heart",
    description: "Drama emosional antara manusia dan AI.",
    thumbnail: "https://via.placeholder.com/320x180.png?text=Synthetic+Heart",
    genre: "Romance"
  },
  {
    title: "Cyber Dreams",
    description: "Petualangan futuristik di dunia AI dan cybernetics.",
    thumbnail: "https://via.placeholder.com/320x180.png?text=Cyber+Dreams",
    genre: "Fantasy"
  }
];

// Populate Trending Films
const trendingCarousel = document.getElementById("trendingCarousel");
trendingFilms.forEach(film => {
  const card = document.createElement("div");
  card.className = "trending-card";
  card.tabIndex = 0;
  card.innerHTML = `
    <img src="${film.thumbnail}" alt="${film.title}" />
    <h3>${film.title}</h3>
    <p>${film.description}</p>
  `;
  card.addEventListener('click', () => {
    alert(`You clicked ${film.title}!`);
    // Logika untuk detail film
  });
  trendingCarousel.appendChild(card);
});

// Populate Featured Films
const filmGrid = document.getElementById("filmGrid");
films.forEach(film => {
  const card = document.createElement("div");
  card.className = "film-card";
  card.tabIndex = 0;
  card.innerHTML = `
    <img src="${film.thumbnail}" alt="${film.title}" />
    <h3>${film.title}</h3>
    <p>${film.description}</p>
  `;
  card.addEventListener('click', () => {
    alert(`You clicked ${film.title}!`);
    // Logika untuk detail film
  });
  filmGrid.appendChild(card);
});

// Genre Filter
const genreButtons = document.querySelectorAll('.genre-btn');
genreButtons.forEach(button => {
  button.addEventListener('click', () => {
    const selectedGenre = button.getAttribute('data-genre');
    alert(`Filtering films by ${selectedGenre}`);
    // Logika filter: sembunyikan semua film, lalu tampilkan yang sesuai genre
    filmGrid.innerHTML = ''; // Kosongkan grid
    const filteredFilms = films.filter(film => film.genre === selectedGenre);
    filteredFilms.forEach(film => {
      const card = document.createElement("div");
      card.className = "film-card";
      card.tabIndex = 0;
      card.innerHTML = `
        <img src="${film.thumbnail}" alt="${film.title}" />
        <h3>${film.title}</h3>
        <p>${film.description}</p>
      `;
      card.addEventListener('click', () => {
        alert(`You clicked ${film.title}!`);
      });
      filmGrid.appendChild(card);
    });
  });
});
