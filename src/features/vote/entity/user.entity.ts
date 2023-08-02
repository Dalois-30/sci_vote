import { IsString, IsEmail, IsNotEmpty, IsDate } from 'class-validator';
import { Column, ObjectIdColumn, Entity, PrimaryGeneratedColumn, CreateDateColumn, UpdateDateColumn, PrimaryColumn, OneToMany } from 'typeorm';
import { UserVote } from './userVote.entity';

@Entity()
export class User {
    @PrimaryGeneratedColumn()
    id: number;

    @IsString()
    @IsNotEmpty()
    @Column()
    email: string;

    @IsString()
    @IsNotEmpty()
    @Column()
    publicAddress: string;

    @IsString()
    @IsNotEmpty()
    @Column()
    privateAddress: string;

    @OneToMany((type) => UserVote, (user) => user.vote)
    votes: UserVote[]

    @CreateDateColumn({ type: "timestamp", default: () => "CURRENT_TIMESTAMP(6)" })
    public created_at: Date;

    @UpdateDateColumn({ type: "timestamp", default: () => "CURRENT_TIMESTAMP(6)", onUpdate: "CURRENT_TIMESTAMP(6)" })
    public updated_at: Date;

}