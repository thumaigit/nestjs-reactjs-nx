import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PrismaService } from 'src/prisma.service';
import { UserController } from 'src/users/user.controller';
import { UserService } from 'src/users/user.service';
import { PostController } from 'src/posts/post.controller';
import { PostService } from 'src/posts/post.service';

@Module({
  imports: [ConfigModule.forRoot()],
  controllers: [AppController, UserController, PostController],
  providers: [AppService, UserService, PostService, PrismaService],
})
export class AppModule { }
