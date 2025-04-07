import { useEffect, useState } from "react";
import { getPokemons } from "../../services/pokemon";
import { Container, Header, ContentPage, ContainerCardsPokemon, IconLupaPesquisa } from "./styles";
import BarraPesquisa from "../../components/BarraPesquisa";
import BotaoFiltro from "../../components/BotaoFiltro";
import CardPokemon from "../../components/CardPokemon";

function Home() {
    const [listaPokemon, setListaPokemon] = useState(null);

    useEffect(() => {
        async function buscarPokemons() {
            const results = await getPokemons();
            setListaPokemon(results);
        }
        buscarPokemons();
    }, []);
    
    // if (!listaPokemon) return <p>Carregando...</p>

    return (
        <Container>
            <Header>
                <IconLupaPesquisa src="lupa-pesquisa.svg" />
                <BarraPesquisa />
            </Header>
            <ContentPage>
                <BotaoFiltro />
                <ContainerCardsPokemon>
                {
                    !listaPokemon ? <p>Carregando...</p> : 
                    listaPokemon.map(pokemon => (
                        <CardPokemon url={pokemon.url} />
                    )) 
                }
                </ContainerCardsPokemon>
            </ContentPage>
        </Container>
    );
};

export default Home;