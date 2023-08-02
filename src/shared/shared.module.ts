import { Module } from '@nestjs/common';
import { DatabaseModule } from './database/database.module';
import { EnvModule } from './env/env.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Candidate } from 'src/features/vote/entity/candidate.entity';
import { User } from 'src/features/vote/entity/user.entity';
import { Vote } from 'src/features/vote/entity/vote.entity';
import { UserVote } from 'src/features/vote/entity/userVote.entity';
// import { HttpModule } from '@nestjs/axios';

@Module({
  imports: [
    DatabaseModule, 
    EnvModule,
    TypeOrmModule.forFeature([Vote]),
    TypeOrmModule.forFeature([Candidate]),
    TypeOrmModule.forFeature([User]),
    TypeOrmModule.forFeature([UserVote]),
    // TypeOrmModule.forFeature([Posts]),
    // TypeOrmModule.forFeature([Comments]),
    // HttpModule,
    // PassportModule.register({ defaultStrategy: 'jwt', session: false }),
    // JwtModule.register({
    //     secret: process.env.SECRET_KEY,
    //     signOptions: {
    //         expiresIn: EXPIRES_IN,
    //     },
    // }),
    // UploadModule,
  ],
  exports: [
    DatabaseModule, 
    EnvModule,
    TypeOrmModule.forFeature([Vote]),
    TypeOrmModule.forFeature([Candidate]),
    TypeOrmModule.forFeature([User]),
    TypeOrmModule.forFeature([UserVote]),
    // TypeOrmModule.forFeature([Posts]),
    // TypeOrmModule.forFeature([Comments]),
    // HttpModule,
    // PassportModule.register({ defaultStrategy: 'jwt', session: false }),
    // JwtModule.register({
    //     secret: process.env.SECRET_KEY,
    //     signOptions: {
    //         expiresIn: EXPIRES_IN,
    //     },
    // }),
    // UploadModule
  ],
  providers: []
})
export class SharedModule {}
