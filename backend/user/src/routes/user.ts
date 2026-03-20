import express from "express";
import { getAllusers, getAUser, loginUser, myProfile, updateName, verifyUser } from "../controllers/user.js";
import { isAuth } from "../middleware/isAuth.js";

const router = express.Router();

router.post("/login", loginUser);
router.post("/verify", verifyUser);
router.get("/me", isAuth, myProfile); // pahele isAuth ran karega then myProfile.
router.get("/user/all", isAuth, getAllusers);
router.get("/user/:id", getAUser);
router.post("/update/user", isAuth, updateName);

export default router;