import { Module } from '@nestjs/common';
import { VoteController } from './vote.controller';
import { VoteService } from './vote.service';
import { SharedModule } from 'src/shared/shared.module';

@Module({
  controllers: [VoteController],
  providers: [VoteService],
  imports: [SharedModule]
})
export class VoteModule {}
