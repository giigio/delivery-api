import { Request, Response } from "express";
import { AppError } from "@/utils/AppError";
import { prisma } from "@/database/prisma";
import { verifyUserAuth } from "@/middlewares/verifyUserAuth";

class DeliveriesController {
  async create(request: Request, response: Response) {
    return response.json({ message: "ok create delivery" });
  }
}

export { DeliveriesController };
