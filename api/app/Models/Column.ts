import { DateTime } from 'luxon'
import { BaseModel, BelongsTo, belongsTo, column, HasMany, hasMany } from '@ioc:Adonis/Lucid/Orm'
import Task from './Task';
import Board from './Board';
import User from './user';

export default class Column extends BaseModel {
  @column({ isPrimary: true })
  public id: number

  @column()
  public name: string;

  @column()
  public boardId: number;

  @column()
  public userId: number;

  @belongsTo(() => Board)
  public board: BelongsTo<typeof Board>

  @belongsTo(() => User)
  public user: BelongsTo<typeof User>

  @hasMany(() => Task)
  public tasks: HasMany<typeof Task>

  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime
}
