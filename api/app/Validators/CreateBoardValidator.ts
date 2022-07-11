import { schema, rules, CustomMessages } from '@ioc:Adonis/Core/Validator'
import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

export default class CreateBoardValidator {
  constructor(protected ctx: HttpContextContract) {}

  public schema =schema.create({
    name: schema.string({}, [
      rules.unique({
        table: "boards",
        column: "name",
        caseInsensitive: true,
      }),
    ]),
    columns: schema.array().members(schema.string()),
  });

  public messages: CustomMessages = {}
}
