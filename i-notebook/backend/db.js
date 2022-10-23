const mongoose = require('mongoose');
const mongooURI = 'mongodb://localhost:27017/iNotebook';

const connectToMongo = () => {
    mongoose.connect(mongooURI,()=>{
        console.log("Connected to Mongo Successfully");
    })
}

module.exports = connectToMongo;