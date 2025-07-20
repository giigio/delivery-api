import { Request, Response } from "express";
import { prisma } from "@/database/prisma";
import { z } from "zod";
import { AppError } from "@/utils/AppError";

class DeliveriesLogsController {
  async show(request: Request, response: Response) {
    const paramsSchema = z.object({
      delivery_id: z.uuid(),
    });

    const { delivery_id } = paramsSchema.parse(request.params);

    const delivery = await prisma.delivery.findUnique({
      where: { id: delivery_id },
      include: {
        logs: { select: { description: true, updatedAt: true } },
        user: { select: { id: true, name: true, email: true } },
      },
    });

    if (!delivery) {
      throw new AppError("Delivery not found", 404);
    }

    if (
      request.user?.role === "customer" &&
      request.user?.id !== delivery?.userId
    ) {
      throw new AppError("You do not have permission to view these logs", 401);
    }

    return response.json(delivery);
  }

  async create(request: Request, response: Response) {
    const bodySchema = z.object({
      delivery_id: z.uuid(),
      description: z.string(),
    });

    const { delivery_id, description } = bodySchema.parse(request.body);

    const delivery = await prisma.delivery.findUnique({
      where: { id: delivery_id },
    });

    if (!delivery) {
      throw new AppError("Delivery not found", 404);
    }

    if (delivery.status === "delivered") {
      throw new AppError("This order has already been delivered", 400);
    }

    if (delivery.status === "processing") {
      throw new AppError("Cannot log delivery while it is processing", 400);
    }

    await prisma.deliveryLog.create({
      data: {
        deliveryId: delivery_id,
        description: description,
      },
    });

    return response.json();
  }
}

export { DeliveriesLogsController };
