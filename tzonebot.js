import Tesseract from "tesseract.js";
import checkString from "./zonechecker.js";
import {config} from "dotenv";
import { Client } from "discord.js";

config();

let ROLE = process.env.ROLE_ID;
export {ROLE};

const client = new Client({ intents : ["Guilds", "GuildMessages", "GuildMembers"]});
const TOKEN = process.env.DISCORD_TOKEN;
client.login(TOKEN);
client.on('ready', () => {
  var testChannel = client.channels.cache.get(process.env.CHANNEL_ID);
  console.log("The bot is logged in.");

  setInterval(() => {
    const date = new Date();
    if (date.getMinutes() == 2) {
    Tesseract.recognize(
      "https://thegodofpumpkin.com/terrorzones/terrorzone.png",
      "eng",
      { logger: (m) => console.log(m) }
    ).then(({ data: { text } }) => {
      testChannel.send(checkString(text));
    });
  }}, 1000*60);
});

