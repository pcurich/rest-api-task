import mongoose from 'mongoose'
import config from './config'

(
  async () => {
    try{
      const db = await mongoose.connect(config.mongoDBUrl , {
        useNewUrlParser: true,
        useUnifiedTopology: true
      })
      console.log('DataBase is connected to: ',db.connection.host);
    }catch(error){
      console.error(error);
    }
  }
)();