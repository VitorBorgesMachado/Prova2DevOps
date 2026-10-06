import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('inventory')
export class Inventory {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  item_code: string;

  @Column()
  description: string;

  @Column()
  quantity: number;

  @Column()
  min_stock: number;
}