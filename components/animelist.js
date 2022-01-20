// https://api.jikan.moe/v3/top/anime/1/airing --> Lista de los animes mas vistos en emisión

fetch("https://api.jikan.moe/v3/top/anime/1/airing")
.then(async (r) => {
    return await r.json();
})
.then(objeto => {
    // Los animes más vistos se generan en un array dentro de objeto.top
    // Se muestran únicamente los 50 primeros
    console.log(objeto.top);
    objeto.top.map(async (anime) => {
        var card = `<a href="./anime.html?id=${anime.mal_id}"><div class="relative h-auto rounded-xl overflow-hidden ease-in-out duration-200 hover:transition-all shadow-xl  hover:shadow-2xl hover:shadow-black/60 text-center">
                        <img src="${anime.image_url}" class="w-full" />
                        <h1 class="mx-4 font-bold text-3xl uppercase mt-4">${anime.title}</h1>
                        <div class="flex flex-row justify-center mx-8 mb-8">
                            <h1 class="font-bold text-xl uppercase mx-4 mt-4 flex justify-center items-center">
                                <span class="material-icons mr-2">person</span>
                                    ${anime.members}
                            </h1>
                            <h1 class="font-bold text-xl uppercase mx-4 mt-4 flex justify-center items-center">
                                <span class="material-icons mr-2">star</span>
                                    ${anime.score}
                            </h1>
                        </div>
                    </div></a>`
        document.getElementById("cards").innerHTML += card;
    })
})
               
                
