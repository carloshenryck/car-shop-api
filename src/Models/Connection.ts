import mongoose from 'mongoose';
import 'dotenv/config';

const MONGO_DB_URL = 'mongodb://localhost:27017/CarShop';

// remover _v e _id
mongoose.set('toJSON', {
  virtuals: true,
  versionKey: false,
  transform(_doc, ret) { 
    const obj = ret;
    delete obj._id; 
  },
});

const connectToDatabase = (
  mongoDatabaseURI = process.env.MONGO_URI
    || MONGO_DB_URL,
) => mongoose.connect(mongoDatabaseURI);

export default connectToDatabase;