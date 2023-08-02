import { IsString, IsEmail, IsNotEmpty, IsDate } from 'class-validator';
import { Column, ObjectIdColumn, Entity, PrimaryGeneratedColumn, CreateDateColumn, UpdateDateColumn, PrimaryColumn, OneToMany, ManyToOne } from 'typeorm';
import { Vote } from './vote.entity';

@Entity()
export class Candidate {
    @PrimaryGeneratedColumn()
    id: number;

    @IsString()
    @IsNotEmpty()
    @Column()
    name: string;

    @IsString()
    @IsNotEmpty()
    @Column()
    voteCount: string;

    @ManyToOne((type) => Vote, (vote) => vote.candidates)
    vote: Vote;

    @CreateDateColumn({ type: "timestamp", default: () => "CURRENT_TIMESTAMP(6)" })
    public created_at: Date;

    @UpdateDateColumn({ type: "timestamp", default: () => "CURRENT_TIMESTAMP(6)", onUpdate: "CURRENT_TIMESTAMP(6)" })
    public updated_at: Date;

}