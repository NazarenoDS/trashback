const mongoose = require ("mongoose");
const mongooseDelete = require ("mongoose-delete")


const GameScheme = new mongoose.Schema(
    {
        name:{
            type: String
        },
        places:{
            type: Number,
        },
        date:{
            type: [Date]
        },
        price:{
            type: Number
        },
        state:{
            type: String
        },
        sMaintenance:{
            type: Number,
        },
        oService:{
            type: Number,
        }
    },
    {
        timestamps:true, //TODO createdAt, updatedAt
        versionKey:false
    }
);

GameScheme.plugin(mongooseDelete, { overrideMethods: "all"});
module.exports = mongoose.model("games", GameScheme);