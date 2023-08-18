let zones = ["chaos", "worldstone", "tal"];

export default function checkString(string) {
  let words = string.split(" ");
  for (const element of words) {
    if (zones.includes(element.toLowerCase())) {
      return true;
    }
  }
}
