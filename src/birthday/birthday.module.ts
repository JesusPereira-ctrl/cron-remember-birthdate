import { Module } from '@nestjs/common';
import { BirthdayService } from './birthday.service';
import { BirthdayController } from './birthday.controller';
import { CommonModule } from 'src/common/common.module';

@Module({
  controllers: [BirthdayController],
  providers: [BirthdayService],
  imports: [CommonModule],
})
export class BirthdayModule {}
