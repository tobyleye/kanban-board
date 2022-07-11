import type { HttpContextContract } from "@ioc:Adonis/Core/HttpContext";
import Board from "App/Models/Board";
import Column from "App/Models/Column";
import CreateBoardValidator from "App/Validators/CreateBoardValidator";
export default class BoardsController {
  async create({ request, auth }: HttpContextContract) {
    const payload = await request.validate(CreateBoardValidator)

    const { id: userId } = auth.use("api").user!;

    const board = await Board.create({
      name: payload.name,
      userId,
    });

    const columns = payload.columns.map((col) => ({
      name: col,
      boardId: board.id,
      userId: userId,
    }));
    const createdCols = await Column.createMany(columns);

    const response = board.toJSON();
    response.columns = createdCols;
    return response;
  }

  async get({ request }: HttpContextContract) {
    let id = request.param("id");
    let board = await Board.findByOrFail("id", id);
    await board.load((loader) => {
      loader.load("columns", (columns) => {
        columns.preload("tasks");
      });
    });
    return board;
  }

  async all() {
    let boards = await Board.all();
    return boards;
  }
}
