//Recuperar el parametro que se le ha pasado de id
const query = window.location.search;
const urlParams = new URLSearchParams(query);
const id = urlParams.get('id');

// Recuperar nombres del anime
fetch(`https://api.jikan.moe/v4/anime/${id}`)
    .then(r => r.json())
    .then((objeto) => {
        document.getElementById("name").innerHTML = `${objeto.data.title} ${objeto.data.year != null ? '('+objeto.data.year+')' : ""}`;
        document.getElementById("namejp").innerHTML = objeto.data.title_japanese;
    })

// Recuperar todos los personajes y mostrarlos
fetch(`https://api.jikan.moe/v4/anime/${id}/characters`)
.then(r => r.json())
.then((objeto) => {
    objeto.data.map((char) => {
        console.log(char);
        let text = `<div class="shadow-xl rounded-xl h-auto flex flex-col justify-center items-center overflow-hidden">
                        <img src="${char.character.images.jpg.image_url}" class="w-full" alt="">
                        <h1 class="font-bold text-3xl uppercase mt-4">${char.character.name}</h1>
                        <h1 class="font-bold text-xl uppercase mt-4">${char.role}</h1>
                        <button class="h-auto w-auto my-4 bg-gradient-to-r from-violet-500 to-fuchsia-500 rounded-full">
                            <a href="./character.html?id=${char.character.mal_id}"><h1 class="text-xl text-center py-4 px-8 font-bold uppercase text-purple-50">Read More</h1></a>
                        </button>
                    </div>`
        document.getElementById("charlist").innerHTML += text;
    })
})