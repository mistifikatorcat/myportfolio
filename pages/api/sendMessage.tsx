import { NextApiRequest, NextApiResponse } from "next";
import TelegramBot from "node-telegram-bot-api";

const token = '6234753581:AAHwN1OkeWg3C81X96_4IBP4SQuBwwSpxQE';
const chatId = '240838604';

const bot = new TelegramBot(token, { polling: false });

const sendMessage = async (name: string, email: string, message: string) => {
  const text = `New message from:\nName: ${name}\nEmail: ${email}\n\n${message}`;
  await bot.sendMessage(chatId, text);
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === "POST") {
    const { name, email, message } = req.body;
    try {
      await sendMessage(name, email, message);
      res.status(200).end();
    } catch (error) {
      console.error(error);
      res.status(500).end();
    }
  } else {
    res.status(404).end();
  }
}

