# Que es y como usar useState.

En react si hicieramos lo siguiente...

```js
const App = () => {
  let value = 0

  const handleClick = () => {
    value = value + 1
    console.log(value)
  }
  
  return (
    <>
      <button onClick={handleClick} >Click</button>
      <h2>{value}</h2>
    </>
  )
}
```

Si nuestra intención fuera ver que el valor se muestre y se actualice en el DOM  no lo conseguiriamos,
pero podriamos ver que por consola la función funciona y el valor se esta incrementando.
En React necesitamos tener un estado para que le diga al componente que cuando el valor de ese estado cambie 
se actualice el componente o se renderice nuevamente. Esto significa que si cambia el estado hay un nuevo redibujo del DOM o renderización.

```js
import {  useState } from "react"

const App = () => {
  const [value, setValue] = useState(0)
  
  const handleClick = () => setValue(value + 1)

  
  return (
    <>
      <button onClick={handleClick}>Click</button> 
      <h2>{value}</h2>
    </>
  )
}

export default App
```

Asi quedaria el componente si utilizamos useState, y permitiria ver los cambios en la hoja del documento.
El useState usa en su sintaxis un array de 2 posiciones, en la posición 1 esta el valor del estado, y en 
la segunda posición tenemos una funcion que nos permite actualizar ese valor. Dentro de los parentesis 
tenemos el valor inicial de nuestro estado, que podría ser un primitivo tipo number, string, boolean, o 
también array, objeto.

# Concepto de useEffect y uso.

## ¿Que es useEffect?

El useEffect es uno de los hooks mas usados en react, los hooks son funciones que realizan algo en concreto, en el caso de este hook, realiza efectos secundarios, por ejemplo para modificaciones manuales del DOM, para hacer llamados a una api, para ejecutar algunos eventos que son propios de javascript.

## ¿Cuando se ejecuta esta función?

El efecto se ejecuta en cada renderización o lo que es lo mismo en cada actualizacion del DOM, entonces si la estamos usando ya sabemos que por lo menos una vez se va a ejecutar.

## Primer problema

Si estamos usando un useEffect dentro de un componente, y ese componente realiza actualizaciones de estado, significa que se va a ejecutar el efecto por cada actualización de estado. Y esto no es un problema si quisieramos que ocurra justamente eso. Para controlar esta situacion, hay que pasarle un segundo argumento a la funcion que es un array.
Este array puede estar vacio, en ese caso el useEffect se ejecutara una vez, un ejemplo aplicable podria ser el caso del llamado a una api, pintamos los datos que llegan y no queremos que se vuelva a ejecutar la funcion.

```js
// ejemplo llamado a una api
useEffect(() => {
  getUser();
}, []);

const getUser = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/users");

  const data = await res.json();
  console.log([...data.results]);
  setUser([...data.results]);
};
```

Si dentro del array pasaramos algun valor significa que queremos que el useEffect se ejecute en cada actualización de dicho valor.


## Segundo problema a considerar

A veces es necesario realizar un saneamiento, esto significa, limpiar los efectos del componente si este no se encuentra montado, si no hicieramos esto tendriamos un error en la aplicación, y esto puede producir que baje la performance de nuestra aplicación. El saneamiento solo se realiza a determinados efectos en particular, no todos los efectos necesitan hacer esto, pero si hicieran el saneamiento retornan una funciòn que es la encargada de limpiar dichos efectos.
La secuencia si el componente se estuviera actualizando seria primero se ejecuta el efecto con el primer dibujo del DOM, si el DOM se redibuja, entonces se sanea el efecto anterior y se ejecuta un nuevo efecto, y asi sucesivamente, en caso de desmontarse el componente tambièn se sanea o se limpia.
Por ejemplo si como efecto secundario quisieramos que se maneje el como se vera la aplicacion de acuerdo al tamaño del monitor.

```js
useEffect(() => {
    let mediaQuery = window.matchMedia("(min-width: 768px)");
    mediaQuery.addListener(setMQuery);
    
    // Aca se remueve el evento, porque si tuvieramos algun estado que se este actualizando y se actualice el DOM ejecutariamos de vuelta este evento.
    return () => mediaQuery.removeListener(setMQuery);
  }, []);
```
