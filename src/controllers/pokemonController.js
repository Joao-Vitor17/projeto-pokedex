function getColorElementoPokemon(tipoPokemon) {
    const rootStyles = getComputedStyle(document.documentElement);
    const color = rootStyles.getPropertyValue(`--color-${tipoPokemon}`);
    return color;
};

function getColorFilter(tipoPokemon) {
    const rootStyles = getComputedStyle(document.documentElement);
    const color = rootStyles.getPropertyValue(`--color-filter-${tipoPokemon}`);
    return color;
};

function getNumeracaoPokemon(id) {
    if(id.length == 1) {
        return "N°00" + id;
    };
    if(id.length == 2) {
       return "N°0" + id;
    };
    return "N°" + id;
};

export {
    getColorElementoPokemon,
    getColorFilter,
    getNumeracaoPokemon,
};