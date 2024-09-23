import mongoose from 'mongoose';

const urlSchema = new mongoose.Schema({
    shortURL: String,
    shortCode: String,
    longURL: String
});

const URL = mongoose.model('urls', urlSchema);

export {URL};