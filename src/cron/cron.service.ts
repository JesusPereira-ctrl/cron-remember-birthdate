import { Injectable, Logger } from '@nestjs/common';
import { Cron } from '@nestjs/schedule';
import { BotService } from 'src/bot/bot.service';
import { PrismaService } from 'src/common/prisma.service';
import { Birthdays } from 'src/generated/prisma/client';

@Injectable()
export class CronService {
  private readonly logger = new Logger(CronService.name);

  constructor(
    private readonly botService: BotService,
    private readonly prismaService: PrismaService,
  ) {}

  @Cron('0 53 * * * *', {
    timeZone: 'America/Santiago',
  })
  async handleCron() {
    const tomorrow = new Date();
    tomorrow.setDate(tomorrow.getDate() + 1);

    const dates: Birthdays[] = await this.prismaService.birthdays.findMany({
      where: {
        day: tomorrow.getDate(),
        month: tomorrow.getMonth() + 1,
      },
    });

    const dayAsString = `${tomorrow.getFullYear()}/${tomorrow.getMonth() + 1}/${tomorrow.getDate()}`;
    let message = `Mañana dia ${dayAsString} es el cumpleaños de las siguientes personas\n`;

    for (const date of dates) {
      message += `${date.name} - ${date.day}/${date.month}\n`;
    }

    await this.botService.enviarMensaje(message);
    this.logger.log('Mensaje enviado por telegram');
  }
}
