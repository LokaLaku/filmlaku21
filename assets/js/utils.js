function renderFilmGrid(ids) {
    return `
        <div class="film-grid">
            ${ids.map(fid => `
                <a href="detail.html?id=${fid}" class="film-card">
                    <div class="film-rating">⭐ ${films[fid].rating}</div>
                    <img src="${films[fid].img}" alt="${films[fid].title}" />
                    <div class="film-overlay">
                        <div class="film-title">${films[fid].title}</div>
                    </div>
                </a>
            `).join('')}
        </div>
    `;
}

function renderFilmRecommendations(recommendations) {
    return `
        <h2 style="margin-top:30px;">Rekomendasi Film</h2>
        ${renderFilmGrid(recommendations)}
        
        <h2 style="margin-top:30px;">Film Terbaru</h2>
        ${renderFilmGrid(Object.keys(films).slice(0, 3))}
    `;
}

function initLiveSearch() {
    const searchInput = document.getElementById("searchInput");
    const searchResults = document.getElementById("searchResults");

    searchInput.addEventListener("input", function () {
        const query = this.value.trim().toLowerCase();
        if (query.length === 0) {
            searchResults.style.display = "none";
            return;
        }

        const filtered = Object.keys(films).filter(id =>
            films[id].title.toLowerCase().includes(query)
        );

        if (filtered.length === 0) {
            searchResults.innerHTML = `<div style="padding:8px;color:#aaa;">Tidak ada hasil</div>`;
            searchResults.style.display = "block";
            return;
        }

        searchResults.innerHTML = filtered.map(id => `
            <a href="detail.html?id=${id}">
                <img src="${films[id].img}" alt="${films[id].title}">
                <div>
                    <div class="title">${films[id].title}</div>
                    <div class="rating">⭐ ${films[id].rating}</div>
                </div>
            </a>
        `).join("");

        searchResults.style.display = "block";
    });

    document.addEventListener("click", function (e) {
        if (!searchInput.contains(e.target) && !searchResults.contains(e.target)) {
            searchResults.style.display = "none";
        }
    });
}
