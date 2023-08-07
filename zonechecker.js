let chaos, baal, tombs;

chaos = "Chaos";
baal = "Worldstone";
tombs = "Tal";

export default function checkString(string) {
  let newString = string;
  let words = string.split(" ");
  words.forEach((element) => {
    if (compare(element)) {
      // newString = string + discordping
    }
    return newString;
  });
}

function compare(item) {
  if (item == chaos || item == baal || item == tombs) {
    return true;
  } else return false;
}
