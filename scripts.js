// Arda Hoke
// 2025-04-12
// Steam Games Catalog
// This is a catalog of some Steam games with filtering and interactive features

// Game data
const gamesData = {
  "578080": {
    "name": "PUBG: BATTLEGROUNDS",
    "release_date": "Dec 21, 2017",
    "price": 0.00,
    "header_image": "https://cdn.akamai.steamstatic.com/steam/apps/578080/header.jpg",
    "genres": ["Action", "Adventure", "Free to Play", "Massively Multiplayer"],
    "tags": ["Survival", "Shooter", "Battle Royale", "FPS"]
  },
  "271590": {
    "name": "Grand Theft Auto V",
    "release_date": "Apr 13, 2015",
    "price": 39.99,
    "header_image": "https://cdn.akamai.steamstatic.com/steam/apps/271590/header.jpg",
    "genres": ["Action", "Adventure"],
    "tags": ["Open World", "Action", "Multiplayer", "Crime"]
  },
  "1091500": {
    "name": "Cyberpunk 2077",
    "release_date": "Dec 9, 2020",
    "price": 59.99,
    "header_image": "https://cdn.akamai.steamstatic.com/steam/apps/1091500/header.jpg",
    "genres": ["Action", "Adventure", "RPG"],
    "tags": ["Cyberpunk", "Open World", "RPG", "Sci-fi"]
  },
  "570": {
    "name": "Dota 2",
    "release_date": "Jul 9, 2013",
    "price": 0.00,
    "header_image": "https://cdn.akamai.steamstatic.com/steam/apps/570/header.jpg",
    "genres": ["Action", "Free to Play", "Strategy"],
    "tags": ["MOBA", "Strategy", "Multiplayer", "Team-Based"]
  },
  "945360": {
    "name": "Among Us",
    "release_date": "Nov 16, 2018",
    "price": 4.99,
    "header_image": "https://cdn.akamai.steamstatic.com/steam/apps/945360/header.jpg",
    "genres": ["Casual", "Action"],
    "tags": ["Multiplayer", "Social Deduction", "Space", "Co-op"]
  },
  "730": {
    "name": "Counter-Strike 2",
    "release_date": "Aug 21, 2012",
    "price": 0.00,
    "header_image": "https://cdn.akamai.steamstatic.com/steam/apps/730/header.jpg",
    "genres": ["Action", "Free to Play"],
    "tags": ["FPS", "Shooter", "Multiplayer", "Competitive"]
  },
  "252490": {
    "name": "Rust",
    "release_date": "Feb 8, 2018",
    "price": 39.99,
    "header_image": "https://cdn.akamai.steamstatic.com/steam/apps/252490/header.jpg",
    "genres": ["Action", "Adventure", "Indie", "Massively Multiplayer", "RPG"],
    "tags": ["Survival", "Crafting", "Multiplayer", "Open World"]
  },
  "230410": {
    "name": "Warframe",
    "release_date": "Mar 25, 2013",
    "price": 0.00,
    "header_image": "https://cdn.akamai.steamstatic.com/steam/apps/230410/header.jpg",
    "genres": ["Action", "Free to Play", "RPG"],
    "tags": ["Free to Play", "Looter Shooter", "Third-Person Shooter", "Co-op"]
  },
  "397540": {
    "name": "Borderlands 3",
    "release_date": "Sep 13, 2019",
    "price": 59.99,
    "header_image": "https://cdn.akamai.steamstatic.com/steam/apps/397540/header.jpg",
    "genres": ["Action", "Adventure", "RPG"],
    "tags": ["Looter Shooter", "FPS", "Action RPG", "Co-op"]
  },
  "292030": {
    "name": "The Witcher 3: Wild Hunt",
    "release_date": "May 18, 2015",
    "price": 39.99,
    "header_image": "https://cdn.akamai.steamstatic.com/steam/apps/292030/header.jpg",
    "genres": ["RPG"],
    "tags": ["Open World", "RPG", "Story Rich", "Atmospheric"]
  },
  "1174180": {
    "name": "Red Dead Redemption 2",
    "release_date": "Dec 5, 2019",
    "price": 59.99,
    "header_image": "https://cdn.akamai.steamstatic.com/steam/apps/1174180/header.jpg",
    "genres": ["Action", "Adventure"],
    "tags": ["Open World", "Adventure", "Story Rich", "Western"]
  },
  "1811260": {
    "name": "EA SPORTS FC 23",
    "release_date": "Sep 29, 2023",
    "price": 69.99,
    "header_image": "https://cdn.akamai.steamstatic.com/steam/apps/1811260/header.jpg",
    "genres": ["Simulation", "Sports"],
    "tags": ["Soccer", "Sports", "Football", "Simulation"]
  },
  "779340": {
    "name": "Total War: THREE KINGDOMS",
    "release_date": "May 23, 2019",
    "price": 59.99,
    "header_image": "https://cdn.akamai.steamstatic.com/steam/apps/779340/header.jpg",
    "genres": ["Action", "Strategy"],
    "tags": ["Strategy", "Historical", "RTS", "Character Customization"]
  },
  "238960": {
    "name": "Path of Exile",
    "release_date": "Oct 23, 2013",
    "price": 0.00,
    "header_image": "https://cdn.akamai.steamstatic.com/steam/apps/238960/header.jpg",
    "genres": ["Action", "Free to Play", "RPG"],
    "tags": ["Action RPG", "Free to Play", "Hack and Slash", "Multiplayer"]
  },
  "240": {
    "name": "Counter-Strike: Source",
    "release_date": "Nov 1, 2004",
    "price": 9.99,
    "header_image": "https://cdn.akamai.steamstatic.com/steam/apps/240/header.jpg",
    "genres": ["Action"],
    "tags": ["FPS", "Action", "Shooter", "Multiplayer"]
  },
  "1172470": {
    "name": "Apex Legends",
    "release_date": "Nov 4, 2020",
    "price": 0.00,
    "header_image": "https://cdn.akamai.steamstatic.com/steam/apps/1172470/header.jpg",
    "genres": ["Action", "Adventure", "Free to Play"],
    "tags": ["Free to Play", "Battle Royale", "First-Person", "Shooter"]
  },
  "359550": {
    "name": "Tom Clancy's Rainbow Six Siege",
    "release_date": "Dec 1, 2015",
    "price": 19.99,
    "header_image": "https://cdn.akamai.steamstatic.com/steam/apps/359550/header.jpg",
    "genres": ["Action"],
    "tags": ["FPS", "Tactical", "Shooter", "Team-Based"]
  },
  "361420": {
    "name": "ASTRONEER",
    "release_date": "Feb 6, 2019",
    "price": 29.99,
    "header_image": "https://cdn.akamai.steamstatic.com/steam/apps/361420/header.jpg",
    "genres": ["Casual", "Indie", "Simulation"],
    "tags": ["Space", "Open World Survival Craft", "Exploration", "Sandbox"]
  },
  "1551360": {
    "name": "Forza Horizon 5",
    "release_date": "Nov 9, 2021",
    "price": 59.99,
    "header_image": "https://cdn.akamai.steamstatic.com/steam/apps/1551360/header.jpg",
    "genres": ["Action", "Racing", "Sports"],
    "tags": ["Racing", "Open World", "Driving", "Multiplayer"]
  },
  "1245620": {
    "name": "ELDEN RING",
    "release_date": "Feb 25, 2022",
    "price": 59.99,
    "header_image": "https://cdn.akamai.steamstatic.com/steam/apps/1245620/header.jpg",
    "genres": ["Action", "RPG"],
    "tags": ["Souls-like", "RPG", "Fantasy", "Open World"]
  },
  "440": {
    "name": "Team Fortress 2",
    "release_date": "Oct 10, 2007",
    "price": 0.00,
    "header_image": "https://cdn.akamai.steamstatic.com/steam/apps/440/header.jpg",
    "genres": ["Action", "Free to Play"],
    "tags": ["FPS", "Hero Shooter", "Multiplayer", "Funny"]
  },
  "1145360": {
    "name": "Hades",
    "release_date": "Sep 17, 2020",
    "price": 24.99,
    "header_image": "https://cdn.akamai.steamstatic.com/steam/apps/1145360/header.jpg",
    "genres": ["Action", "Indie", "RPG"],
    "tags": ["Action Roguelike", "Roguelite", "Indie", "Action"]
  },
  "646570": {
    "name": "Slay the Spire",
    "release_date": "Jan 23, 2019",
    "price": 24.99,
    "header_image": "https://cdn.akamai.steamstatic.com/steam/apps/646570/header.jpg",
    "genres": ["Indie", "Strategy"],
    "tags": ["Card Game", "Roguelike", "Deckbuilding", "Turn-Based"]
  },
  "1599340": {
    "name": "Lost Ark",
    "release_date": "Feb 11, 2022",
    "price": 0.00,
    "header_image": "https://cdn.akamai.steamstatic.com/steam/apps/1599340/header.jpg",
    "genres": ["Action", "Adventure", "Free to Play", "Massively Multiplayer", "RPG"],
    "tags": ["Free to Play", "MMORPG", "Action RPG", "Massively Multiplayer"]
  },
  "990080": {
    "name": "Hogwarts Legacy",
    "release_date": "Feb 10, 2023",
    "price": 59.99,
    "header_image": "https://cdn.akamai.steamstatic.com/steam/apps/990080/header.jpg",
    "genres": ["Action", "Adventure", "RPG"],
    "tags": ["Magic", "Open World", "Fantasy", "RPG"]
  },
  "2050650": {
    "name": "Resident Evil 4",
    "release_date": "Mar 23, 2023",
    "price": 59.99,
    "header_image": "https://cdn.akamai.steamstatic.com/steam/apps/2050650/header.jpg",
    "genres": ["Action", "Adventure"],
    "tags": ["Horror", "Survival Horror", "Action", "Remake"]
  },
  "1506830": {
    "name": "FIFA 22",
    "release_date": "Sep 29, 2022",
    "price": 69.99,
    "header_image": "https://cdn.akamai.steamstatic.com/steam/apps/1506830/header.jpg",
    "genres": ["Simulation", "Sports"],
    "tags": ["Soccer", "Sports", "Football", "Competitive"]
  },
  "264710": {
    "name": "Subnautica",
    "release_date": "Jan 23, 2018",
    "price": 29.99,
    "header_image": "https://cdn.akamai.steamstatic.com/steam/apps/264710/header.jpg",
    "genres": ["Adventure", "Indie", "Open World"],
    "tags": ["Open World Survival Craft", "Underwater", "Survival", "Exploration"]
  },
  "1182900": {
    "name": "A Plague Tale: Requiem",
    "release_date": "Oct 17, 2022",
    "price": 49.99,
    "header_image": "https://cdn.akamai.steamstatic.com/steam/apps/1182900/header.jpg",
    "genres": ["Action", "Adventure", "Story Rich"],
    "tags": ["Story Rich", "Action-Adventure", "Dark", "Atmospheric"]
  },
  "1144200": {
    "name": "Ready or Not",
    "release_date": "Dec 17, 2021",
    "price": 39.99,
    "header_image": "https://cdn.akamai.steamstatic.com/steam/apps/1144200/header.jpg",
    "genres": ["Action", "FPS", "Simulation", "Tactical"],
    "tags": ["Tactical", "FPS", "Realistic", "Simulation"]
  },
  "1466860": {
    "name": "Age of Empires IV: Anniversary Edition",
    "release_date": "Oct 27, 2021",
    "price": 19.99,
    "header_image": "https://cdn.akamai.steamstatic.com/steam/apps/1466860/header.jpg",
    "genres": ["Strategy", "RTS"],
    "tags": ["RTS", "Strategy", "Historical", "Medieval"]
  },
  "594570": {
    "name": "Total War: WARHAMMER II",
    "release_date": "Sep 28, 2017",
    "price": 59.99,
    "header_image": "https://cdn.akamai.steamstatic.com/steam/apps/594570/header.jpg",
    "genres": ["Action", "Strategy"],
    "tags": ["Strategy", "Turn-Based Strategy", "Fantasy", "RTS"]
  }
};

