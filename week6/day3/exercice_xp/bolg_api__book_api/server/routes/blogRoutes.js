const express = require("express");
const router = express.Router();
const blogCtrl = require("../controllers/blogController");

router.get("/", blogCtrl.getPosts);
router.get("/:id", blogCtrl.getPost);
router.post("/", blogCtrl.createPost);
router.put("/:id", blogCtrl.updatePost);
router.delete("/:id", blogCtrl.deletePost);

module.exports = router;
