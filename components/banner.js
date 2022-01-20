const banner = `<div class="h-auto bg-gradient-to-r py-4 from-violet-500 to-fuchsia-500 flex flex-col justify-center items-center">
                <button id="header"><h1 class="uppercase text-5xl font-bold text-purple-50 mb-4">Anime list</h1></button>
                <div class="py-4 px-12 w-full flex lg:flex-row sm:flex-col items-center justify-between">
                    <button class="text-xl font-bold text-purple-50" id="home">
                        <h1 class="flex items-center">
                            <span class="material-icons mr-2">
                                home
                            </span>
                            HOME
                        </h1>
                    </button>
                    <button class="text-xl font-bold text-purple-50" id="characters">
                        <h1 class="flex items-center">
                            <span class="material-icons mr-2">
                                person
                            </span>
                            CHARACTERS
                        </h1>
                    </button>
                    <button class="text-xl font-bold text-purple-50" id="mangas">
                        <h1 class="flex items-center">
                            <span class="material-icons mr-2">
                                book
                            </span>
                            MANGAS
                        </h1>
                    </button>
                    <button class="text-xl font-bold text-purple-50" id="random">
                        <h1 class="flex items-center">
                            <span class="material-icons mr-2">
                                casino
                            </span>
                            RANDOM
                        </h1>
                    </button>
                </div>
                </div>`;
    
document.getElementById("banner").innerHTML = banner;