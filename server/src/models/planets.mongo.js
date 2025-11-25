const mongoose = require('mongoose');

const planetSchema = new mongoose.Schema({

    keplerName: { type: String, required: false}
});

module.exports = mongoose.model('Planet', planetSchema);