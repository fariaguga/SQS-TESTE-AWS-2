const express = require('express')
const cors = require('cors');
const bodyParser = require('body-parser');
const { User } = require('./models')

const app = express()
const port = process.env.PORT || 3000

app.use(bodyParser.json());

// app.get('/', (req, res) => res.send(`<h1> Executando na porta: ${port} </h1>`));

app.post('/user', cors({ origin: "https://arabela-banda.herokuapp.com/"}), async (req, res) => {

  const { name, email, wpp, music } = req.body;

  const user = await User.create({ name, email, wpp, music });

  return res.status(201).json(user);
});

app.get('/', cors(), async (req, res) => {


  const user = await User.findAll();

  return res.status(201).json(user);
});

app.listen(port, () => console.log(`Servidor online na porta ${port}`));