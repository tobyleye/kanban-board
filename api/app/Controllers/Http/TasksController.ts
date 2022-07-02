import type { HttpContextContract } from "@ioc:Adonis/Core/HttpContext";
import Task from "App/Models/Task";

export default class TasksController {
  async createTask({ request, auth }: HttpContextContract) {
    let title = request.input("title");
    let description = request.input("description");
    let subtasks = request.input("subtasks");
    let columnId = request.param("columnId");
    const { id: userId } = auth.use("api").user!;

    let task = await Task.create({
      title,
      description,
      subtasks,
      columnId,
      userId,
    });
    return task;
  }
}
