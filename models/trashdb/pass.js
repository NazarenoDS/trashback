const mongoose = require ("mongoose");
const ObjectId = mongoose.Schema.Types.ObjectId;
const mongooseDelete = require ("mongoose-delete")


const PassScheme = new mongoose.Schema(
    {
        game:{
            type: ObjectId
        },
        date:{
            type: Date
        },
        price:{
            type: Number
        },
        nticket:{
            type: Number
        },
        employee:{
            type: ObjectId
        },
        client:{
            type: ObjectId
        }
    },
    {
        timestamps:true, //TODO createdAt, updatedAt
        versionKey:false
    }
);

PassScheme.plugin(mongooseDelete, { overrideMethods: "all"});
module.exports = mongoose.model("pass", PassScheme);