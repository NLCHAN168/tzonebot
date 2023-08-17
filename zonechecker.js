let zones = ["chaos", "worldstone", "tal"];

export default function checkString(string) {
  let words = string.split(" ");
  for (let i = 0; i < words.length; i++) {
    if (zones.includes(words[i].toLowerCase())) {
      return true;
    }
  }
}
