import { Router } from "express";
import { DeliveriesController } from "@/controllers/deliveries-controller";
import { ensureAuth } from "@/middlewares/ensure-auth";
import { verifyUserAuth } from "@/middlewares/verifyUserAuth";

const deliveriesRoutes = Router();
const deliveriesController = new DeliveriesController();
const deliveriesRoles = ["sales"];

deliveriesRoutes.use(ensureAuth, verifyUserAuth(deliveriesRoles));
deliveriesRoutes.post("/", deliveriesController.create);

export { deliveriesRoutes };
