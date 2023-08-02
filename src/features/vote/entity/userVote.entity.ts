import { IsString, IsNotEmpty } from 'class-validator';
import { Column, Entity, PrimaryGeneratedColumn, CreateDateColumn, UpdateDateColumn, ManyToOne } from 'typeorm';
import { Vote } from './vote.entity';
import { User } from './user.entity';

@Entity()
export class UserVote {
    @PrimaryGeneratedColumn()
    id: number;

    @ManyToOne((type) => Vote, (vote) => vote.candidates)
    user: User;

    @ManyToOne((type) => Vote, (vote) => vote.candidates)
    vote: Vote;

    @CreateDateColumn({ type: "timestamp", default: () => "CURRENT_TIMESTAMP(6)" })
    public created_at: Date;

    @UpdateDateColumn({ type: "timestamp", default: () => "CURRENT_TIMESTAMP(6)", onUpdate: "CURRENT_TIMESTAMP(6)" })
    public updated_at: Date;

}