// Recuperar el id del anime para utilizarlo despues
const query = window.location.search;
const urlParams = new URLSearchParams(query);
const id = urlParams.get('id');

// Mostrar la información general del anime
fetch(`https://api.jikan.moe/v4/anime/${id}`)
    .then(r => r.json())
    .then((objeto) => {
        document.getElementById("name").innerHTML = `${objeto.data.title} (${objeto.data.year})`;
        document.getElementById("namejp").innerHTML = objeto.data.title_japanese;
        document.getElementById("about").innerHTML = objeto.data.synopsis;
        document.getElementById("seen").innerHTML = `Seen by ${objeto.data.members}`;
        document.getElementById("score").innerHTML = `Score ${objeto.data.score}/10`;
        document.getElementById("rank").innerHTML = `Top ${objeto.data.rank}`;
        document.getElementById("favs").innerHTML = `Favorites ${objeto.data.favorites}`;
        document.getElementById("image").src = objeto.data.images.jpg.large_image_url;
    })

// boton para caracteres de un anime
const characters = document.getElementById("animechars");

characters.addEventListener('click', () => {
    window.location.replace(`./animecharacters.html?id=${id}`);
})

const episodes = document.getElementById("episodes");

episodes.addEventListener('click', () => {
    window.location.replace(`episodes.html?id=${id}`);
})