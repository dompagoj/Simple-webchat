import { BaseEntity, Column, Entity, PrimaryGeneratedColumn } from 'typeorm'

@Entity()
export class ChatRoom extends BaseEntity {
  @PrimaryGeneratedColumn()
  public id: number | string

  @Column()
  public name: string
}
