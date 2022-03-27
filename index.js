const express = require('express')
const bodyParser = require('body-parser');
const { User } = require('./models')

const app = express()
const port = process.env.PORT || 3000

// app.use(express.json());
app.use(bodyParser.json());

app.post('/user', async (req, res) => {

  const { name, description } = req.body;

  const user = await User.create({ name, description });

  return res.status(201).json(user);
});

app.listen(port, () => console.log(`Servidor online na porta ${port}`));