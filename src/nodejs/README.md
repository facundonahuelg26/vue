# Levantar servidor con express + JSONWebToken

## Configuración inicial

Crear una carpeta raiz donde se almacenara la api, luego.
```
npm init --yes
```

Despues crear un index.js.

Instalamos las dependencias.

```
npm i express
npm i mongoose
npm i bcryptjs
npm i dotenv
npm i jsonwebtoken
npm i @hapi/joi
npm i http-errors
npm i cors
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
MONGO_DB_URI=mongodb+srv://<yourusername>:<password>@cluster0.zk4db.
mongodb.net/<nombrebasededatos>?retryWrites=true&w=majority

PORT=puertoHeroku
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

const APP_PORT = process.env.PORT || 5000

app.listen(APP_PORT, (error) => {
    if(error) return console.log(error);
    console.log("server on port ", APP_PORT)
});
```

app.js

```js
const express = require("express");
const morgan = require("morgan");
const routerUsers = require("./routes/user-rooutes")
const app = express();

app.use(morgan("dev"));
app.use(express.json());
app.use("/api/users",routerUsers)


app.get("/", (req, res) => {
    res.send("welcome")
})

module.exports = app;
```

## Rutas y controladores.

Dentro de la carpeta routes, creamos un archivo user-routes.js. Este contendra las funciones que importaremos del archivo user-controllers.js.

```js
const router = require("express").Router();

const userControllers = require("../controllers/user-controllers")

router.post("/", userControllers.createUser)
router.get("/", userControllers.getUsers)
router.put("/:userId", userControllers.getUser)


module.exports = router;
```

user-controllers.js

En el archivo user-controllers.js podemos crear las funciones, podemos comenzar con algo simple para probar las rutas en postman.

```js
const User = require("../models/User");

const createUser = (req, res) => {
    res.json({message:"post users"})
}

const getUsers = (req, res) => {
    res.json({message:"get users"})
}

const getUser = (req, res) => {
    res.json({message:"Hello user"})
}

const userControllers = {createUser, getUsers, getUser}
module.exports = userControllers;
```

## Error 404 en la ruta buscada y manejo de errores.

Para el 404 creamos un middleware en app, estos van despues de las rutas,
además estamos usando una libreria http-errors para crear los errores y usarlos 
en el next. 
Debajo del 404 va el manejador de errores central, cuando usemos next en cada parte
de nuestra api enviaremos allí los errores con un codigo de estado y un mensaje.

```js
app.use((req, res, next) => {
  next(createError(404, "The endpoint does not exist"));
});

app.use((err, req, res, next) => {
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  res.status(err.status || 500)
  res.json({
    errorcode:err.status,
    message: err.message
  });
})
```

A su vez para manejar los casos exitosos podemos crear un archivo que los maneje,
en este caso jsonRespose.js.

```js
const jsonResponse = ({statuscode, message}) => {
    return{
        statuscode,
        message
    }
}

module.exports = jsonResponse;
```

A este archivo le pasaremos las respuestas json por ejemplo.

```js
res.json(jsonResponse({statuscode: 201, 
      message:"User created successfully"
}))
```
Esta respuesta sera en cuanto a creeemos un user.


## Conectarse a la base de datos de mongoDB.

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
## Creacion del modelo esquema de productos.

Products.js

```js
const mongoose = require("mongoose");
const { Schema, model } = mongoose;

const productsSchema = new Schema(
  {
    name: { type: String, required: true },
    category: String,
    price: { type: Number, required: true },
  },
  {
    timestamps: true,
    versionKey: false,
  }
);

module.exports = model("Products", productsSchema);
```

## Controladores y rutas de productos.

products-controllers.js

```js
const Product = require("../models/Products");
const createError = require("http-errors");
const jsonResponse = require("../libs/jsonResponse");

const createProduct = async (req, res, next) => {
    const { name, category, price } = req.body;
    
    try {
    const newProduct = new Product({name,category,price
    });
    await newProduct.save();
    res.json(
      jsonResponse({ statuscode: 201, message: "Product created successfully" })
    );
  } catch (err) {
    next(createError(500, "error trying to register"));
  }

  
};

const getProducts = async (req, res, next) => {
  try {
    const products = await Product.find();
    if(products.length <= 0) next(createError(400, "No content"));
    res.json(products);
  } catch (err) {
    next(createError(500, "error fetching products"));
  }
};

const getProduct = async (req, res, next) => {
  const {productId} = req.params;

  try {
    const product = await Product.findById(productId)
    res.status(200).json(product);
  } catch (err) {
    next(createError(500, "error fetching product"));
  }
};

const updateProduct = async (req, res, next) => {
  const {productId} = req.params;

  try {
    const updatedProduct = await Product.findByIdAndUpdate(
      productId,
      req.body,
      {new:true}
    )

    res.status(200).json(updatedProduct);
  } catch (err) {
    next(createError(500, "error trying to fetch the product or product ID is incorrect"));
  }
};

const deleteProducts = async (req, res, next) => {
  const {productId} = req.params
 
  try {
    await Product.findByIdAndDelete(productId)  
    res.json(jsonResponse({statuscode: 200, 
      message:"Deleted Product"
    })) 
  } catch (err) {
    next(createError(500, "error deleting product"));
  }

  
};

module.exports = {
  createProduct,
  getProducts,
  getProduct,
  updateProduct,
  deleteProducts
};

```

