import Tesseract from "tesseract.js";
import checkString from "./zonechecker.js";
import { config } from "dotenv";
import { Client } from "discord.js";

let servers = [
  {
    server: "d2rpvp",
    channel: "1051976164270415912",
    role: "1117864929567973439",
  },
  {
    server: "heidi",
    channel: "1141921595032621098",
    role: "1141921221953454180",
  },
  {
    server: "d2g",
    channel: "1141983532286230538",
    role: "1141984267790987264",
  },
  {
    server: "gentlemen's club",
    channel: "1144903900734947430",
    role: "1144928703076376576",
  },
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
    if (date.getMinutes() == 0 && date.getSeconds() == 59) {
      for (let server of servers) {
        let testChannel = client.channels.cache.get(server.channel);
        Tesseract.recognize(
          "https://thegodofpumpkin.com/terrorzones/terrorzone.png",
          "eng",
          { logger: (m) => console.log(m) }
        )
          .then(({ data: { text } }) => {
            if (checkString(text) == true) {
              testChannel.send(text + `<@&${server.role}>`).catch((e) => {
                console.log(e);
              });
            } else {
              testChannel.send(text).catch((e) => {
                console.log(e);
              });
            }
          })
          .catch((e) => {
            console.log(e);
          });
      }
    }
  }, 1000);
});
