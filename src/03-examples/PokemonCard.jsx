import { useState } from "react";
import { useRef } from "react"
import { useLayoutEffect } from "react"

export const PokemonCard = ({ id, name, sprites = [] }) => {

    const pRef = useRef();
    const [boxSize, setBoxSize] = useState({ width: 0, height: 0 })

    useLayoutEffect(() => {
        const { width, height } = pRef.current.getBoundingClientRect()
        setBoxSize({ width, height })
        

    }, [id])

    return (
        <>
            <section
                style={{ height: 200 }}
            >
                <h2 
                    className="text-capitalize"
                    ref={ pRef }
                >
                    #{ id } - { name }
                </h2>

                <div>
                    {/* Imágenes */}
                    {
                        sprites.map( sprite => (
                            <img key={ sprite } src={ sprite } alt={ name } />
                        ))
                    }
                </div>
            </section>

            <code>
                { JSON.stringify( boxSize ) }
            </code>
        </>
    )
}
