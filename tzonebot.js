import Tesseract from "tesseract.js";
import checkString from "./zonechecker.js";
import {config} from "dotenv";
import { Client } from "discord.js";

config();

const client = new Client({ intents : ["Guilds", "GuildMessages"]});
const TOKEN = process.env.DISCORD_TOKEN;
client.login(TOKEN);
client.on('ready', () => {
  var testChannel = client.channels.cache.get('842458999865606195');
  console.log("The bot is logged in.");

  setInterval(() => {
    Tesseract.recognize(
      "https://thegodofpumpkin.com/terrorzones/terrorzone.png",
      "eng",
      { logger: (m) => console.log(m) }
    ).then(({ data: { text } }) => {
      testChannel.send(checkString(text));
    });
  }, 5000);
})

console.log("Guilds:" + client.intents);

// Tesseract.recognize(
//   "https://thegodofpumpkin.com/terrorzones/terrorzone.png",
//   "eng",
//   { logger: (m) => console.log(m) }
// ).then(({ data: { text } }) => {
//   console.log(checkString(text));
// });