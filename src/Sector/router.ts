import { Router } from "express";
import { getSector, createSector } from "./controller";

const router = Router();

router.post("/sector", createSector);
router.get("/sector", getSector);


export default router
