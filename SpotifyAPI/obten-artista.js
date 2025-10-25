function addArtistResponse(container, artistData, topTracksData) {
    const outputHTML = `<div class="card mb-3" style="max-width: 300px;">
        <div class="row g-0">
            <div class="col-12">
                <img
                    src="${artistData.images[0]?.url || ""}"
                    alt="Artist image for ${artistData.name}"
                    class="img-fluid rounded-top"
                    style="width: 100%; height: 300px; object-fit: cover;"
                />
            </div>
            <div class="col-12">
                <div class="card-body">
                    <h4 class="card-title" style="color:black;">${artistData.name}</h4>
                    <p class="card-text" style="color:black;">
                        <strong>Géneros:</strong> ${artistData.genres.join(", ")}
                    </p>
                    <h6 style="color: black;">Top 5 tracks:</h6>
                    <ol class="list-group list-group-numbered">
                        ${topTracksData.tracks.slice(0, 5).map(track => 
                            `<li class="list-group-item" style="color: #479f75;">${track.name}</li>`
                        ).join("")}
                    </ol>
                </div>
            </div>
        </div>
    </div>`;
    container.innerHTML = outputHTML;
}

async function ejecutaFuncion() {
    const token = document.getElementById("token").value.trim();
    const artistId = document.getElementById("artist-id").value.trim();

    const container = document.getElementById("artist-info");
    container.innerHTML = "";

    const parrafo = document.createElement("p");
    parrafo.textContent = "Carganding...";
    container.appendChild(parrafo);

    try {
        const [artistResponse, topTracksResponse] = await Promise.all([
            fetch(`https://api.spotify.com/v1/artists/${artistId}`, {
                headers: { Authorization: `Bearer ${token}` },
            }),
            fetch(`https://api.spotify.com/v1/artists/${artistId}/top-tracks?market=US`, {
                headers: { Authorization: `Bearer ${token}` },
            })
        ]);

        if (!artistResponse.ok) {
            throw new Error(`Artist Error ${artistResponse.status}: ${artistResponse.statusText}`);
        }
        if (!topTracksResponse.ok) {
            throw new Error(`Top Tracks Error ${topTracksResponse.status}: ${topTracksResponse.statusText}`);
        }

        const artistData = await artistResponse.json();
        const topTracksData = await topTracksResponse.json();
        
        container.innerHTML = ""; 
        addArtistResponse(container, artistData, topTracksData);
    } catch (err) {
        container.innerHTML = "";
        const error = document.createElement("p");
        error.textContent = err.message;
        error.style.color = "red";
        container.appendChild(error);
    }
}

//-------------------------------------------------------------------------------
document.getElementById("fetch-btn").addEventListener("click", ejecutaFuncion);