'use strict';
const mongoose = require('mongoose');
const Orders = require('./models/models');


// Connecting to the mongodb
function dataBaseConnection(){
  const url = "mongodb+srv://shashidhar:qwertyuiop@ordereditems.r2lt7vg.mongodb.net/?retryWrites=true&w=majority";
  mongoose.connect(url);
  return mongoose.connection;
}

// posting data to the server
module.exports.postData = async(event)=>{

  // connecting to the database
  await dataBaseConnection();
  const data = JSON.parse(event.body);
  const ordering = new Orders({
    Items: data.Items,
    GrandTotal: data.GrandTotal,
   
});

const ordered = await ordering.save();
return{
  statusCode: 200,
  body: JSON.stringify(ordered),
}
}

// Gettign data from the database
module.exports.getData = async (event) => {
  await dataBaseConnection() 
  const Items = await Orders.find();
  return {
    statusCode: 200,
    body: JSON.stringify(Items),
  
    
  };

  // Use this code if you don't use the http event with the LAMBDA-PROXY integration
  // return { message: 'Go Serverless v1.0! Your function executed successfully!', event };
};
