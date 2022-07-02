import type { HttpContextContract } from "@ioc:Adonis/Core/HttpContext";
import Board from "App/Models/Board";

export default class BoardsController {
  async create({ request, auth }: HttpContextContract) {
    let name = request.input("name");
    const { id: userId } = auth.use("api").user!;
    let board = await Board.create({
      name,
      userId,
    });
    return board;
  }

  async get({ request }: HttpContextContract) {
    let id = request.param('id')
    let board = await Board.findByOrFail('id', id)
    return board;
  }

}
