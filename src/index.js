import express from "express";

const PORT = process.env.PORT || 3000;

const app = express();

app.get("/", async (req, res) => {
  res.send('Hello world Mac')
});

  app.listen(PORT, () => {
    console.log("Started at http://localhost:%d", PORT);
  });
