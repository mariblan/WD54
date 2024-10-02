const mongoosee = require('mongoose');

const connectToDB = async () => {
  try{
    await mongoosee.connect(process.env.MONGO_URI);
    console.log('Connected to the DB');
  }catch(err){
    console.log(err);
  }
};

module.exports = connectToDB;