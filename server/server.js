const express = require("express");
const cors = require("cors");
const { runInNewContext } = require("vm");

const app = express();


app.use(cors());

app.use(express.json()); // When we want to be able to accept JSON.

app.get("/api/compliment/", (req, res) => {
  const compliments = ["Gee, you're a smart cookie!",
					 "Cool shirt!",
					 "Your Javascript skills are stellar.",
  ];

  // choose random compliment
  let randomIndex = Math.floor(Math.random() * compliments.length);
  let randomCompliment = compliments[randomIndex];

  res.status(200).send(randomCompliment);
  
});

app.get("/api/compliment/button/fortuneCookie", (req, res) => {
  const fortunes = ["Dont quit", "Dont give up", "U got this", "Breathe"];

  // // let randomIndex = Math.floor(Math.random() * fortunes.length);
  // // let randomFortunes = fortunes[randomIndex];

  res.status(200).send(fortunes);
})

app.get("/api/inventory", (req,res) => {
  console.log(typeof(req.query.items))
  res.status(200).send(`${queryInput.value}, is a good choice`)
})


app.listen(4000, () => console.log("Server running on 4000"));
