import { config } from "dotenv";
import { Client } from "discord.js";
// import * as Discord from "discord.js";
import announce from "./announce.js";

/**
 * @typedef {Object} BodObject
 * @property {string[]} current - An array of zones as strings.
 * @property {number} duration - A number.
 * @property {string[]} next - An array of zones as strings.
 */

let servers = [
  {
    server: "chan",
    channel: "842458999865606195",
    role: "1141629139783254047",
  },
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
  {
    server: "",
    channel: "1118637090532491418",
    role: "",
  },
];

/**
 * Sends a message to the specified channel.
 * @param {import('discord.js').Channel} channel - The channel to send the message to.
 * @param {string} message - The message to send.
 */

config();
const client = new Client({
  intents: ["Guilds", "GuildMessages", "GuildMembers"],
});
const TOKEN = process.env.DISCORD_TOKEN;
client.login(TOKEN).catch((e) => console.error(e));
client.on("ready", () => {
  console.log("The bot is logged in.");

  setInterval(() => {
    const date = new Date();
    // if (date.getMinutes() == 0 && date.getSeconds() == 0) {
    if (date.getMinutes() < 99) {
      for (let server of servers) {
        let testChannel = client.channels.cache.get(server.channel);
        fetch("https://www.d2emu.com/api/v1/tz").then((res) =>
          res.json().then((bod) => {
            console.log(bod);
            current = "";
            next = "";
            for (let zone of bod.current) {
              current += all_areas[zone][1] + ", ";
            }
            for (let zone of bod.next) {
              next += all_areas[zone][1] + ", ";
            }
            if (
              bod.next.includes("66") ||
              bod.next.includes("108") ||
              bod.next.includes("128")
            ) {
              testChannel.send(
                "Current Terror Zone(s): " +
                  current +
                  "\nNext Terror Zone(s): " +
                  next +
                  `<@&${server.role}>`
              );
            } else if (
              bod.current.includes("66") ||
              bod.current.includes("108") ||
              bod.current.includes("128")
            ) {
              testChannel.send(
                "Current Terror Zone(s): " +
                  current +
                  `<@&${server.role}>` +
                  "\nNext Terror Zone(s): " +
                  next
              );
            } else {
              testChannel.send(
                "Current Terror Zone(s): " +
                  current +
                  "\nNext Terror Zone(s): " +
                  next
              );
            }
          })
        );
      }
    }
  }, 1000);
});
