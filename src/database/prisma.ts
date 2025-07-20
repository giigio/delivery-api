import { PrismaClient } from "../generated/prisma";
import { withAccelerate } from "@prisma/extension-accelerate";

export const prisma = new PrismaClient({
  log: process.env.NODE_ENV === "development" ? ["query"] : ["error"],
}).$extends(withAccelerate());
