const express = require("express");
const router = express.Router();
const userCtrl = require("../controllers/userController");

router.post("/register", userCtrl.register);
router.post("/login", userCtrl.login);
router.get("/users", userCtrl.getUsers);
router.get("/users/:id", userCtrl.getUser);
router.put("/users/:id", userCtrl.updateUser);

module.exports = router;
