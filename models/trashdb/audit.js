const mongoose = require ("mongoose");
const ObjectId = mongoose.Schema.Types.ObjectId;
const mongooseDelete = require ("mongoose-delete");

const AuditScheme = new mongoose.Schema(
    {
        date:{
            type: Date
        },
        id:{
            type: ObjectId
        },
        accion:{
            type: String
        },
    },
    {
        timestamps:true, //TODO createdAt, updatedAt
        versionKey:false
    }
);

AuditScheme.plugin(mongooseDelete, { overrideMethods: "all"});
module.exports = mongoose.model("audit", AuditScheme);