import { useParams } from "react-router-dom";
import { ContainerGifPokemon, ContainerTop, ContentPage, GifPokemon, IconElementoPokemon } from "./styles";
import { useEffect, useRef, useState } from "react";
import { getPokemonPorNome } from "../../services/pokemon";
import { getColorElementoPokemon } from "../../controllers/pokemonController";

function DescricaoPokemon() {
    let { pokemon } = useParams();
    const gifRef = useRef(null);
    const [sizeWidth, setSizeWidth] = useState(0);
    const [infoPokemon, setInfoPokemon] = useState(null);

    useEffect(() => {
        async function buscarPokemon() {
            const poke = await getPokemonPorNome(pokemon);
            setInfoPokemon(poke);
        }
        buscarPokemon();
    }, []);

    function gifLoad() {
        const img = gifRef.current;
        setSizeWidth(img.naturalWidth * 2);
    }

    if (!infoPokemon) {
        return <p>Carregando...</p>;
    }

    return (
        <ContentPage>
            <ContainerTop $colorTipo={getColorElementoPokemon(infoPokemon.types[0].type.name)}>
                <IconElementoPokemon src={`tipoPokemon/${infoPokemon.types[0].type.name}.svg`} />
            </ContainerTop>
            <ContainerGifPokemon>
                <GifPokemon
                    ref={gifRef}
                    src={`https://projectpokemon.org/images/normal-sprite/${infoPokemon.name}.gif`}
                    onLoad={gifLoad}
                    alt={infoPokemon.name}
                    $width={sizeWidth}
                />
            </ContainerGifPokemon>
        </ContentPage>
    ); 
}

export default DescricaoPokemon;