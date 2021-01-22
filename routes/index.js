var express = require("express");
var router = express.Router();

const vscodeRouter = require("./vscodeRouter");

router.use("/vscode", vscodeRouter);

router.get("/", function (req, res, next) {
  res.json({
    message: "Hello World! Zowe Community Metrics",
  });
});

module.exports = router;
