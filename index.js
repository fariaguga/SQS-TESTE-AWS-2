const express = require('express')
const cors = require('cors');
const bodyParser = require('body-parser');
const { User } = require('./models')
const app = express()
const port = process.env.PORT || 3000

var AWS = require('aws-sdk');
AWS.config.update({region: 'REGION'});
var sqs = new AWS.SQS({apiVersion: '2012-11-05'});

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "X-Requested-With");
  next();
  });

  app.use(bodyParser.json());
  app.use(cors());

// app.get('/', (req, res) => res.send(`<h1> Executando na porta: ${port} </h1>`));


app.post('/user',  async (req, res) => {

  const { vehicle, model, location, time } = req.body;

//  const user = await User.create({ vehicle, model, location, time });
  const user = `INSERT INTO "Users" ("id","vehicle","model","location","time") VALUES (DEFAULT,${vehicle},${model},${location},${time});`

  var params = {
    // Remove DelaySeconds parameter and value for FIFO queues
   DelaySeconds: 10,
   MessageAttributes: {
     "Title": {
       DataType: "String",
       StringValue: "The Whistler"
     },
     "Author": {
       DataType: "String",
       StringValue: "John Grisham"
     },
     "WeeksOn": {
       DataType: "Number",
       StringValue: "6"
     }
   },
   MessageBody: user,
   // MessageDeduplicationId: "TheWhistler",  // Required for FIFO queues
   // MessageGroupId: "Group1",  // Required for FIFO queues
   QueueUrl: "https://sqs.us-east-2.amazonaws.com/458246424339/stc-teste-sqs"
 };

 sqs.sendMessage(params, function(err, data) {
  if (err) {
    console.log("Error", err);
  } else {
    console.log("Success", data.MessageId);
  }
});

  return res.status(201).json(user);
});

app.get(async (req, res) => {


  const user = await User.findAll();

  
  return res.status(201).json(user);
});

app.listen(port, () => console.log(`Servidor online na porta ${port}`));
