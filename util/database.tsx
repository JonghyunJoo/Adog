import { MongoClient } from 'mongodb';

const url = 'mongodb+srv://admin:qwer1234@cluster0.czom7ut.mongodb.net/?retryWrites=true&w=majority';

let connectDB: Promise<MongoClient>;

if (process.env.NODE_ENV === 'development') {
  if (!(global as any)._mongo) {
    (global as any)._mongo = new MongoClient(url).connect();
  }
  connectDB = (global as any)._mongo;
} else {
  connectDB = new MongoClient(url).connect();
}

export { connectDB };