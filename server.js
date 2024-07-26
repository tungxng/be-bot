const TelegramBot = require("node-telegram-bot-api");

// replace the value below with the Telegram token you receive from @BotFather
const token = "";

// Create a bot that uses 'polling' to fetch new updates
const bot = new TelegramBot(token, { polling: true });

const getAge = require("./idage.js");

// Matches "/echo [whatever]"
bot.onText(/\/echo (.+)/, (msg, match) => {
  const chatId = msg.chat.id;
  const resp = match[1]; // the captured "whatever"

  // send back the matched "whatever" to the chat
  bot.sendMessage(chatId, resp);
});

// Listen for any kind of message. There are different kinds of messages.
bot.on("message", (msg) => {
  const chatId = msg.chat.id;
  const createDate = getAge(chatId);
  console.log("12345", createDate);

  // send the message with the button
  bot.sendMessage(chatId, `Habibium`, {
    reply_markup: {
      inline_keyboard: [
        [
          {
            text: "Play game",
            url: "https://t.me/habibium_bot/dogs",
          },
        ],
      ],
    },
  });
});
