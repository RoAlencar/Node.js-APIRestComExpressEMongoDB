import mongoose from "mongoose";

mongoose.connect("mongodb+srv://alura:123@node-express.j0g6hpk.mongodb.net/");

let db  = mongoose.connection;

export default db;