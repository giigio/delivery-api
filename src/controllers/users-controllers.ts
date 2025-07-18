import { NextFunction, Request, Response } from "express";
import { z } from "zod";
import { hash } from "bcrypt";

class UsersController {
  index(request: Request, response: Response, next: NextFunction) {
    return response.json({ message: "ok index" });
  }
  async create(request: Request, response: Response, next: NextFunction) {
    const bodySchema = z.object({
      name: z.string().trim().min(2),
      email: z.email(),
      password: z.string().min(6),
    });

    const { name, email, password } = bodySchema.parse(request.body);

    const hashedPassword = await hash(password, 8);

    return response.json({ message: "ok create" });
  }
}

export { UsersController };
