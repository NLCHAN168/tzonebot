import Tesseract from "tesseract.js";
import checkString from "./zonechecker.js";

Tesseract.recognize(
  "https://thegodofpumpkin.com/terrorzones/terrorzone.png",
  "eng",
  { logger: (m) => console.log(m) }
).then(({ data: { text } }) => {
  checkString(text);
  console.log(text);
});
