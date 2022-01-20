fetch("https://api.jikan.moe/v4/top/characters")
.then(r => r.json())
.then((object) => {
    console.log(object.data);
    object.data.map(async (char) => {
        var card = await `<a href="character.html?id=${char.mal_id}"><div class="h-auto rounded-xl overflow-hidden ease-in-out duration-200 hover:transition-all shadow-xl  hover:shadow-2xl hover:shadow-black/60 text-center">
                            <img src="${char.images.jpg.image_url}" class="w-full" />
                            <h1 class="mx-4 font-bold text-3xl uppercase mt-4">${char.name}</h1>
                            <div class="flex flex-row justify-center items-center mx-8 mb-8">
                                <h1 class="font-bold text-xl uppercase mx-4 mt-4 flex justify-center items-center">
                                <span class="material-icons mx-2">favorite</span>
                                ${char.favorites}
                                </h1>
                            </div>
                        </div></a>`;
        
        document.getElementById("cards").innerHTML += card;
    })
})