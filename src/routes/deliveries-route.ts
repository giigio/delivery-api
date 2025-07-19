import { Router } from "express";

import { DeliveriesController } from "@/controllers/deliveries-controller";
import { DeliveriesStatusController } from "@/controllers/deliveries-status-controller";

import { ensureAuth } from "@/middlewares/ensure-auth";
import { verifyUserAuth } from "@/middlewares/verifyUserAuth";

const deliveriesRoutes = Router();

const deliveriesController = new DeliveriesController();
const deliveriesStatusController = new DeliveriesStatusController();

const deliveriesRoles = ["sales"];

deliveriesRoutes.use(ensureAuth, verifyUserAuth(deliveriesRoles));

deliveriesRoutes.get("/", deliveriesController.index);
deliveriesRoutes.post("/", deliveriesController.create);
deliveriesRoutes.patch("/:id/status", deliveriesStatusController.update);

export { deliveriesRoutes };
