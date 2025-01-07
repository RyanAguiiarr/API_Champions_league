import { Router } from "express"
import { deletePlyer, getPlayer, getPlayerById, postPlayer, updatePlayer } from "./src/controllers/players-controller"
import { getClubs } from "./src/controllers/clubs-controller"

const router = Router()

router.get("/players", getPlayer)
router.get("/players/:id", getPlayerById)
router.post("/players", postPlayer)
router.delete("/players/:id", deletePlyer)
router.patch("/players/:id", updatePlayer)

router.get("/clubs/", getClubs)

export default router