import BaseSchema from "@ioc:Adonis/Lucid/Schema";

export default class extends BaseSchema {
  protected tableName = "tasks";

  public async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.increments("id");
      table.string("title").notNullable();
      table.string("description");
      table.json("subtasks");
      table
        .integer("column_id")
        .references("columns.id")
        .onDelete("CASCADE")
        .notNullable();
      table
        .integer("user_id")
        .references("users.id")
        .onDelete("CASCADE")
        .notNullable();
      table.timestamp("created_at", { useTz: true }).defaultTo(this.now());
      table.timestamp("updated_at", { useTz: true }).defaultTo(this.now());
    });
  }

  public async down() {
    this.schema.dropTable(this.tableName);
  }
}
