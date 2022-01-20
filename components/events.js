//boton para que home te redirija al index.html
const home = document.getElementById("home");

home.addEventListener("click", () => {
    window.location.replace("../src/index.html");
})

// lo mismo pero con el titulo
const header = document.getElementById("header");

header.addEventListener("click", () => {
    window.location.replace("../src/index.html");
})

//boton para redirigir a la pagina de personajes
const personajes = document.getElementById("characters");

personajes.addEventListener("click", () => {
    window.location.replace("../src/characters.html");
})

//boton para redirigir a la pagina de mangas
const mangas = document.getElementById("mangas")

mangas.addEventListener('click', () => {
    window.location.replace("../src/mangas.html");
})

//boton para redirigir a un aime aleatorio
const random = document.getElementById("random")

random.addEventListener('click', (e) => {
    fetch("https://api.jikan.moe/v4/random/anime")
    .then(r => r.json())
    .then(async (objeto) => {
        await window.location.replace(`../src/anime.html?id=${objeto.data.mal_id}`);
    })
})