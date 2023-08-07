let chaos, baal, tombs;

chaos = "chaos";
baal = "worldstone";
tombs = "tal";

export default function checkString(string) {
  let newString = string;
  let words = string.split(" ");
  words.forEach((element) => {
    if (compare(element.toLowerCase()) == true) {
      newString = string + "*FUNCTION TO PING DISCORD*";
    }
  });
  return newString;
}

function compare(item) {
  if (item == chaos || item == baal || item == tombs) {
    return true;
  } else return false;
}
//merge functionality with discord client to be able to ping roles
