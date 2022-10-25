const { User } = require('../models');
var AWS = require('aws-sdk');

AWS.config.update({region: 'REGION'});
var sqs = new AWS.SQS({apiVersion: '2012-11-05'});

const addUserService = async (vehicle, model, location, time) => {

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

  return { code: 200, user };
};

const getAllUsersService = async () => {
  const users = await User.findAll();

    if (!users) {
      return { code: 409, message: 'Not users in db' };
    }
    return { code: 200, users };
};

module.exports = {
    addUserService,
    getAllUsersService
};
