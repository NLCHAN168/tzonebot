let zones = ["chaos", "worldstone", "tal"];

export default function checkString(string) {
  let words = string.split(" ");
  words.forEach((element) => {
    if (compare(element.toLowerCase()) == true) {
      return true;
    }
  });
}

function compare(item) {
  return zones.includes(item);
}