products-routes.js

```js
const router = require("express").Router();
const productsCtrl = require("../controllers/products-controllers");

router.post("/", productsCtrl.createProduct);

router.get("/", productsCtrl.getProducts);

router.get("/:productId", productsCtrl.getProduct) 

router.put("/:productId", productsCtrl.updateProduct);

router.delete("/:productId", productsCtrl.deleteProducts);


module.exports = router;
```

## Creacion del modelo de users.

Dentro de la carpeta models creamos un modelo en el archivo User.js.

```js
const mongoose = require("mongoose");
const {Schema, model} = mongoose;

const userSchema = new Schema({
    username:{type:String, required:true, trim:true, min:6,  max:255},
    email:{type:String, min:6,  required:true, trim:true, min:6,  max:255},
    password: {type:String, required:true, min:6,  max:1024, trim:true}},
    {
        timestamps:true,
        versionKey:false 
    }
})

module.exports = model("User", userSchema);
```

## Controlador de user y rutas.

user-controllers.js

```js
const User = require("../models/User");
const createError = require("http-errors");
const jsonResponse = require("../libs/jsonResponse")

const createUser = async (req, res, next) => {
  

  const { username, email, password } = req.body;
    try {
    const newUser = new User({
      username,
      email,
      password: await User.encryptPassword(password),
    });

    await newUser.save();
  } catch (err) {
    next(createError(500, "error creating user"));
  }

  res.json(jsonResponse({statuscode: 201, 
      message:"User created successfully"
  }))
};

const getUsers = async (req, res, next) => {
  
  try {
    const users = await User.find();
    
    if(users.length <= 0) next(createError(400, "No content"));
    res.json(users)
    
  } catch (err) {
    next(createError(500, "error getting users"));
  }
};

const getUser = async (req, res, next) => {
  try { 
    const user = await User.findById(req.params.userId);
    res.status(200).json(user);
  } catch (err) {
    next(createError(500, "error getting user"));
  }
};

const updateUser = async (req, res, next) => {
  try {
    const updatedUser = await User.findByIdAndUpdate(
      req.params.userId, 
      req.body,
      {new: true});
      
      res.status(200).json(updatedUser);
  } catch (err) {
    next(createError(500, "error updating user"));
  }
};

const deleteUser = async (req, res, next) => {
  try {
    const { userId } = req.params;
    await User.findByIdAndDelete(userId);
  } catch (err) {
    next(createError(500, "error deleting user"));
  }
  res.json(jsonResponse({statuscode: 200, 
      message:"Deleted User"
  })) 
};

const userControllers = {
  createUser,
  getUsers,
  getUser,
  updateUser,
  deleteUser,
};
module.exports = userControllers;

```
En el updateUser, el primer dato req.params.userid es el usuario viejo que tenemos, el req.body tiene los datos actualizados. El new:true devuelve los datos nuevos ya actualizados.

user-routes.js

```js
const router = require("express").Router();
const userControllers = require("../controllers/user-controllers");
const validateUserData = require("../middlewares/validateUserData")

router.post("/", userControllers.createUser);
router.get("/", userControllers.getUsers);
router.get("/:userId", userControllers.getUser);
router.put("/:userId", validateUserData, userControllers.updateUser);
router.delete("/:userId", userControllers.deleteUser);

module.exports = router;
```

## Validar datos del usuario en un middleware

En la carpeta middlewares creamos un archivo validateUserData que contendra una funcion 
que se la pasaremos al user-routes.js antes de ejecutarse el createUser. Los errores los valida
la libreria Joi, creando un esquema, a su vez usamos el next y el createError de la
libreria http-errors para enviar errores.

validateUserData.js
```js
const User = require("../models/User");
const Joi = require("@hapi/joi");
const createError = require("http-errors");
const validateUserData = async (req, res, next) => {
    const { username, email, password } = req.body;
  const validateSchema =  Joi.object({
      username: Joi.string().min(6).max(255).required(),
      email: Joi.string().min(6).max(255).required().email(),
      password: Joi.string().min(6).max(1024).required()
  })

  const {error} = validateSchema.validate(req.body);

  if(error){
    next(createError(400, error.details[0].message));
 
  }

  const validateUsername = await User.findOne({username});
  if(validateUsername) next(createError(400, "Username already exists"));    

  const validateEmail = await User.findOne({email});
  if(validateEmail) next(createError(400, "Email already exists"));
  
  next();
}

module.exports = validateUserData;
```

user-routes.js

```js
router.post("/", validateUserData, userControllers.createUser);
```

## Cifrar la contraseña

Dentro de models en el user.js

```js
//Cifrado de contraseña
userSchema.statics.encryptPassword = async (password) => {
    const salt = await bcrypt.genSalt(10);
    return await bcrypt.hash(password, salt)
};
// Compara las contraseñas
userSchema.statics.comparePassword = async (password, recivedPassword) => {
    //compare devuelve true si coinciden
    return await bcrypt.compare(password, recivedPassword)
};
```

user-controllers.js en createUser

```js
try {
    const newUser = new User({
      username,
      email,
      password: await User.encryptPassword(password),
    });

    await newUser.save();
    //codigo de estado 201 "nuevo recurso se ha creado"
    res.json(jsonResponse({statuscode: 201, 
      message:"User created successfully"
    }))
  }
```

