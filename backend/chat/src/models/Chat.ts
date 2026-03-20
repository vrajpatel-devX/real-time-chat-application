import mongoose, { Document, Schema } from "mongoose";

export interface IChat extends Document {
    users: string[];
    latestMessage: {
        text: string;
        sender: string;
    };

    createdAt: Date;
    updatedAt: Date;
}

// We create schema that type is scema and scema type is IUSER.

const schema: Schema<IChat> = new Schema({
    users: [{ type:String, required: true }],
    latestMessage: {
        text: String,
        sender: String,
    }, 
   },
   {
    timestamps : true,
   }
);

export const Chat = mongoose.model<IChat>("Chat", schema);