var express = require("express");
var router = express.Router();
const axios = require("axios");
const cheerio = require("cheerio");
let jwt = require("express-jwt");
let jwks = require("jwks-rsa");

router.get("/", async (req, res) => {
  let val = (
    await fetchHTML(
      "https://vsmarketplacebadge.apphb.com/installs/Zowe.vscode-extension-for-zowe.svg"
    )
  ).substring(10);
  res.json({
    downloads: val,
  });
});

async function fetchHTML(url) {
  const { data } = await axios.get(url);
  const $ = cheerio.load(data);
  return $("svg").attr("aria-label");
}

let jwtCheck = jwt({
  secret: jwks.expressJwtSecret({
    cache: true,
    rateLimit: true,
    jwksRequestsPerMinute: 5,
    jwksUri: "https://test-0109975606.eu.auth0.com/.well-known/jwks.json",
  }),
  audience: "https://test.zowe.api",
  issuer: "https://test-0109975606.eu.auth0.com/",
  algorithms: ["RS256"],
});

router.get("/secure", jwtCheck, (req, res) => {
  res.json({
    message: "You are authenticated!!",
  });
});

module.exports = router;
