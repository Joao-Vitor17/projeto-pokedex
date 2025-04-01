import { useEffect, useState } from "react";
import { getPokemons } from "../../services/pokemon";
import { Container, Header, Info } from "./styles";
import BarraPesquisa from "../../components/BarraPesquisa";
import BotaoFiltro from "../../components/BotaoFiltro";

function Home() {
    const [listaPokemon, setListaPokemon] = useState([]);

    useEffect(() => {
        buscarPokemons();
    }, [listaPokemon]);

    async function buscarPokemons() {
        const results = await getPokemons();
        setListaPokemon(results);
    }

    if (!listaPokemon.length) return <p>Loading...</p>

    return (
        <Container>
            <Header>
                <BarraPesquisa />
            </Header>
            <Info>
                <BotaoFiltro/>
                <h1>Pokédex</h1>
                <ul>
                    {listaPokemon.map((pokemon, index) => (
                        <li key={index}>{pokemon.name}</li>
                    ))}
                </ul>
            </Info>
        </Container>
    );
};

export default Home;