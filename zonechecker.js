import {ROLE} from "./tzonebot.js";

let zones = [
  "chaos", "baal", "tombs"
];

export default function checkString(string) {
  let newString = string;
  let words = string.split(" ");
  words.forEach((element) => {
    if (compare(element.toLowerCase()) == true) {
      newString = string + `<@&${ROLE}>`;
    }
  });
  return newString;
}

function compare(item) {
  return zones.includes(item);
}

///hi///