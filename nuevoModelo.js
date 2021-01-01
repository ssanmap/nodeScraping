const mongoose = require('mongoose');

const {Schema }  = mongoose;

const modeloSchema = new Schema({
    name: {type:String},
    link: {type:String},
},{
    timestamps:{createdAt:true, updatedAt:true}
}
);

module.exports = mongoose.model('NuevoModelo' , modeloSchema)