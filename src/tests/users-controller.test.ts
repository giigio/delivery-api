import request from "supertest";
import { app } from "@/app";
import { prisma } from "@/database/prisma";
describe("UsersController", () => {
  let user_id: string;

  afterAll(async () => {
    await prisma.users.delete({
      where: {
        id: user_id,
      },
    });
  });

  it("should create a new user successfully", async () => {
    const response = await request(app).post("/users").send({
      name: "Barbara",
      email: "barbara@mail.com",
      password: "password123",
    });

    expect(response.status).toBe(201);
    expect(response.body).toHaveProperty("id");
    expect(response.body.name).toBe("Barbara");

    user_id = response.body.id;
  });

  it("should throw error when creating user with existing email", async () => {
    const response = await request(app).post("/users").send({
      name: "Duplicated Barbara",
      email: "barbara@mail.com",
      password: "password123",
    });

    expect(response.status).toBe(409);
    expect(response.body).toHaveProperty("message");
    expect(response.body.message).toBe("User already exists");
  });

  it("should throw a validation error if email is invalid", async () => {
    const response = await request(app).post("/users").send({
      name: "Invalid Email User",
      email: "invalid-email",
      password: "password123",
    });

    expect(response.status).toBe(400);
    expect(response.body).toHaveProperty("message");
    expect(response.body.message).toBe("validation error");
  });
});
