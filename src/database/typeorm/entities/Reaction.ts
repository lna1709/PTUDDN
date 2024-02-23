import { ReactionType } from 'src/utils/constants';
import { Column, Entity, PrimaryGeneratedColumn, ManyToOne } from 'typeorm';
import { Message } from './Message';

@Entity({ name: 'reactions' })
export class Reaction {
    @PrimaryGeneratedColumn()
    id: number;

    @ManyToOne(() => Message, (message) => message.reactions)
    message: Message;

    @Column({ type: 'enum', enum: ReactionType, default: ReactionType.OTHER })
    reactionType: ReactionType;
}