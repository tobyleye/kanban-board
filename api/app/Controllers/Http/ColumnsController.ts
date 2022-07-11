import type { HttpContextContract } from "@ioc:Adonis/Core/HttpContext";
import Column from "App/Models/Column";
import CreateColumnValidator from "App/Validators/CreateColumnValidator";

export default class ColumnsController {
  async create({ request, auth }: HttpContextContract) {
    const { id: userId } = auth.use("api").user!;
    let boardId = request.param("boardId");
    let payload = await request.validate(CreateColumnValidator);

    let column = await Column.create({
      name: payload.name,
      boardId,
      userId,
    });

    return column;
  }

  async get({ request, response }: HttpContextContract) {
    let columnId = request.param("columnId");
    let boardId = request.param("boardId");

    let column = await Column.find({
      id: columnId,
      boardId: boardId,
    });
    if (!column) {
      return response.notFound();
    }

    await column.load("tasks");
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
