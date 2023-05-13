const express = require("express");
const shortid = require("shortid");

const app = express();
app.use(express.json());

const urls = {};

app.post("/shorten", (req, res) => {
  const { originalUrl } = req.body;
  const shortUrl = shortid.generate();

  urls[shortUrl] = originalUrl;

  res.json({ shortUrl });
});

app.get("/:shortUrl", (req, res) => {
  const { shortUrl } = req.params;
  const originalUrl = urls[shortUrl];

  if (originalUrl) {
    res.redirect(originalUrl);
  } else {
    res.status(404).json({ error: "URL not found" });
  }
});

const port = 3000;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
