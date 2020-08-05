import { PrimaryGeneratedColumn, Column, Entity, CreateDateColumn } from 'typeorm'

@Entity({ name: 'user' })
export class User {
  @PrimaryGeneratedColumn('uuid')
  id: string
  
  @CreateDateColumn({ type: 'timestamptz', default: () => 'CURRENT_TIMESTAMP'})
  createDateTime: Date

  @Column({ type: 'varchar', length: 300 })
  name: string;
  
  @Column({ type: 'varchar', length: 300 })
  lastName: string;
  
  // @Column({ type => Order, order = order.user)
  // orders: Order[];
}
