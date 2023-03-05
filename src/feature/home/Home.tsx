import {useQuery} from "@apollo/client";
import {GET_POKEMON} from "./query";
import {Pokemon} from "./interface/pokemonInterface";
import useUpperCase from "../../hook/useUppercase";

function Home() {
    const {data, loading, error} = useQuery(GET_POKEMON)

    if (loading) {
        return <div>Loading...</div>;
    }

    if (error) {
        return <div>Error: {error.message}</div>;
    }

    const pokemonTypeChips = (types: Pokemon) => {

        switch (types.pokemon_v2_pokemontypes.length) {
            case 1 :
                return <span
                    className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mb-2">{useUpperCase(types.pokemon_v2_pokemontypes[0].pokemon_v2_type.name)}</span>
            case 2 :
                return <>
                    <span
                        className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">{useUpperCase(types.pokemon_v2_pokemontypes[0].pokemon_v2_type.name)}</span>
                    <span
                        className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mb-2">{useUpperCase(types.pokemon_v2_pokemontypes[1].pokemon_v2_type.name)}</span>
                </>
        }
    }

    return (
        <>
            <div className="container flex my-12 mx-auto px-4 md:px-12">
                <div className="flex flex-wrap justify-center -mx-1 lg:-mx-4">
                    {data.pokemon_v2_pokemon.map((pokemon: Pokemon) => (
                        <>
                            <div className="max-w-sm m-4 rounded overflow-hidden shadow-lg bg-white">
                                <img className="w-full"
                                     src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${pokemon.id}.png`}
                                     alt="Sunset in the mountains"/>
                                <div className="px-6 py-4">
                                    <div
                                        className="font-bold text-xl mb-3 text-center border-t-2 border-gray-300 pt-2">{useUpperCase(pokemon.name)}</div>
                                    <div className="flex justify-center ">
                                        {pokemonTypeChips(pokemon)}
                                    </div>
                                </div>

                            </div>

                        </>
                    ))}
                </div>
            </div>
        </>
    )
}

export default Home
