const express = require("express");
const router = express.Router();
const bookCtrl = require("../controllers/bookController");

router.get("/", bookCtrl.getBooks);
router.get("/:bookId", bookCtrl.getBook);
router.post("/", bookCtrl.createBook);
router.put("/:bookId", bookCtrl.updateBook);
router.delete("/:bookId", bookCtrl.deleteBook);

module.exports = router;
