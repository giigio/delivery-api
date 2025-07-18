import { env } from "@/env";

export const authConfig = {
  jwt: {
    secret: env.JWT_SECRET,
    expiresIn: "1d" as `${number}${"d" | "h" | "m" | "s"}`,
  },
};
