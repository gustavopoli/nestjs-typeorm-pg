import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity('tbl_users')
export class User {

    @PrimaryGeneratedColumn("uuid")
    //@Column()
    //@Generated("uuid")
    id: string;

    @Column()
    name: string;
}
