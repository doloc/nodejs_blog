const mongoose = require('mongoose');

async function connect() {
    try {
        // await mongoose.connect('mongodb://localhost:27017/f8_education_dev');
        await mongoose.connect('mongodb+srv://dolocnd:thuhoai123@education.mfgqebh.mongodb.net/f8_education_prod');
        console.log('Connect successfully!!!');
    } catch (error) {
        console.log('Connect failure!!!');
    }
}

module.exports = { connect }