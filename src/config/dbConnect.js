import mongoose from "mongoose";

mongoose.connect("mongodb+srv://alura:123@node-express.j0g6hpk.mongodb.net/alura-node");

let db  = mongoose.connection;

export default db;