const { default: mongoose } = require("mongoose");
let monogoose = require("mongoose");

// mlab cloud MongoDb
const mlabServer = "ahmed.ckusp.mongodb.net";
//Local MongoDb
const localServer = "127.0.0.1:27017";
const database = "myFirstDatabase";
const username = " ahmedmrabet";
const password = "3CtbDaYKkLR9j2yQ";
// const uri = `mongodb+srv://${username}:${password}@${server}/${database}?retryWrites=true&w=majority`;

// mlab cloud MongoDb
const uri = `mongodb+srv://ahmedmrabet:${password}@${mlabServer}/${database}?retryWrites=true&w=majority`;

//Local MongoDb
const url = `mongodb://${localServer}/${database}`;

monogoose.connect(uri);
let CustomerSchema = new monogoose.Schema({
  name: String,
  email: {
    type: String,
    required: true,
    unique: true,
  },
});
module.exports = mongoose.model("Customer", CustomerSchema);
