import { useCounter, useFetch } from "../hooks"
import { LoadingMessage } from "./LoadingMessage";
import { PokemonCard } from "./PokemonCard";


export const MultipleCustomHook = () => {

    const url = 'https://pokeapi.co/api/v2/pokemon'

    const { counter, decrement, increment } = useCounter(1);
    const { data, isLoading } = useFetch(`${ url }/${ counter }`);

    return (
        <>
            <h1 aria-label='Title'>Información de Pokémon</h1>
            <hr />

            { 
                isLoading
                ? <LoadingMessage /> 
                : (
                    <PokemonCard 
                        id={ data.id }
                        name={ data.name }
                        sprites={[
                            data.sprites.front_default,
                            data.sprites.front_shiny,
                            data.sprites.back_default,
                            data.sprites.back_shiny,
                        ]}
                    />
                )
            }
            {/* <pre>{ JSON.stringify( data, null, 2 ) }</pre> */}

            <button
                aria-label='PreviousItem'
                className="btn btn-primary mt-2"
                disabled={ isLoading }
                onClick={ () => counter > 1 ? decrement() : null }
            >
                Anterior
            </button>
            <button
                aria-label='NextItem'
                className="btn btn-primary mt-2"
                disabled={ isLoading }
                onClick={ () => increment() }
            >
                Siguiente
            </button>

        </>
    )
}
