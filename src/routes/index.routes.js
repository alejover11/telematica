const express = require("express");
const router = express.Router();

// Controllers
const { renderIndex, renderAbout, renderHome, renderEncuesta } = require("../controllers/index.controller");

router.get("/", renderIndex);
router.get("/about", renderAbout);
router.get("/home", renderHome);
router.get("/encuesta",renderEncuesta);

module.exports = router;
