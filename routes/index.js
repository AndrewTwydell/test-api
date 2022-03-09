const express = require("express");
const router = express.Router();
const {Thing} = require("../models/thing");

router.get('/', async (req,res) => {
  const things = await Thing.get();
  return res.status(200).json(things);
})
router.post("/", async (req,res)=>{
  const thingAdded = await Thing.insert(req.body);
  return res.status(201).json(thingAdded);
})

module.exports = router;
