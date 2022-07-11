import type { HttpContextContract } from "@ioc:Adonis/Core/HttpContext";
import Task from "App/Models/Task";
import CreateTaskValidator from "App/Validators/CreateTaskValidator";

export default class TasksController {
  async create({ request, auth }: HttpContextContract) {
    const payload = await request.validate(CreateTaskValidator);

    let columnId = request.param("columnId");
    const { id: userId } = auth.use("api").user!;

    let task = await Task.create({
      title: payload.title,
      description: payload.description,
      subtasks: payload.subtasks || [],
      columnId,
      userId,
    });
    return task;
  }
}
