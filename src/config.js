import { config } from 'dotenv'
config()

export  default {
  mongoDBUrl : process.env.MONGO_DB_URI || "mongodb://localhost/task-api"
}