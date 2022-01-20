//Recuperar el parametro que se le ha pasado de id
const query = window.location.search;
const urlParams = new URLSearchParams(query);
const id = urlParams.get('id');

const delay = ms => new Promise(res => setTimeout(res, ms));

// Listar todos los datos y darles formatos
fetch(`https://api.jikan.moe/v4/characters/${id}`)
.then(r => r.json())
.then(async (objeto) => {
    document.getElementById("name").innerHTML = objeto.data.name
    document.getElementById("nicknames").innerHTML = objeto.data.nicknames.join(', ')
    document.getElementById("about").innerHTML = objeto.data.about.replace(/\n/g, '<br />')
    document.getElementById("image").src = objeto.data.images.jpg.image_url

})

// Boton para ver animes
const animeList = document.getElementById("animes");

animeList.addEventListener('click', () => {
    window.location.replace(`./animelist.html?id=${id}`);
})

// Boton para ver mangas
const mangaList = document.getElementById("mangaList");

mangaList.addEventListener('click', () => {
    window.location.replace(`./mangalist.html?id=${id}`);
})

// Comprobar mangas en los que aparece
// fetch(`https://api.jikan.moe/v4/characters/${id}/manga`)
// .then(r => r.json())
// .then((objeto) => {
//     objeto.data.map(async (char) => {
//         var card = `  <div class="h-auto rounded-xl overflow-hidden ease-in-out duration-200 hover:transition-all bg-gradient-to-r py-4 from-violet-500 to-fuchsia-500 shadow-2xl shadow-violet-500/50 hover:shadow-xl hover:shadow-violet-500 text-purple-50">
//                             <img src="${char.manga.images.jpg.image_url}" class="w-full" />
//                             <h1 class="font-bold text-xl text-center my-4">${char.manga.title}</h1>
//                             </div>`;
        
//         document.getElementById("cards2").innerHTML += card;
//     })
// })

//Comprobar los actores de voz
// fetch(`https://api.jikan.moe/v4/characters/${id}/voices`)
// .then(r => r.json())
// .then((objeto) => {
//     console.log(objeto);
//     objeto.data.map(async (lang) => {
//         var card = await `  <div class="h-auto rounded-xl overflow-hidden ease-in-out duration-200 hover:transition-all bg-gradient-to-r py-4 from-violet-500 to-fuchsia-500 shadow-2xl shadow-violet-500/50 hover:shadow-xl hover:shadow-violet-500 text-purple-50">
//         <img src="${lang.person.images.jpg.image_url}" class="w-full" />
//         <h1 class="font-bold text-xl text-center my-4">${lang.person.name} (${lang.language})</h1>
//         </div>`;

//     await delay(1000);
//     document.getElementById("cards3").innerHTML += card;
//     })
// })