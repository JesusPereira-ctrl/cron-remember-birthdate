import { Module } from '@nestjs/common';
import { ScheduleModule } from '@nestjs/schedule';
import { CronModule } from './cron/cron.module';
import { ConfigModule } from '@nestjs/config';
import { BotModule } from './bot/bot.module';
import { BirthdayModule } from './birthday/birthday.module';
import { CommonModule } from './common/common.module';

@Module({
  imports: [
    ScheduleModule.forRoot(),
    CronModule,
    ConfigModule.forRoot(),
    BotModule,
    BirthdayModule,
    CommonModule,
  ],
  providers: [],
})
export class AppModule {}