// global var
let games = [];
let filteredGames = [];
let availableGenres = [];
let availablePriceRanges = [];

// Initialize games data
function initializeGames() {
  // Convert the object to our games array format
  games = Object.entries(gamesData).map(([id, game]) => ({
    id: parseInt(id),
    name: game.name,
    releaseDate: game.release_date,
    price: game.price,
    headerImage: game.header_image,
    genres: game.genres,
    tags: game.tags
  }));
  
  filteredGames = [...games];
  
  //  filter options and dropdowns
  FilterOptions();
  FilterDropdowns();
  
  document.getElementById("loading").style.display = "none";
  showCards();
}

// extract unique filter options from games data
function FilterOptions() {
  // extract unique genres
  const genreSet = new Set();
  games.forEach(game => {
    if (game.genres && Array.isArray(game.genres)) {
      game.genres.forEach(genre => genreSet.add(genre));
    }
  });
  availableGenres = Array.from(genreSet).sort();
  
  //price ranges
  availablePriceRanges = [
    { label: "Free", min: 0, max: 0 },
    { label: "Under $10", min: 0.01, max: 10 },
    { label: "$10 - $20", min: 10, max: 20 },
    { label: "$20 - $40", min: 20, max: 40 },
    { label: "$40+", min: 40, max: Infinity }
  ];
}

