const express = require("express");
const dotenv = require("dotenv");
const router = require("./routes/userRoutes");
const { errorHandler } = require("./middleware/middleware");
dotenv.config();

const app = express();
const port = process.env.MERN_PORT;

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
//User Router
app.use("/api/users", router);

app.use(errorHandler);

app.listen(port, () => {
  console.log(`Server is running at ${port}`);
});
