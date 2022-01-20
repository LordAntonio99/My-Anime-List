//Recuperar el parametro que se le ha pasado de id
const query = window.location.search;
const urlParams = new URLSearchParams(query);
const id = urlParams.get('id');

// Titulo de la pagina
fetch(`https://api.jikan.moe/v4/characters/${id}`)
.then(r => r.json())
.then((objeto) => {
    console.log(objeto);
    document.getElementById("name").innerHTML = `Mangas from ${objeto.data.name}`;
})

// Listar los animes
fetch(`https://api.jikan.moe/v4/characters/${id}/manga`)
.then(r => r.json())
.then((objeto) => {
    objeto.data.map((char) => {
        let text = `<div class="h-auto rounded-xl overflow-hidden ease-in-out duration-200 hover:transition-all shadow-xl  hover:shadow-2xl hover:shadow-black/60 text-center'p">
                        <img src="${char.manga.images.jpg.large_image_url}" class="w-full" alt="">
                        <h1 class="font-bold text-3xl uppercase mt-4">${char.manga.title}</h1>
                        <h1 class="font-bold text-xl uppercase mt-4">${char.role}</h1>
                        <button class="h-auto w-auto my-4 bg-gradient-to-r from-violet-500 to-fuchsia-500 rounded-full">
                            <a href="./manga.html?id=${char.manga.mal_id}"><h1 class="text-xl text-center py-4 px-8 font-bold uppercase text-purple-50">Read More</h1></a>
                        </button>
                    </div>`
        document.getElementById("charlist").innerHTML += text;
    })
})
