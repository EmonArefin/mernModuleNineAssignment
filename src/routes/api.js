const express = require("express");
const router = express.Router();

const adminController = require("../controllers/adminController");
router.get("/admin-create", adminController.create);
router.get("/admin-read", adminController.read);
router.get("/admin-delete", adminController.delete);
router.get("/admin-update", adminController.update);

const postController = require("../controllers/postController");
router.get("/post-create", postController.create);
router.get("/post-read", postController.read);
router.get("/post-delete", postController.delete);
router.get("/post-update", postController.update);

const subAdminController = require("../controllers/subAdminController");
router.get("/sub-create", subAdminController.create);
router.get("/sub-read", subAdminController.read);
router.get("/sub-delete", subAdminController.delete);
router.get("/sub-update", subAdminController.update);

const userController = require("../controllers/userController");
router.get("/user-create", userController.create);
router.get("/user-read", userController.read);
router.get("/user-delete", userController.delete);
router.get("/user-update", userController.update);



module.exports = router;