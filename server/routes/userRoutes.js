import express from "express";
import { getUsers, addUser, updateUser, deleteUser, toggleUserStatus } from "../controllers/userController.js";

const router = express.Router();

router.get("/", getUsers);
router.post("/", addUser);
router.put("/:id", updateUser);
router.delete("/:id", deleteUser);
router.patch("/status/:id", toggleUserStatus);

export default router;
