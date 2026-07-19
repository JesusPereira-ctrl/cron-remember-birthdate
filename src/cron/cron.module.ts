import { Module } from '@nestjs/common';
import { BotModule } from 'src/bot/bot.module';
import { CronService } from './cron.service';
import { CommonModule } from 'src/common/common.module';

@Module({
  providers: [CronService],
  imports: [BotModule, CommonModule],
})
export class CronModule {}
