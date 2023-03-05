import gql from "graphql-tag";

export const GET_POKEMON =
gql`
    query samplePokeAPIquery {
        pokemon_v2_pokemon(limit: 151) {
            id
            name
            pokemon_v2_pokemontypes {
                pokemon_v2_type {
                    name
                }
            }
        }
    }
`;
