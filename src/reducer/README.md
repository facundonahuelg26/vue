# Use reducer

El reducer es una funcion, el initialState es el counter, el dispatch seria como un setCounter.

```js
const [couter, dispatch] = useReducer(reducer, initialState)
```
La funcion del reducer recibe 2 parametros, el estado previo y un objeto que es la accion. La funcion siempre retornara el estado.

```js
const reducer = (state, action) => {
    return state 
}
```

Tambien tenemos una variable de initialState, este estado contiene un objeto que en este caso sera contaodor.

```js
const initialState = {contador: 0}
```

En los reducer se acostumbra a que dentro de la funcion se utilicen switch case.
Las acciones tienen tipos de acciones y payloads.

```js
const reducer = (counter, action) => {
    switch (action.type) {
        case 'INCREMENT':
            
            return {contador: counter.contador + 1};
        case 'DECREMENT': 
            return {contador:counter.contador - 1}; 
        default:
            return counter  
    }
}
```

El payload es un dato o valor que se pasa desde cada dispatch a la funcion reductora.

```js
const sumar = () => dispatch({type: TYPES.INCREMENT, payload:5})
const restar = () => dispatch({type: TYPES.DECREMENT, payload:5})
const resetear = () => dispatch({type: TYPES.RESET})
```

```js
const reducer = (counter, action) => {
    switch (action.type) {
        case TYPES.INCREMENT:          
            return {contador: counter.contador + action.payload};
        case TYPES.DECREMENT: 
            return {contador:counter.contador - action.payload};
        case TYPES.RESET: 
            return initialState; 
        default:
            return counter  
    }
}
```
Ademas se podrian declarar todas las constantes en un objeto.

```js
const TYPES = {
    INCREMENT:'INCREMENT',
    DECREMENT: 'DECREMENT',
    RESET: 'RESET'
}
```

## Estructura de archivos

Hay una carpeta para las acciones, otra para los reducers, dentro de la carpeta de los reducers,
se crea un archivo.

counterReducer.js
```js
import { TYPES } from "../actions/counterActions";

export const counterInitialState = {contador: 0}

export const counterReducer = (counter, action) => {
    switch (action.type) {
        case TYPES.INCREMENT:          
            return {contador: counter.contador + action.payload};
        case TYPES.DECREMENT: 
            return {contador:counter.contador - action.payload};
        case TYPES.RESET: 
            return counterInitialState; 
        default:
            return counter  
    }
}
```

Contiene la funcion reductora y se importan las acciones. Dentro de la carpeta actions,

counterActions.js
```js
export const TYPES = {
    INCREMENT:'INCREMENT',
    DECREMENT: 'DECREMENT',
    RESET: 'RESET'
}
```

En el archivo principal importamos la funcion reductora y las acciones.

Counter.js
```js
import React, {useReducer} from "react";
import { TYPES } from "./actions/counterActions";
import { counterReducer, counterInitialState } from "./reducers/counterReducer";

const Counter = () => {
    const [counter, dispatch] = useReducer(counterReducer, counterInitialState)

    const sumar = () => dispatch({type: TYPES.INCREMENT, payload:5})
    const restar = () => dispatch({type: TYPES.DECREMENT, payload:5})
    const resetear = () => dispatch({type: TYPES.RESET})
  return (
    <>
      <button onClick={sumar}>Increment</button>
      <button onClick={restar}>Decrement</button>
      <button onClick={resetear}>Reset</button>
      <h1>{counter.contador}</h1>
    </>
  );
};

export default Counter;
```