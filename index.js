const express = require('express')
const cors = require('cors');
const bodyParser = require('body-parser');
const { User } = require('./models')

const app = express()
const port = process.env.PORT || 3000

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "X-Requested-With");
  next();
  });

  app.use(bodyParser.json());
  app.use(cors());

// app.get('/', (req, res) => res.send(`<h1> Executando na porta: ${port} </h1>`));


app.post('/user', async (req, res) => {

  const { name, email, wpp, music } = req.body;

  const user = await User.create({ name, email, wpp, music });

  return res.status(201).json(user);
});

app.get('/', async (req, res) => {


  const user = await User.findAll();

  
  return res.status(201).json(user);
});

app.listen(port, () => console.log(`Servidor online na porta ${port}`));