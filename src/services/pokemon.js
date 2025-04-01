async function getPokemons() {
    try {
        const res = await fetch("https://pokeapi.co/api/v2/pokemon?limit=50");
        const data = await res.json();
        return data.results;
    } catch(error) {
        console.error("Erro ao buscar lista de pokémons:", error);
    };

    return null;
};

export {
    getPokemons
};