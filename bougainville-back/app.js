const express = require('express');
const mongoose = require('mongoose');
const app = express();
const cors = require('cors');
require('dotenv').config();
const usersRouter = require('./routes/userRouter');
const fragsRouter = require('./routes/fragsRouter');
const tropheesRouter = require('./routes/tropheesRouter');
// const htmlRouter = require('./router/htmlRouter');

//Connexion Database
mongoose.connect(`mongodb+srv://${process.env.MONGOOSE_ID}:${process.env.MONGOOSE_PWD}@bougainvilledb.zsiio.mongodb.net/myFirstDatabase?retryWrites=true&w=majority`,
  { useNewUrlParser: true,
    useUnifiedTopology: true })
  .then(() => console.log('Connexion à MongoDB réussie !'))
  .catch(() => console.log('Connexion à MongoDB échouée !'));

//Gestion du format url-encoded
app.use(
  express.urlencoded({
    extended: true,
  })
);
//Gestion du format JSON
app.use(express.json());
app.use(cors());

// app.use(htmlRouter);
app.use(usersRouter);
app.use(fragsRouter);
app.use(tropheesRouter);


module.exports = app;