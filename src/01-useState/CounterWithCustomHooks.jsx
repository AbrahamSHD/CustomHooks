import { useCounter } from "../hooks";

export const CounterWithCustomHooks = () => {

    const { counter, increment, decrement, reset } = useCounter();
    const value = 4

    return (
        <>
            <h1>Counter with custom Hook { counter }</h1>

            <hr />

            <button className='btn btn-primary' onClick={ () => increment( value ) } >+{ value }</button>
            <button className='btn btn-primary' onClick={ reset }>Reset</button>
            <button className='btn btn-primary' onClick={ () => decrement( value ) }>-{ value }</button>

        </>
    )
}

