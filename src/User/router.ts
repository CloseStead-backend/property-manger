import { Router } from "express";
import { createUser, getAll, update } from "./controller";

const router = Router();

router.post("/user", createUser);
router.get("/user", getAll)
router.patch("/user/:id", update)

export default router;
