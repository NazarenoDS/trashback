const mongoose = require ("mongoose");
const mongooseDelete = require ("mongoose-delete")

const AdminScheme = new mongoose.Schema(
    {
        email:{
            type: String,
            unique: true
        },
        password:{
            type: String,
            select: false
        },
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
    },
    {
        timestamps:true, //TODO createdAt, updatedAt
        versionKey:false
    }
);

AdminScheme.plugin(mongooseDelete, { overrideMethods: "all"});
module.exports = mongoose.model("admins", AdminScheme);