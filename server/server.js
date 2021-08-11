const express = require("express");
const morgan = require("morgan");
const mongoose = require("mongoose");
const cookieParser = require("cookie-parser");

const axios = require("axios");
require("dotenv").config();

const app = express();

const PORT = 8000;

// mongoose
//   .connect(CONNECTION_URL, { useNewUrlParser: true, useUnifiedTopology: true })
//   .then(() =>
//     app.listen(PORT, () => console.log(`Server running on port: ${PORT}`))
//   )
//   .catch((error) => console.log(error.message));

// mongoose.set("useFindAndModify", false);
// const User = require("./models/User");

// const userInput = {
//   username: "ColumbiaUser",
//   password: "123456",
// };

// const user = new User(userInput);
// user.save((err, document) => {
//   if (err) console.log(err);
//   console.log(document);
// });

app.use(function (req, res, next) {
  res.header(
    "Acces-Control-Allow-Methods",
    "OPTIONS, HEAD, GET, PUT, POST, DELETE"
  );
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  next();
});

app.use(cookieParser());
app.use(morgan("tiny"));
app.use(express.json());

const userRouter = require("./routes/User");

app.use("/user", userRouter);

app.get("/parks", async (req, res) => {
  const api_key = process.env.MYAPI_KEY;
  try {
    const parks_url = `https://developer.nps.gov/api/v1/parks?limit=496&api_key=${api_key}`;
    const parks_data = await axios.get(parks_url);

    res.json(parks_data.data);
  } catch (error) {
    console.log(error, "error");
  }
  console.log(req.params);
});
app.listen(PORT, () => {
  console.log(`listening on port ${PORT}`);
});
