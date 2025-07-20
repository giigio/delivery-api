import { Request, Response } from "express";
import { AppError } from "@/utils/AppError";
import { authConfig } from "@/configs/auth";
import { sign } from "jsonwebtoken";
import { prisma } from "@/database/prisma";
import { z } from "zod";
import { compare } from "bcrypt";

class SessionsController {
  async create(request: Request, response: Response) {
    const bodySchema = z.object({
      email: z.email(),
      password: z.string().min(6),
    });

    const { email, password } = bodySchema.parse(request.body);

    const user = await prisma.users.findFirst({
      where: { email },
    });

    if (!user) {
      throw new AppError("Invalid user or password", 401);
    }

    const passwordMatch = await compare(password, user.password);

    if (!passwordMatch) {
      throw new AppError("Invalid user or password", 401);
    }

    const { secret, expiresIn } = authConfig.jwt;
    const token = sign({ role: user.role ?? "customer" }, secret, {
      subject: user.id,
      expiresIn,
    });

    const { password: hashedPassword, ...userwithoutPassword } = user;

    return response.json({ token, ...userwithoutPassword });
  }
}

export { SessionsController };
