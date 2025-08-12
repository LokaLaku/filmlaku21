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
