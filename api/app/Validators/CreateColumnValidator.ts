import { schema, rules, CustomMessages } from '@ioc:Adonis/Core/Validator'
import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

export default class CreateColumnValidator {
  constructor(protected ctx: HttpContextContract) {}

  public schema =  schema.create({
    name: schema.string({}, [
      rules.unique({
        table: "columns",
        column: "name",
        caseInsensitive: true,
      }),
    ])
  });

  public messages: CustomMessages = {}
}
