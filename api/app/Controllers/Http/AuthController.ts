import type { HttpContextContract } from "@ioc:Adonis/Core/HttpContext";
import User from "App/Models/User";

export default class AuthController {
  async createAccount({ request, auth }: HttpContextContract) {
    const email = request.input("email");
    const password = request.input("password");
    await User.create({
      email: email,
      password: password,
    });
    const token = await auth.use("api").attempt(email, password);
    return token;
  }

  async login({ auth, request }: HttpContextContract) {
    const email = request.input("email");
    const password = request.input("password");
    const token = await auth.use("api").attempt(email, password);
    return token;
  }
}
