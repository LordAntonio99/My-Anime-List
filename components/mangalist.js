fetch("https://api.jikan.moe/v4/top/manga")
.then(r => r.json())
.then((objeto) => {
    objeto.data.map((manga) => {
        console.log(manga)
        var card;
        var card = `<a href="manga.html?id=${manga.mal_id}"><div class="h-auto rounded-xl overflow-hidden ease-in-out duration-200 hover:transition-all shadow-xl  hover:shadow-2xl hover:shadow-black/60 text-center">
                    <img src="${manga.images.jpg.image_url}" class="w-full" />
                    <h1 class="mx-4 font-bold text-3xl uppercase mt-4">${manga.title}</h1>
                    <div class="flex flex-row justify-center mx-8 mb-8">
                        <h1 class="font-bold text-xl uppercase mx-4 mt-4 flex justify-center items-center">
                        <span class="material-icons mr-2">person</span>
                            ${manga.favorites}
                        </h1>
                        <h1 class="font-bold text-xl uppercase mx-4 mt-4 flex justify-center items-center">
                        <span class="material-icons mr-2">star</span>
                            ${manga.scored}
                        </h1>
                    </div>
                    </div></a>`;
        document.getElementById("cards").innerHTML += card;
    })
})