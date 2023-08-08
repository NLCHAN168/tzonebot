import {ROLE} from "./tzonebot.js";

let chaos, baal, tombs;

chaos = "flayer";
baal = "worldstone";
tombs = "tal";

export default function checkString(string) {
  let newString = string;
  let words = string.split(" ");
  words.forEach((element) => {
    if (compare(element.toLowerCase()) == true) {
      // newString = string + `<@&${process.env.ROLE_ID}>`;
      newString = string + `<@&${ROLE}>`;
    }
  });
  return newString;
}

function compare(item) {
  if (item == chaos || item == baal || item == tombs) {
    return true;
  } else return false;
}

export {compare} 
//merge functionality with discord client to be able to ping roles
