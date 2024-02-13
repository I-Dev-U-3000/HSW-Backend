import mongoose from "mongoose";

const p_acc_schema = mongoose.Schema(
    {
        name : {
            type: String,
            required: true,
        },
        phoneNumber: {
            type: String,
            required: true,
        },
        password: {
            type: String,
            required: true,
        }
    },
    {
        timestamps: true,
    }
)

export const P_acc = mongoose.model("P_acc",p_acc_schema);