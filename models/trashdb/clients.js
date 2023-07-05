const mongoose = require ("mongoose");
const mongooseDelete = require ("mongoose-delete")

const ClientScheme = new mongoose.Schema(
    {
        name:{
            type: String
        },
        dni:{
            type: Number,
            unique: true
        },
        birthdate:{
            type: Date
        },
        phone:{
            type: Number
        },
        balance:{
            type: Number
        },
        idCard:{
            type: Number,
            unique: true
        }
    },
    {
        timestamps:true, //TODO createdAt, updatedAt
        versionKey:false
    }
);

ClientScheme.plugin(mongooseDelete, { overrideMethods: "all"});
module.exports = mongoose.model("clients", ClientScheme);