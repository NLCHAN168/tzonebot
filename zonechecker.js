
let role='1138386480797069312';

let chaos, baal, tombs;

chaos = "chaos";
baal = "worldstone";
tombs = "tal";

export default function checkString(string) {
  let newString = string;
  let words = string.split(" ");
  words.forEach((element) => {
    if (compare(element.toLowerCase()) == true) {
      newString = string + `<@&${role}>`;
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
