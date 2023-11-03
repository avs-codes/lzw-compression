import { lzw_encode, lzw_decode } from "./compression.js";

document.getElementById("encodeButton").addEventListener("click", performEncode);
document.getElementById("decodeButton").addEventListener("click", performDecode);

function performEncode() {
  const inputText = document.getElementById("encodeTextarea").value;
  const encodedText = lzw_encode(inputText);
  document.getElementById("encodeTextarea").value = '';
  document.getElementById("encodeOutput").innerText = encodedText;
}

function performDecode() {
  const inputText = document.getElementById("decodeTextarea").value;
  const decodedText = lzw_decode(inputText);
  document.getElementById("decodeTextarea").value = '';
  document.getElementById("decodeOutput").innerText = decodedText;
}