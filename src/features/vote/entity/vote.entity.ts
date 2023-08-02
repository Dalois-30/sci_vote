import { IsString, IsEmail, IsNotEmpty, IsDate } from 'class-validator';
import { Column, ObjectIdColumn, Entity, PrimaryGeneratedColumn, CreateDateColumn, UpdateDateColumn, OneToMany } from 'typeorm';
import { Candidate } from './candidate.entity';
import { UserVote } from './userVote.entity';

@Entity()
export class Vote {
    @PrimaryGeneratedColumn()
    id: number;

    @IsString()
    @IsNotEmpty()
    @Column()
    name: string;

    @IsString()
    @IsNotEmpty()
    @Column()
    subject: string;

    @IsString()
    @IsNotEmpty()
    @Column()
    status: string;

    @IsDate()
    @IsNotEmpty()
    @Column()
    endTime: Date;

    @OneToMany((type) => Candidate, (candidate) => candidate.vote)
    candidates: Candidate[]

    @OneToMany((type) => UserVote, (user) => user.user)
    users: UserVote[]

    @CreateDateColumn({ type: "timestamp", default: () => "CURRENT_TIMESTAMP(6)" })
    public created_at: Date;

    @UpdateDateColumn({ type: "timestamp", default: () => "CURRENT_TIMESTAMP(6)", onUpdate: "CURRENT_TIMESTAMP(6)" })
    public updated_at: Date;

}