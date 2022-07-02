import type { HttpContextContract } from "@ioc:Adonis/Core/HttpContext";
import Column from "App/Models/Column";

export default class ColumnsController {
  async create({ request, auth }: HttpContextContract) {
    let name = request.input("name");
    const { id: userId } = auth.use("api").user!;
    let boardId = request.param("boardId");
    let column = await Column.create({
      name,
      boardId,
      userId,
    });
    return column;
  }

  async get({ request }: HttpContextContract) {
    let columnId = request.param("columnId");
    let boardId = request.param("boardId");

    let column = await Column.find({
      id: columnId,
      boardId: boardId,
    });

    return column;
  }

  async all({ request }: HttpContextContract) {
    let boardId = request.param("boardId");
    let columns = await Column.query()
      .where("boardId", boardId)
      .preload("tasks");
    return columns;
  }
}
