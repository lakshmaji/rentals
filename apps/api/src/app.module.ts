import * as Joi from 'joi';
import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import appConfig from './config/app.config';
import databaseConfig, { DatabaseConfig } from './config/database.config';
import authConfig from './config/auth.config';
import { UserModule } from './user/user.module';
import { APP_GUARD } from '@nestjs/core';
import { JwtAuthGuard } from './user/jwt-auth.guard';
import { ApartmentModule } from './apartment/apartment.module';
import { HealthModule } from './health/health.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      validationSchema: Joi.object({
        PORT: Joi.number().default(6002),
        DATABASE_HOST: Joi.string().default('localhost'),
        DATABASE_PORT: Joi.number().required().valid(5432),
        DATABASE_USERNAME: Joi.string().required(),
        DATABASE_PASSWORD: Joi.string().required(),
        DATABASE: Joi.string().required(),
        JWT_SECRET: Joi.string().required(),
        JWT_EXPIRES_IN: Joi.string().alphanum().required(),
        CLIENT_ORIGINS: Joi.string().required().uri({
          allowRelative: false,
        }),
      }),
      validationOptions: {
        allowUnknown: true,
        abortEarly: true,
      },
      isGlobal: true,
      envFilePath: '.env',
      load: [appConfig, databaseConfig, authConfig],
      cache: true,
    }),
    TypeOrmModule.forRootAsync({
      imports: [ConfigModule],
      useFactory: (config: ConfigService) => {
        const dbConfig = config.get<DatabaseConfig>('db');
        return {
          entities: ['dist/**/*.entity{.ts,.js}'],
          synchronize: true,
          autoLoadEntities: true,
          host: dbConfig.host,
          port: dbConfig.port,
          username: dbConfig.username,
          password: dbConfig.password,
          database: dbConfig.database,
          type: 'postgres',
        };
      },
      inject: [ConfigService],
    }),
    UserModule,
    ApartmentModule,
    HealthModule,
  ],
  controllers: [AppController],
  providers: [
    AppService,
    {
      provide: APP_GUARD,
      useClass: JwtAuthGuard,
    },
  ],
})
export class AppModule {}
