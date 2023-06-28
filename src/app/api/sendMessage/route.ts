import TelegramBot from "node-telegram-bot-api";
import {NextRequest, NextResponse} from "next/server";

const token = '6234753581:AAHwN1OkeWg3C81X96_4IBP4SQuBwwSpxQE';
const chatId = '240838604';

const bot = new TelegramBot(token, { polling: false });

const sendMessage = async (name: string, email: string, message: string) => {
  const text = `New message from:\nName: ${name}\nEmail: ${email}\n\n${message}`;
  await bot.sendMessage(chatId, text);
};

export async function POST(req: NextRequest) {
  try {
    // новый способ получать доступ к body – теперь через req.json()
    // почему так сделано, понятия не имею. вообще не интуитивно, даже тупо, на мой взгляд
    const {name, email, message} = await req.json();
    await sendMessage(name, email, message);

    // без этого метода все работает, но возникают противные ошибки.
    // лучше всего именно так показывать next 13, что закончен запрос
    return NextResponse.json(
      {message: 'message sent'},
      {
        status: 200,
      }
    );
  } catch (error) {
    console.error(error);

    // без этого метода все работает, но возникают противные ошибки.
    // лучше всего именно так показывать next 13, что закончен запрос
    return NextResponse.json(
      {error: 'something is wrong'},
      {
        status: 400,
      }
    );
  }
}

