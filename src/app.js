  import express from 'express'
  import morgan from "morgan";
  import cors from "cors";

  import taskRoutes from './routes/task.route.js'

  const app = express()

  // Settings
  app.set("port", process.env.PORT || 3000)

  // const corsOptions = {origin: "http://localhost:3000"};
  const corsOptions = {};
  app.use(cors(corsOptions));
  

  // middleware
  app.use(morgan("dev"));
  app.use(express.json());
  app.use(express.urlencoded({
    extended: false
  }))

  app.get("/", (req, res) => {
    res.json({
      message: "Welcome to the application"
    })
  });


  app.use("/api/tasks", taskRoutes)

  export default app