//  ropdown filter menus
function FilterDropdowns() {
  // genre filter
  const genreFilter = document.getElementById("genre-filter");
  genreFilter.innerHTML = '<option value="">All Genres</option>';
  availableGenres.forEach(genre => {
    const option = document.createElement("option");
    option.value = genre;
    option.textContent = genre;
    genreFilter.appendChild(option);
  });
  
  // price range filter
  const priceFilter = document.getElementById("price-filter");
  priceFilter.innerHTML = '<option value="">All Prices</option>';
  availablePriceRanges.forEach((range, index) => {
    const option = document.createElement("option");
    option.value = index;
    option.textContent = range.label;
    priceFilter.appendChild(option);
  });
}

// apply filters based on selections
function applyFilters() {
  const searchTerm = document.getElementById("search-input").value.toLowerCase();
  const selectedGenre = document.getElementById("genre-filter").value;
  const selectedPriceRange = document.getElementById("price-filter").value;
  const selectedSort = document.getElementById("sort-filter").value;
  
  // filter by search term, genre and price
  filteredGames = games.filter(game => {
    const matchesSearch = !searchTerm || game.name.toLowerCase().includes(searchTerm);
    const matchesGenre = !selectedGenre || (game.genres && game.genres.includes(selectedGenre));
    
    let matchesPrice = true;
    if (selectedPriceRange !== "") {
      const range = availablePriceRanges[parseInt(selectedPriceRange)];
      matchesPrice = game.price >= range.min && game.price <= range.max;
    }
    
    return matchesSearch && matchesGenre && matchesPrice;
  });
  
  // apply sorting
  if (selectedSort === "price-asc") {
    filteredGames.sort((a, b) => a.price - b.price);
  } else if (selectedSort === "price-desc") {
    filteredGames.sort((a, b) => b.price - a.price);
  } else if (selectedSort === "name") {
    filteredGames.sort((a, b) => a.name.localeCompare(b.name));
  } else if (selectedSort === "date") {
    filteredGames.sort((a, b) => new Date(b.releaseDate) - new Date(a.releaseDate));
  }
  
  showCards();
}

