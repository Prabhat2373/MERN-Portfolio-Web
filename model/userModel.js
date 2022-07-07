const mongoose = require('mongoose');
const dotenv = require('dotenv');

dotenv.config({ path: './config.env' });

const DB = process.env.DATABASE;

mongoose
  .connect(DB, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
  })
  .then(() => {
    // console.log(conn.connection);
    console.log('DB connection SUCCESS!');
  })
  .catch((err) => {
    console.log('ERROR : ' + err.message);
  });

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  number: {
    type: Number,
  },
  password:{
    type: String,
    required: true
  },
  feedBack: {
    type: String,
    required: false,
  },
});

const users = mongoose.model('Users', userSchema);
module.exports = users;
