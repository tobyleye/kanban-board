import { DateTime } from 'luxon'
import { BaseModel, BelongsTo, belongsTo, column, HasMany, hasMany } from '@ioc:Adonis/Lucid/Orm'
import User from './user';
import Column from './Column';

export default class Board extends BaseModel {
  @column({ isPrimary: true })
  public id: number

  @column() 
  public name: string;

  @column() 
  public userId: number;

  @belongsTo(() => User)
  public user: BelongsTo<typeof User>

  @hasMany(() => Column)
  public columns: HasMany<typeof Column>

  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime
}
