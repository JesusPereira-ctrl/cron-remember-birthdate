import { Injectable } from '@nestjs/common';
import TelegramBot from 'node-telegram-bot-api';

@Injectable()
export class BotService {
  bot = new TelegramBot(process.env.BOT_TOKEN!, { polling: false });

  async enviarMensaje(message: string) {
    await this.bot.sendMessage(process.env.CHAT_ID!, message);
  }
}
