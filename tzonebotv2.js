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
    server: "rvi-andalf",
    channel: "1118637090532491418",
    role: "",
  },
  {
    server: "D2R Auction/Trading",
    channel: "1147575529181036645",
    role: "",
  },
  {
    server: "baalz deep",
    channel: "1169806035305889904",
    role: "1170183486007693352",
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
  setTimeout(announce, 3.6e6 - (new Date().getTime() % 3.6e6));
});

export { servers, client, config };
