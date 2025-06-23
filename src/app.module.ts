import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { NoteModule } from './note/note.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'postgres',
      password: 'edilayehu',
      database: 'notepad_db',
      autoLoadEntities: true,
      synchronize: true, // Set to false in production!
    }),
    NoteModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
