import { Router } from "express";
import { usersRoutes } from "./users-routes";
import { sessionsRoutes } from "./sessions-route";
import { deliveriesRoutes } from "./deliveries-route";
import { deliveriesLogsRoutes } from "./deliveries-logs-route";

const routes = Router();

routes.use("/users", usersRoutes);
routes.use("/sessions", sessionsRoutes);
routes.use("/deliveries", deliveriesRoutes);
routes.use("/deliveries-logs", deliveriesLogsRoutes);

export { routes };
