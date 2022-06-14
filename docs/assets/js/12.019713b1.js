(window.webpackJsonp=window.webpackJsonp||[]).push([[12],{415:function(a,t,s){"use strict";s.r(t);var e=s(35),n=Object(e.a)({},(function(){var a=this,t=a.$createElement,s=a._self._c||t;return s("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[s("h1",{attrs:{id:"que-es-y-como-usar-usestate"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#que-es-y-como-usar-usestate"}},[a._v("#")]),a._v(" Que es y como usar useState.")]),a._v(" "),s("p",[a._v("En react si hicieramos lo siguiente...")]),a._v(" "),s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("const")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token function-variable function"}},[a._v("App")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=>")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("{")]),a._v("\n  "),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("let")]),a._v(" value "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[a._v("0")]),a._v("\n\n  "),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("const")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token function-variable function"}},[a._v("handleClick")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=>")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("{")]),a._v("\n    value "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v(" value "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("+")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[a._v("1")]),a._v("\n    console"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("log")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),a._v("value"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),a._v("\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("}")]),a._v("\n  \n  "),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("return")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),a._v("\n    "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("<")]),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v(">")]),a._v("\n      "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("<")]),a._v("button onClick"),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("{")]),a._v("handleClick"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("}")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v(">")]),a._v("Click"),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("<")]),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("/")]),a._v("button"),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v(">")]),a._v("\n      "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("<")]),a._v("h2"),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v(">")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("{")]),a._v("value"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("}")]),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("<")]),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("/")]),a._v("h2"),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v(">")]),a._v("\n    "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("<")]),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("/")]),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v(">")]),a._v("\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("}")]),a._v("\n")])])]),s("p",[a._v("Si nuestra intención fuera ver que el valor se muestre y se actualice en el DOM  no lo conseguiriamos,\npero podriamos ver que por consola la función funciona y el valor se esta incrementando.\nEn React necesitamos tener un estado para que le diga al componente que cuando el valor de ese estado cambie\nse actualice el componente o se renderice nuevamente. Esto significa que si cambia el estado hay un nuevo redibujo del DOM o renderización.")]),a._v(" "),s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("import")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("{")]),a._v("  useState "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("}")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("from")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[a._v('"react"')]),a._v("\n\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("const")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token function-variable function"}},[a._v("App")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=>")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("{")]),a._v("\n  "),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("const")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("[")]),a._v("value"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(",")]),a._v(" setValue"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("]")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("useState")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),s("span",{pre:!0,attrs:{class:"token number"}},[a._v("0")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),a._v("\n  \n  "),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("const")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token function-variable function"}},[a._v("handleClick")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=>")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("setValue")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),a._v("value "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("+")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[a._v("1")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),a._v("\n\n  \n  "),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("return")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),a._v("\n    "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("<")]),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v(">")]),a._v("\n      "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("<")]),a._v("button onClick"),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("{")]),a._v("handleClick"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("}")]),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v(">")]),a._v("Click"),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("<")]),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("/")]),a._v("button"),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v(">")]),a._v(" \n      "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("<")]),a._v("h2"),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v(">")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("{")]),a._v("value"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("}")]),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("<")]),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("/")]),a._v("h2"),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v(">")]),a._v("\n    "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("<")]),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("/")]),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v(">")]),a._v("\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("}")]),a._v("\n\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("export")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("default")]),a._v(" App\n")])])]),s("p",[a._v("Asi quedaria el componente si utilizamos useState, y permitiria ver los cambios en la hoja del documento.\nEl useState usa en su sintaxis un array de 2 posiciones, en la posición 1 esta el valor del estado, y en\nla segunda posición tenemos una funcion que nos permite actualizar ese valor. Dentro de los parentesis\ntenemos el valor inicial de nuestro estado, que podría ser un primitivo tipo number, string, boolean, o\ntambién array, objeto.")]),a._v(" "),s("h1",{attrs:{id:"concepto-de-useeffect-y-uso"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#concepto-de-useeffect-y-uso"}},[a._v("#")]),a._v(" Concepto de useEffect y uso.")]),a._v(" "),s("h2",{attrs:{id:"¿que-es-useeffect"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#¿que-es-useeffect"}},[a._v("#")]),a._v(" ¿Que es useEffect?")]),a._v(" "),s("p",[a._v("El useEffect es uno de los hooks mas usados en react, los hooks son funciones que realizan algo en concreto, en el caso de este hook, realiza efectos secundarios, por ejemplo para modificaciones manuales del DOM, para hacer llamados a una api, para ejecutar algunos eventos que son propios de javascript.")]),a._v(" "),s("h2",{attrs:{id:"¿cuando-se-ejecuta-esta-funcion"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#¿cuando-se-ejecuta-esta-funcion"}},[a._v("#")]),a._v(" ¿Cuando se ejecuta esta función?")]),a._v(" "),s("p",[a._v("El efecto se ejecuta en cada renderización o lo que es lo mismo en cada actualizacion del DOM, entonces si la estamos usando ya sabemos que por lo menos una vez se va a ejecutar.")]),a._v(" "),s("h2",{attrs:{id:"primer-problema"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#primer-problema"}},[a._v("#")]),a._v(" Primer problema")]),a._v(" "),s("p",[a._v("Si estamos usando un useEffect dentro de un componente, y ese componente realiza actualizaciones de estado, significa que se va a ejecutar el efecto por cada actualización de estado. Y esto no es un problema si quisieramos que ocurra justamente eso. Para controlar esta situacion, hay que pasarle un segundo argumento a la funcion que es un array.\nEste array puede estar vacio, en ese caso el useEffect se ejecutara una vez, un ejemplo aplicable podria ser el caso del llamado a una api, pintamos los datos que llegan y no queremos que se vuelva a ejecutar la funcion.")]),a._v(" "),s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[s("span",{pre:!0,attrs:{class:"token comment"}},[a._v("// ejemplo llamado a una api")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("useEffect")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=>")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("{")]),a._v("\n  "),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("getUser")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(",")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("[")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("]")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\n\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("const")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token function-variable function"}},[a._v("getUser")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("async")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=>")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("{")]),a._v("\n  "),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("const")]),a._v(" res "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("await")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("fetch")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[a._v('"https://jsonplaceholder.typicode.com/users"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\n\n  "),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("const")]),a._v(" data "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("await")]),a._v(" res"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("json")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\n  console"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("log")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("[")]),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("...")]),a._v("data"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),a._v("results"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("]")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\n  "),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("setUser")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("[")]),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("...")]),a._v("data"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),a._v("results"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("]")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\n")])])]),s("p",[a._v("Si dentro del array pasaramos algun valor significa que queremos que el useEffect se ejecute en cada actualización de dicho valor.")]),a._v(" "),s("h2",{attrs:{id:"segundo-problema-a-considerar"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#segundo-problema-a-considerar"}},[a._v("#")]),a._v(" Segundo problema a considerar")]),a._v(" "),s("p",[a._v("A veces es necesario realizar un saneamiento, esto significa, limpiar los efectos del componente si este no se encuentra montado, si no hicieramos esto tendriamos un error en la aplicación, y esto puede producir que baje la performance de nuestra aplicación. El saneamiento solo se realiza a determinados efectos en particular, no todos los efectos necesitan hacer esto, pero si hicieran el saneamiento retornan una funciòn que es la encargada de limpiar dichos efectos.\nLa secuencia si el componente se estuviera actualizando seria primero se ejecuta el efecto con el primer dibujo del DOM, si el DOM se redibuja, entonces se sanea el efecto anterior y se ejecuta un nuevo efecto, y asi sucesivamente, en caso de desmontarse el componente tambièn se sanea o se limpia.\nPor ejemplo si como efecto secundario quisieramos que se maneje el como se vera la aplicacion de acuerdo al tamaño del monitor.")]),a._v(" "),s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[s("span",{pre:!0,attrs:{class:"token function"}},[a._v("useEffect")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=>")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("{")]),a._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("let")]),a._v(" mediaQuery "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v(" window"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("matchMedia")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[a._v('"(min-width: 768px)"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\n    mediaQuery"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("addListener")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),a._v("setMQuery"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\n    \n    "),s("span",{pre:!0,attrs:{class:"token comment"}},[a._v("// Aca se remueve el evento, porque si tuvieramos algun estado que se este actualizando y se actualice el DOM ejecutariamos de vuelta este evento.")]),a._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("return")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=>")]),a._v(" mediaQuery"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("removeListener")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),a._v("setMQuery"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(",")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("[")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("]")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\n")])])])])}),[],!1,null,null,null);t.default=n.exports}}]);