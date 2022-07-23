const mongoose = require('mongoose');
const dotenv = require('dotenv');
const bcrypt = require("bcryptjs")

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
  password: {
    type: String,
    required: false
  },
  feedBack: {
    type: String,
    required: false,
  },
});

userSchema.pre("save",  async function(next) {
  // Only run this function if password is actuallly modified
  if (!this.isModified('password')) return next();

  // Hash the password with cost of 12, 12 is a CPU intensive amount 
  this.password = await bcrypt.hash(this.password, 12)

  next()
})


const users = mongoose.model('Users', userSchema);
module.exports = users;
