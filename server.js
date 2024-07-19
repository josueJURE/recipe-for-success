const express = require("express");
const app = express();
app.use(express.json());
const path = require("path");
const recipeContoller = require("./controllers/recipes.js");
const streamController = require("./controllers/stream.js");
const emailController = require("./controllers/email.js");


app.get("/stream", streamController.processStream);
app.get("/email", emailController.processEmail);
app.post("/upload", recipeContoller.processUpload);
app.post("/email", emailController.processEmail);

app.use(express.static(path.join(__dirname, "public")));
const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
