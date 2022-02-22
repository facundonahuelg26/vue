# Levantar servidor con express + JSONWebToken

## Configuración inicial

```
npm init --yes
```

Despues crear un index.js.

Instalamos las dependencias.

```
npm i express
npm i mongoose
npm i bcrypt
npm i dotenv
npm i jsonwebtoken
npm i @hapi/joi
npm i cors
npm i helmet
npm i morgan
npm i jsonwebtoken
```

Instalar nodemon como dependencia de desarrollo.

```
npm i nodemon -D
```

package.json

```json
"scripts": {
    "start": "node src/index.js",
    "dev": "nodemon src/index.js"
},
```

En la carpeta raiz del proyecto creamos las variables de entorno en un archivo y ademas un archivo .gitignore. En el archivo .gitignore colocamos.

```
node_modules
.env
```

Dentro del .env nuestras variables de entorno.

```
MONGO_DB_URI=mongodb+srv://<yourusername>:<password>@cluster0.zk4db.mongodb.net/<nombrebasededatos>?retryWrites=true&w=majority
```

Las carpetas a crear, primero dentro de la carpeta raiz crear un src, y dentro las demas carpetas del proyecto.

```
routes
models
controllers
libs
middlewares
```

index.js

```js
require("dotenv").config();
const app = require("./app");
require("./database");

const PORT = 5000

app.listen(PORT, () => {
    console.log("server on port ", PORT)
});
```

app.js

```js
const express = require("express");
const morgan = require("morgan");
const routerUsers = require("./routes/user")
const app = express();

app.use(morgan("dev"));
app.use(express.json());
app.use("/api/users",routerUsers)


app.get("/", (req, res) => {
    res.send("welcome")
})

module.exports = app;
```
database.js
```js
const mongoose = require("mongoose");

const MONGO_DB_URI = process.env.MONGO_DB_URI;

(async () => {
  try {
    const db = await mongoose.connect(MONGO_DB_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("db connected to ", db.connection.name);
  } catch (error) {
    console.log(error);
  }
})();
```

Dentro de la carpeta routes, creamos un archivo user.js.

```js
const router = require("express").Router();

const userControllers = require("../controllers/user-controllers")

router.post("/", userControllers.createUser)
router.get("/", userControllers.getUsers)
//router.put("/userId", userControllers.getUsers)



module.exports = router;
```

Dentro de la carpeta models creamos un modelo en el archivo User.js.

```js
const mongoose = require("mongoose");
const {Schema, model} = mongoose;

const userSchema = new Schema({
    name:{type:String, required:true, max:60},
    lastname:{type:String, required:true, max:60},
    email:{type:String, required:false, max:60},
    //password
})

module.exports = model("User", userSchema);
```

```js
const User = require("../models/User");

const createUser = async (req, res) => {

    const {name, lastname, email} = req.body;
    const newUser = new User ({
        name,
        lastname, 
        email
    })
    //const userSaved = await newUser.save();
    //codigo de estado 201 "nuevo recurso se ha creado"
    //res.status(201).json({message:"get users"})
    res.json({message:"post users"})
}

const getUsers = (req, res) => {
    res.json({message:"get users"})
}

const userControllers = {createUser, getUsers}
module.exports = userControllers;
```