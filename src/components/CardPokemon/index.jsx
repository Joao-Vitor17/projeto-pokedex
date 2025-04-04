import { useEffect, useState } from "react";
import { getDetalhePokemon } from "../../services/pokemon";
import { CardContainer, ContainerIconElemento, ContainerImgPokemon, IconElemento, ImgElemento, ImgPokemon, InfosPokemon, NomePokemon, NumeracaoPokemon, TipoPokemon, TiposPokemonContainer } from "./styles";
import { getColorElementoPokemon, getNumeracaoPokemon } from "../../controllers/pokemonController";

function CardPokemon({ url }) {
    const [pokemon, setPokemon] = useState(null);

    useEffect(() => {
        async function buscarPokemon() {
            const results = await getDetalhePokemon(url);
            setPokemon(results);
        }
        buscarPokemon();
    }, [url]);

    if (!pokemon) {
        return <p>Carregando...</p>;
    }

    return (
        <CardContainer $colorCard={`${getColorElementoPokemon(pokemon.types[0].type.name)}1D`}>
            <InfosPokemon>
                <NumeracaoPokemon>
                    {getNumeracaoPokemon(pokemon.id.toString())}
                </NumeracaoPokemon>
                <NomePokemon>
                    {pokemon.name.split(" ").map(nome => nome.charAt(0).toUpperCase() + nome.slice(1)).join(" ")}
                </NomePokemon>
                <TiposPokemonContainer>
                    {pokemon.types.map(t => (
                        <TipoPokemon $tipo={t.type.name}>
                            <ContainerIconElemento>
                                <IconElemento src={`tipoPokemon/${t.type.name}.svg`} $tipo={t.type.name} />
                            </ContainerIconElemento>
                            {t.type.name}
                        </TipoPokemon>
                    ))}
                </TiposPokemonContainer>
            </InfosPokemon>
            <ContainerImgPokemon $tipo={pokemon.types[0].type.name}>
                <ImgPokemon src={`https://img.pokemondb.net/sprites/black-white/normal/${pokemon.name}.png`} alt={pokemon.name} />
                <ImgElemento src={`tipoPokemon/${pokemon.types[0].type.name}.svg`} />
            </ContainerImgPokemon>
        </CardContainer>
    );
};

export default CardPokemon;