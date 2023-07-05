const mongoose = require ("mongoose");
const ObjectId = mongoose.Schema.Types.ObjectId;
const mongooseDelete = require ("mongoose-delete")

const EmployeeScheme = new mongoose.Schema(
    {
        email:{
            type: String,
            unique: true
        },
        contraseña:{
            type: String,
            select: false
        },
        nombre:{
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
        gAssigned:{
            type: ObjectId
        }
    },
    {
        timestamps:true, //TODO createdAt, updatedAt
        versionKey:false
    }
);

EmployeeScheme.plugin(mongooseDelete, { overrideMethods: "all"});
module.exports = mongoose.model("employees", EmployeeScheme);