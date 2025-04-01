import { BotaoNumero, BotaoTipo, Container } from "./styles";

function BotaoFiltro() {
    return(
        <Container>
            <BotaoTipo>
                Todos os tipos
                <img src="expandir-botao.svg" />
            </BotaoTipo>
            <BotaoNumero>
                Menor número
                <img src="expandir-botao.svg" />
            </BotaoNumero>
        </Container>
    );
};

export default BotaoFiltro;