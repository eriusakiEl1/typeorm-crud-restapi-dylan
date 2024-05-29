import { 
    Column, CreateDateColumn, 
    Entity, PrimaryGeneratedColumn, 
    UpdateDateColumn, BaseEntity
} from "typeorm";

@Entity()
export class User extends BaseEntity{
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    firstname: string

    @Column()
    lastname: String

    @Column({
        default: true
    })
    active: boolean

    @CreateDateColumn()
    createdAt: Date

    @UpdateDateColumn()
    updateAt: Date
}