// Update stats 
function updateStats() {
  document.getElementById('games-count').textContent = `Total Games: ${games.length}`;
  document.getElementById('filtered-count').textContent = 
    filteredGames.length !== games.length ? `Showing: ${filteredGames.length}` : '';
}

// display cards for the filtered games
function showCards() {
  const cardContainer = document.getElementById("card-container");
  cardContainer.innerHTML = "";
  const templateCard = document.querySelector(".card");

  updateStats();

  if (filteredGames.length === 0) {
    cardContainer.innerHTML = `<div class="no-results">No games match your filters</div>`;
    return;
  }

  filteredGames.forEach(game => {
    const card = templateCard.cloneNode(true);
    
    // Update card content
    const cardContent = card.querySelector(".card-content");
    cardContent.querySelector("h2").textContent = game.name;
    cardContent.querySelector("img").src = game.headerImage;
    cardContent.querySelector("img").alt = game.name;
    
    const list = cardContent.querySelector("ul");
    list.innerHTML = `
      <li>Released: ${game.releaseDate}</li>
      <li>Price: ${game.price === 0 ? "Free to Play" : "$" + game.price}</li>
      <li>Genres: ${game.genres ? game.genres.join(", ") : "Unknown"}</li>
    `;
    
    // Add tags
    const tagsDiv = document.createElement("div");
    tagsDiv.className = "tags";
    if (game.tags && Array.isArray(game.tags)) {
      game.tags.slice(0, 3).forEach(tag => {
        const tagSpan = document.createElement("span");
        tagSpan.className = "tag";
        tagSpan.textContent = tag;
        tagsDiv.appendChild(tagSpan);
      });
    }
    cardContent.appendChild(tagsDiv);
    
    // Add click handler to show game details
    card.addEventListener('click', () => showGameDetails(game));
    
    card.style.display = "block";
    cardContainer.appendChild(card);
  });
}

