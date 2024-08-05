const fs = require('fs');
const helmet = require("helmet");
const https = require('https');
const cors = require('cors');
const zlib = require("compression");
const path = require("path");
const express = require("express");
const app = express();

/**
 * Helmet Security Headers
 * */
app.use(
  helmet({
    contentSecurityPolicy: false,
  })
);
/**
 * HTTP compression data
 * */
app.use(zlib());
app.use(cors({
  methods: ['GET'],
  origin: '*',
}))
app.use(express.static(path.join(__dirname, "build")));
app.get("*", function (req, res) {
  console.log(`${req.method}: ${req.url}`);
  res.sendFile(path.join(__dirname, "build/index.html"));
});

https.createServer({
  cert: fs.readFileSync(path.join(__dirname, 'certs/cert.pem')),
  key: fs.readFileSync(path.join(__dirname, 'certs/key.pem')),
}, app).listen(process.env.PORT || 443, () => {
  console.log('Freesouth web running');
});