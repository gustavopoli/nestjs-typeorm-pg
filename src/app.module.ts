import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UsersModule } from './users/users.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
        host: 'localhost',
        port: 5432,
        username: 'user_db',
        password: 'pass_db',
        database: 'db_reports',
        type: 'postgres' ,
        entities: [
            //__dirname + '/../**/*.entity{.ts,.js}',
            'dist/**/*.entity{.ts,.js}',
        ],
        synchronize: true,
    }),
    UsersModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
