import { schema, CustomMessages } from "@ioc:Adonis/Core/Validator";
import type { HttpContextContract } from "@ioc:Adonis/Core/HttpContext";

export default class CreateTaskValidator {
  constructor(protected ctx: HttpContextContract) {}

  public schema = schema.create({
    title: schema.string(),
    description: schema.string.nullable(),
    subtasks: schema.array.optional().members(
      schema.object().members({
        task: schema.string(),
        completed: schema.boolean(),
      })
    ),
  });

  public messages: CustomMessages = {};
}
