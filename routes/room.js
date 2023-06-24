import express from "express";
import { verifyUser, verifyAdmin } from "../utils/verifyToken.js";
const router = express.Router();
import {
  createRoom,
  updateRoom,
  deleteRoom,
  getRoom,
  getAllRoom,
} from "../controllers/rooms.js";
router.post("/:hotelid", verifyAdmin, createRoom);
//UPDATE
router.put("/:id", verifyAdmin, updateRoom);
//DELETE
router.delete("/:id/:hotelid", verifyAdmin, deleteRoom);
//GET
router.get("/:id", getRoom);
//GET ALL
router.get("/", getAllRoom);
export default router;
