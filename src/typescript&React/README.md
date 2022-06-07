# Uso de typescript con React Js

Algunos ejemplos de sintaxis...

```js
type FormElement = React.FormEvent<HTMLFormElement>;
```

Este type es para acortar su declaracion dentro de una funcion, se declara fuera del componente.

```js
const handleSubmit = (e: FormElement) => {
  e.preventDefault();
  console.log(newTask);
};
```

De esta manera el e de la función handleSubmit ya tiene su tipo.

## Como poner un tipo al useState.

```js
const [newTask, setNewTask] = useState < string > "";
```

Si pusieramos un dato de tipo number nos daria un error, esto significa que el tipado esta funcionando.

## Como especificar los datos que se guardan en un arreglo si fuera el valor de useState.

Se declara una interface y se declaran los tipos para los datos.

```js
interface ITask {
  name: string;
  done: boolean;
}
```

Luego en el useState, se coloca la interface pero se agrega [] para aclarar que es una lista que contiene esos tipos de datos o sea los datos de la interface.

```js
  const [tasks, setTasks] = useState<ITask[]>([])
```

También en la funcion se puede especificar los tipos de datos, poniendo el nombre de la interface.

```js
const addTask = (name: string) => {
  const newTasks: ITask[] = [...tasks, { name, done: false }];
  setTasks(newTasks);
};
```

## Declarar una lista y con tipos.

Se puede hacer de la siguiente manera.

```js
{
  tasks.map((task: ITask, index: number) => <h1 key={index}>{task.name}</h1>);
}
```

## Agregar el tipo de valor que retorna la función

En este caso si no retorna nada sera de tipo void.

```js
const addTask = (name: string): void => {
  const newTasks: ITask[] = [...tasks, { name, done: false }];
  setTasks(newTasks);
};
```

## Definir el tipo de la referencia de un elemento

Si quisieramos diferenciar un elemento

```js
const taskInput = useRef < HTMLInputElement > null;
```

## Paso de Props

Para pasar props se puede usar una interface en el archivo que recibe las props.

```js
interface AppProps {
  title: string;
}

function App({ title }: AppProps): JSX.Element {
  return (
    <>
      <h1>{title}</h1>
    </>
  );
}

export default App;
```

Se le estaria pasando esto por ejemplo

```js
<App title="Hola Mundo" />
```

Una interface con mas datos...

```js
interface Task {
  id: number;
  title: string;
  description: string;
  completed: boolean;
}
```

se usaran para un useState,

```js
const [tasks, setTasks] = useState<Task[]>([{
    id:1,
    title:"Learn React",
    description:"Learn React",
    completed:false
}])
```

## Importar una interface

Para importar una interface debemos crear una carpeta y dentro un archivo ts
en ella ira nuestra interface.

```js
import { Task } from "../interfaces/taskInterface";

interface Props {
  tasks: Task[];
}
```

Luego de importada se la pasamos a las props...

```js
const TaskList = ({ tasks }: Props) => {};
```

Si esta interfaz importara a su componente hijo llamado TaskCard cambiaria
el task ya que ahora se le esta pasando el objeto, tenerlo en cuenta.

```js
import { Task } from "../interfaces/taskInterface";

interface Props {
  task: Task;
}

const TaskCard = ({ task }: Props) => {
  return (
    <div>
      <h1>{task.title}</h1>
    </div>
  );
};

export default TaskCard;
```

## Pasar una propiedad de modo opcional o no requerida

Para ello al dato dentro de la interface debemos agregarle un signo de interrogación.

```js
export interface Task {
  id: number;
  title?: string;
  description: string;
  completed: boolean;
}
```

En ese caso el titulo no sera requerido.

## Otra forma de darle tipos a los eventos

```js
const handleChange = (
  e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
) => {
  const { name, value } = e.target;

  setTask({ ...task, [name]: value });
};
```

De esta manera tambien podriamos agregar los objetos con nuevas tareas que contengan title y description.

## Crear un dato de tipo función en una interface

```js
interface Props {
  addANewTask: () => void 
}
```

Con esto y pasandole la prop al componente deberia estar.

```js
const TaskForm = ({addANewTask}: Props) => {}
```

Sin embargo nos va a dar un error, ya que hace falta que aclaremos el dato que le estamos pasando a esta función.

```js
interface Props {
  addANewTask: (task:Task) => void 
}
```

Con esto se soluciona el error.


## Manejar el submit de un formulario con una función

Declaramos esta función

```js
const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    addANewTask(task)
}
```

Esto pareceria estar correcto pero nos marca un error, nos dice que el task que es un estado
y se lo estamos pasando a la función addANewTask no es compatible con el argumento que espera
dicha función, entonces para resolver esto, porque no le estamos pasando el id, y el completed
que son parte del objeto interface declarado, entonces deberiamos ponerlos como opcionales, 
de esa manera solucionamos el problema.

```js
export interface Task {
  id?: number;
  title: string;
  description: string;
  completed?: boolean;
}
```
