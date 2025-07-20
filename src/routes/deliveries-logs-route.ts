import { Router } from "express";
import { DeliveriesLogsController } from "@/controllers/delivery-logs-controller";
import { ensureAuth } from "@/middlewares/ensure-auth";
import { verifyUserAuth } from "@/middlewares/verifyUserAuth";

const deliveriesLogsRoutes = Router();
const deliveriesLogsControllers = new DeliveriesLogsController();

deliveriesLogsRoutes.get(
  "/:delivery_id/logs",
  ensureAuth,
  verifyUserAuth(["sales", "customer"]),
  deliveriesLogsControllers.show
);

deliveriesLogsRoutes.post(
  "/",
  ensureAuth,
  verifyUserAuth(["sales"]),
  deliveriesLogsControllers.create
);

export { deliveriesLogsRoutes };
