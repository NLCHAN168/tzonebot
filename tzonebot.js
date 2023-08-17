import Tesseract from "tesseract.js";
import checkString from "./zonechecker.js";
import { config } from "dotenv";
import { Client } from "discord.js";

let servers = [
  { channel: "1141629037836509234", role: "1141629139783254047" },
  { channel: "842458999865606195", role: "1138386480797069312" },
];

config();

const client = new Client({
  intents: ["Guilds", "GuildMessages", "GuildMembers"],
});
const TOKEN = process.env.DISCORD_TOKEN;
client.login(TOKEN);
client.on("ready", () => {
  console.log("The bot is logged in.");

  setInterval(() => {
    const date = new Date();
    if (date.getMinutes() == 2) {
      for (let server of servers) {
        let testChannel = client.channels.cache.get(server.channel);
        Tesseract.recognize(
          "https://thegodofpumpkin.com/terrorzones/terrorzone.png",
          "eng",
          { logger: (m) => console.log(m) }
        ).then(({ data: { text } }) => {
          if (checkString(text) == true) {
            testChannel.send(text + `<@&${server.role}>`);
          } else {
            testChannel.send(text);
          }
        });
      }
    }
  }, 6000);
});
