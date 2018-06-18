const express = require("express");
const axios = require("axios");

const app = express();

app.use(express.static(`${__dirname}/public`));

app.get("/", (req, res) => {
  res.end();
});

const url = "https://goodparts.dokku-hosted.thruhere.net/people";

app.get("/users", async (req, res) => {
  ({ data } = await axios.get(url).catch(err => console.log(err)));
  data = data.map(({ first_name, last_name, job }) => {
    return {
      firstName: first_name,
      lastName: last_name,
      job
    };
  });
  res.send(data);
});

app.listen(5000, () => console.log("Listening on port 5000"));
