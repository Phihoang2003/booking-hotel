import express from "express";
import { verifyUser, verifyAdmin } from "../utils/verifyToken.js";
const router = express.Router();
import {
  createHotel,
  updateHotel,
  deleteHotel,
  getHotel,
  getAllHotel,
} from "../controllers/hotels.js";
router.post("/", verifyAdmin, createHotel);
//UPDATE
router.put("/:id", verifyAdmin, updateHotel);
//DELETE
router.delete("/:id", verifyAdmin, deleteHotel);
//GET
router.get("/:id", getHotel);
//GET ALL
router.get("/", getAllHotel);
export default router;
