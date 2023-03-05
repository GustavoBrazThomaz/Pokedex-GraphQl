
export interface Pokemon {
    id: string,
    name: string
    pokemon_v2_pokemontypes: Array<Pokemon_v2_pokemontypes>;
}

export interface Pokemon_v2_pokemontypes {
    pokemon_v2_type: Pokemon_v2_type;
};

export interface Pokemon_v2_type {
    name: string;
};

