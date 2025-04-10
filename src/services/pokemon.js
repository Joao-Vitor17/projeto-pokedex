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

async function getDetalhePokemon(url) {
    try {
        const res = await fetch(url);
        const data = await res.json();
        return data;
    } catch(error) {
        console.error("Erro ao buscar detalhe do pokémon:", error);
    };

    return null;
};

async function getPokemonPorNome(nome) {
    try {
        const res = await fetch("https://pokeapi.co/api/v2/pokemon/" + nome);
        const data = await res.json();
        return data;
    } catch(error) {
        console.error("Erro ao buscar pokémon pelo nome:", error);
    };

    return null;
};

export {
    getPokemons,
    getDetalhePokemon,
    getPokemonPorNome,
};