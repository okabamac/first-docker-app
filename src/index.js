import express from "express";
import models from './models'
const PORT = process.env.PORT || 3000;

const app = express();

app.get("/", async (req, res) => {
  res.send('Hello world Mac')
});

app.use("*", (req, res) => {
  res.status(404).json({
    status: 404,
    error: "Sorry, we couldn't find that!"
  });
});

app.use((err, req, res, next) => {
  if (!err) return next();
  return res.status(400).json({
    status: 400,
    error: `Failed to decode param: ${req.url}`
  });
});
// sync() will create all table if they doesn't exist in database
models.sequelize.sync().then(() => {
 app.listen(PORT, () => {
   console.log("Started at http://localhost:%d", PORT);
 });
});
 