// Show game details in modal
function showGameDetails(game) {
  const modal = document.getElementById('random-game-modal');
  const modalContent = document.getElementById('random-game-details');
  
  modalContent.innerHTML = `
    <h2>${game.name}</h2>
    <img src="${game.headerImage}" alt="${game.name}" class="modal-image">
    <div class="modal-game-details">
      <p><strong>Released:</strong> ${game.releaseDate}</p>
      <p><strong>Price:</strong> ${game.price === 0 ? "Free to Play" : "$" + game.price}</p>
      <p><strong>Genres:</strong> ${game.genres ? game.genres.join(", ") : "Unknown"}</p>
      <p><strong>Tags:</strong> ${game.tags ? game.tags.join(", ") : "None"}</p>
    </div>
  `;
  
  modal.style.display = 'flex';
}

// Show a random game
function showRandomGame() {
  if (filteredGames.length === 0) return;
  const randomIndex = Math.floor(Math.random() * filteredGames.length);
  showGameDetails(filteredGames[randomIndex]);
}

// Shuffle the displayed cards
function shuffleCards() {
  const cardContainer = document.getElementById("card-container");
  const cards = Array.from(cardContainer.children);
  
  // Fisher yates shuffle
  for (let i = cards.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    cardContainer.appendChild(cards[j]);
  }
}

// Initialize app when document is ready
document.addEventListener("DOMContentLoaded", () => {
  initializeGames();
  
  // Set up filter event listeners
  document.getElementById("search-input").addEventListener("input", applyFilters);
  document.getElementById("genre-filter").addEventListener("change", applyFilters);
  document.getElementById("price-filter").addEventListener("change", applyFilters);
  document.getElementById("sort-filter").addEventListener("change", applyFilters);
  
  // Set up modal close handlers
  const modal = document.getElementById('random-game-modal');
  const closeBtn = document.querySelector('.close-modal');
  
  closeBtn.onclick = () => modal.style.display = 'none';
  window.onclick = (event) => {
    if (event.target === modal) modal.style.display = 'none';
  };
});
