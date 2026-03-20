import mongoose, { Document, Schema } from "mongoose";

export interface IUser extends Document {
    name: string;
    email: string;
}

// We create schema that type is scema and scema type is IUSER.

const schema: Schema<IUser> = new Schema({
    name: {
        type:String,
        required: true,
    },
    email: {
        type: String,
        required: true,
        unique:true,
    }, 
   },
   {
    timestamps : true,
   }
);

export const User = mongoose.model<IUser>("User", schema);