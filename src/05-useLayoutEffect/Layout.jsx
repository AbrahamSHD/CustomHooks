import { useCounter, useFetch } from "../hooks"
import { LoadingMessage, PokemonCard } from "../03-examples";


export const Layout = () => {

    const url = 'https://pokeapi.co/api/v2/pokemon'

    const { counter, decrement, increment } = useCounter(1);
    const { data, isLoading } = useFetch(`${ url }/${ counter }`);

    return (
        <>
            <h1>Información de Pokémon</h1>
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
                className="btn btn-primary mt-2"
                onClick={ () => counter > 1 ? decrement() : null }
                >
                Anterior
            </button>
            <button
                className="btn btn-primary mt-2"
                onClick={ () => increment() }
            >
                Siguiente
            </button>

        </>
    )
}
