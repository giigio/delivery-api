import { Request, Response } from "express";

class UsersController {
  index(request: Request, response: Response) {
    return response.json({ message: "ok index" });
  }
  create(request: Request, response: Response) {
    return response.json({ message: "ok create" });
  }
}

export { UsersController };
